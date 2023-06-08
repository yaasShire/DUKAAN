import { View, Text, StatusBar, ScrollView, FlatList, TouchableOpacity, Platform, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Header from '../../../../components/atoms/header'
import DashboardCard from '../../../../components/atoms/dashboardCard'
import SellerCardAction from '../../../../components/atoms/SellerActionCard'
import Order from '../../../../components/molecules/order'
import NoOrderCard from '../../../../components/molecules/noOrderCard'
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreenReport from '../../../../components/molecules/homeScreenReport'
import { globalStyles } from '../../../../globalConstants/styles'
import AppHeader from '../../../../components/molecules/header'
import { Badge } from 'react-native-paper'
// icons
import ProductImage from '../../../../assets/images/product.png'
import reportImage from '../../../../assets/images/report.png'
import shopImage from '../../../../assets/images/shop.png'
import profileImage from '../../../../assets/images/profile.png'
import { Image } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { fetchData } from '../../../../hooks/useFetch'
// import NoOrderCard from '../../../../components/molecules/noOrderCard'
// icons ends here

const Home = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [shopsNumber, setShopsNumber] = useState(0)
    const [orders, setOrders] = useState([])
    const orderss = [
        {
            id: 1,
            orderNo: 384848,
            customerName: "Nuur Ali Ahmed",
            ammount: 46,
            products: [
                {
                    id: 1,
                    name: "Gasoline",
                    quantity: 5,
                    price: 6,
                    ammount: 30,
                    orderId: 1,
                    customerName: "Nuur Ali Ahmed",
                    image: require('../../../../assets/sProduct1.png')
                },
                {
                    id: 2,
                    name: "Motor cleaner",
                    quantity: 4,
                    price: 4,
                    ammount: 16,
                    orderId: 1,
                    customerName: "Nuur Ali Ahmed",
                    image: require('../../../../assets/sProduct2.png')
                },
            ]
        },
        {
            id: 2,
            orderNo: 574849,
            customerName: "Sadaam Daahir Tahliil",
            ammount: 50,
            products: [
                {
                    id: 1,
                    name: "Side Mirror oil",
                    quantity: 5,
                    price: 6,
                    ammount: 30,
                    orderId: 2,
                    customerName: "Faarah Ahmed Haaji",
                    image: require('../../../../assets/sProduct3.png')
                },
                {
                    id: 2,
                    name: "Motor cleaner",
                    quantity: 5,
                    price: 4,
                    ammount: 20,
                    orderId: 2,
                    customerName: "Abdi Naasir Nuur Huseyn",
                    image: require('../../../../assets/sProduct4.png')
                },
            ]
        },
        {
            id: 3,
            orderNo: 390848,
            customerName: "Safiya mustaf Nuur",
            ammount: 76,
            products: [
                {
                    id: 1,
                    name: "Gumber",
                    quantity: 6,
                    price: 8,
                    ammount: 48,
                    orderId: 3,
                    customerName: "Muumin Abdi wali Qaasim",
                    image: require('../../../../assets/sProduct5.png')
                },
                {
                    id: 2,
                    name: "Air conditioner",
                    quantity: 4,
                    price: 7,
                    ammount: 28,
                    orderId: 3,
                    customerName: "Nuur Ali Ahmed",
                    image: require('../../../../assets/sProduct6.png')
                },
            ]
        },
        {
            id: 4,
            orderNo: 3384848,
            customerName: "Yahye Shukri Hilowle",
            ammount: 99,
            products: [
                {
                    id: 1,
                    name: "Tires",
                    quantity: 7,
                    price: 9,
                    ammount: 63,
                    orderId: 4,
                    customerName: "Muumin Abdi wali Qaasim",
                    image: require('../../../../assets/sProduct5.png')
                },
                {
                    id: 2,
                    name: "Motor washer",
                    quantity: 9,
                    price: 4,
                    ammount: 36,
                    orderId: 4,
                    customerName: "Nuur Ali Ahmed",
                    image: require('../../../../assets/sProduct6.png')
                },
            ]
        },

    ]


    useFocusEffect(
        React.useCallback(() => {
            const fetchProducts = async () => {
                const { data } = await fetchData('seller/shop/view/', setError, setIsLoading)
                if (data?.data?.length) {
                    setShopsNumber(data?.data?.length)
                }
            }
            fetchProducts()
            const fetchOrders = async () => {
                const { data } = await fetchData('seller/orders/view/', setError, setIsLoading)
                if (data?.message?.length) {
                    setOrders(data?.message)
                }
            }
            fetchOrders()

            return () => {
                // Actions to perform when the screen loses focus
            };
        }, [])
    );

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <StatusBar barStyle='light-content' />
            <AppHeader showLogo={true} navigation={navigation} menu={false} />
            <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false} nestedScrollEnabled={true} stickyHeaderIndices={[0]} style={styles.mainScroll}>
                <View style={styles.topContent}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.infoCardsWrapper}>
                        <DashboardCard description={'Today Sales'} ammount={0} sign={true} />
                        <DashboardCard description={'Total Customers'} ammount={0} sign={false} />
                        <DashboardCard description={'Expense'} ammount={0} sign={true} />
                        <DashboardCard description={'Number Of Shops'} ammount={shopsNumber} sign={false} />
                    </ScrollView>

                </View>
                <View showsVerticalScrollIndicator={false} nestedScrollEnabled={true} scrollEnabled={true} style={styles.bottomContent}>
                    <View style={styles.subBottomContent}>
                        <View style={styles.sellerActionWrapper}>
                            <SellerCardAction actionName={"Profile"} image={profileImage} navigation={navigation} />
                            <SellerCardAction actionName={"Shop"} image={shopImage} navigation={navigation} />
                            <SellerCardAction actionName={"Product"} image={ProductImage} navigation={navigation} />
                            <SellerCardAction actionName={"Report"} image={reportImage} navigation={navigation} />
                        </View>
                        <View style={styles.recentOrdersWrapper}>
                            <Text style={styles.header}><Text style={{ color: "red", fontSize: 18 }}>*</Text> Recent Orders</Text>
                        </View>
                        <FlatList
                            nestedScrollEnabled={false}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ rowGap: 10, }}
                            keyExtractor={(item) => item?.UOID}
                            scrollEnabled={false}
                            data={orders}
                            renderItem={({ item }) => (
                                <Order order={item} navigation={navigation} />
                            )}
                        />
                        {
                            orders.length == 0 && (
                                <NoOrderCard />
                            )
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home