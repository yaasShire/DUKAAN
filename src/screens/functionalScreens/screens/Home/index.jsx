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

    useFocusEffect(
        React.useCallback(() => {
            const fetchProducts = async () => {
                const { data } = await fetchData('seller/shop/view', setError, setIsLoading)
                if (data?.data?.length) {
                    setShopsNumber(data?.data?.length)
                }
            }
            fetchProducts()
            const fetchOrders = async () => {
                const { data } = await fetchData('seller/orders/view', setError, setIsLoading)
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
                            contentContainerStyle={{ rowGap: 10, paddingVertical: 5 }}
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