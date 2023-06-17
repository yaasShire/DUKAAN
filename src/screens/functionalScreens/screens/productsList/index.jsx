import { View, Text, StatusBar, ScrollView, FlatList, I18nManager, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'
import Header from '../../../../components/atoms/header'
import Filter from '../../../../components/molecules/filter'
import ProductCard from '../../../../components/molecules/productCard'
import AddProductButton from '../../../../components/atoms/addProductButton'
import AppHeader from '../../../../components/molecules/header'
import { AnimatedFAB } from 'react-native-paper';
import { fetchData, useFetch } from '../../../../hooks/useFetch'
import AppLoader from '../../../../components/molecules/AppLoader'
import AppError from '../../../../components/molecules/AppError'
import NoProduct from './components/noProduct'
import { useFocusEffect } from '@react-navigation/native'
import NoDataFiltered from './components/noDataFiltered'
const ProductsList = ({ navigation, route }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [products, setProducts] = useState(route?.params?.data)
    const [isNoProducts, setIsNoProducts] = useState(false)
    const [isFilterEmpty, setIsFilterEmpty] = useState(false)
    useFocusEffect(
        React.useCallback(() => {
            const fetchProducts = async () => {
                console.log('shaqeye')
                setIsLoading(true)
                const { data } = await fetchData('seller/products/view', setError, setIsLoading)
                if (route?.params?.hasOwnProperty('data')) {
                    if (route?.params?.data?.length == 0) {
                        setIsFilterEmpty(true)
                    } else {
                        setProducts(route?.params?.data)
                    }
                } else {
                    setProducts(data.data)
                }
                if (data.data.length == 0) {
                    setIsNoProducts(true)
                }
            }
            fetchProducts()
        }, [])
    );


    const refetchProducts = async () => {
        setIsLoading(true)
        const { data } = await fetchData('seller/products/view', setError, setIsLoading)
        setProducts(data.data)
        if (data?.data?.length > 0) {
        }
        if (data.data.length == 0) {
            setIsNoProducts(true)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <AppHeader title='Products' showAddButton={true} navigation={navigation} menu={false} addproductButton={true} />

            <FlatList
                keyExtractor={(item) => item.UPID}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.productListsWrapper}
                data={products}
                scrollsToTop={true}
                initialNumToRender={10}
                scrollIndicatorInsets={10}
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
                isFilterEmpty && (
                    <NoDataFiltered route={route} setIsFilterEmpty={setIsFilterEmpty} setProducts={setProducts} onPress={() => refetchProducts()} />
                )
            }
        </SafeAreaView>
    )
}

export default ProductsList
