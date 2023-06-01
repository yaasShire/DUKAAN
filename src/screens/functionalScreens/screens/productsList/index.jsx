import { View, Text, StatusBar, ScrollView, FlatList, I18nManager, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'
import Header from '../../../../components/atoms/header'
import Filter from '../../../../components/molecules/filter'
import ProductCard from '../../../../components/molecules/productCard'
import sProduct1 from '../../../../assets/sProduct1.png'
import sProduct2 from '../../../../assets/sProduct2.png'
import sProduct3 from '../../../../assets/sProduct3.png'
import sProduct4 from '../../../../assets/sProduct4.png'
import sProduct5 from '../../../../assets/sProduct5.png'
import sProduct6 from '../../../../assets/sProduct6.png'
import sProduct7 from '../../../../assets/sProduct7.png'
import AddProductButton from '../../../../components/atoms/addProductButton'
import AppHeader from '../../../../components/molecules/header'
import { AnimatedFAB } from 'react-native-paper';
import { fetchData, useFetch } from '../../../../hooks/useFetch'
import AppLoader from '../../../../components/molecules/AppLoader'
import AppError from '../../../../components/molecules/AppError'
import NoProduct from './noProduct'
const ProductsList = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [products, setProducts] = useState([])
    const [isNoProducts, setIsNoProducts] = useState(false)
    const data = [
        {
            id: 1,
            productName: "Gasoline car oil ",
            Qty: 200,
            price: 500,
            image: require('../../../../assets/images/mechanic1.jpg'),
            numberOfSales: 500,
            inStock: 1200,
            shipping: 2
        },
        {
            id: 2,
            productName: "Car Oil Super natural",
            Qty: 300,
            price: 400,
            image: require('../../../../assets/images/mechanic2.jpg'),
            numberOfSales: 900,
            inStock: 1300,
            shipping: 4

        },
        {
            id: 3,
            productName: "Side View Mirror",
            Qty: 900,
            price: 700,
            image: require('../../../../assets/images/mechanic3.jpg'),
            numberOfSales: 800,
            inStock: 100,
            shipping: 3
        },
        {
            id: 4,
            productName: "Gamber",
            Qty: 800,
            price: 900,
            image: require('../../../../assets/images/mechanic4.jpg'),
            numberOfSales: 1500,
            inStock: 1500,
            shipping: 6
        },
        {
            id: 5,
            productName: "Air conditioner",
            Qty: 350,
            price: 1000,
            image: require('../../../../assets/images/mechanic3.jpg'),
            numberOfSales: 200,
            inStock: 9000,
            shipping: 9
        },

    ]
    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await fetchData('seller/products/view', setError, setIsLoading)
            setProducts(data.data)
            if (data.data.length == 0) {
                console.log("empty")
                setIsNoProducts(true)
            }
        }
        fetchProducts()
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <AppHeader showAddButton={true} navigation={navigation} menu={false} addproductButton={true} />
            {/*filter  */}
            <View>
                <Filter navigation={navigation} />
            </View>
            <FlatList
                keyExtractor={(item) => item.UPID}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ rowGap: 10, }}
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

        </SafeAreaView>
    )
}

export default ProductsList
