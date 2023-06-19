import { View, Text, StatusBar, ScrollView, FlatList, I18nManager, RefreshControl, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'
import Header from '../../../../components/atoms/header'
import Filter from '../../../../components/molecules/filter'
import ProductCard from '../../../../components/molecules/productCard'
import AddProductButton from '../../../../components/atoms/addProductButton'
import AppHeader from '../../../../components/molecules/header'
import { ActivityIndicator, AnimatedFAB } from 'react-native-paper';
import { fetchData, useFetch } from '../../../../hooks/useFetch'
import AppLoader from '../../../../components/molecules/AppLoader'
import AppError from '../../../../components/molecules/AppError'
import NoProduct from './components/noProduct'
import { useFocusEffect } from '@react-navigation/native'
import NoDataFiltered from './components/noDataFiltered'
import { useDispatch, useSelector } from 'react-redux'
import { setFetchedProducts } from '../../../../redux/fetchedProducts'
const ProductsList = ({ navigation, route }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [products, setProducts] = useState(route?.params?.data)
    const [isNoProducts, setIsNoProducts] = useState(false)
    const [isFilterEmpty, setIsFilterEmpty] = useState(false)
    const [refreshing, setRefreshing] = useState(false)
    const dispatch = useDispatch()
    const globalProducts = useSelector(state => state.fetchedProducts.products)

    const fetchProducts = async () => {
        const { data } = await fetchData('seller/products/view', setError, setIsLoading)
        if (data?.data?.length > 0) {
            dispatch(setFetchedProducts(data?.data))
            setRefreshing(false)

        }
        if (data?.data?.length == 0) {
            setIsNoProducts(true)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    const refetchProducts = async () => {
        setIsLoading(true)
        const { data } = await fetchData('seller/products/view', setError, setIsLoading)
        if (data?.data?.length > 0) {
            dispatch(setFetchedProducts(data?.data))
            setRefreshing(false)
        }
        if (data?.data?.length == 0) {
            setIsNoProducts(true)
        }
    }



    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <AppHeader title='Products' showAddButton={true} showFilter={true} navigation={navigation} menu={false} addproductButton={true} />
            {refreshing ? <ActivityIndicator /> : null}
            <FlatList
                keyExtractor={(item) => item.UPID}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.productListsWrapper}
                data={globalProducts}
                scrollsToTop={true}
                initialNumToRender={10}
                scrollIndicatorInsets={10}
                enableEmptySections={true}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={fetchProducts} />
                }
                renderItem={({ item }) => (
                    <ProductCard key={item.id} item={item} navigation={navigation} />
                )}
            />
            {
                isLoading && (
                    <AppLoader />
                )
            }
            {
                error && (
                    <AppError error={error} />
                )
            }
            {
                isNoProducts && (
                    <NoProduct navigation={navigation} />
                )
            }
            {
                globalProducts?.length == 0 && (
                    <NoDataFiltered route={route} setIsFilterEmpty={setIsFilterEmpty} setProducts={setProducts} onPress={() => refetchProducts()} />
                )
            }
        </SafeAreaView>
    )
}

export default ProductsList
