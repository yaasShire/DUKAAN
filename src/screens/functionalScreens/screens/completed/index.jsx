import { View, Text, ScrollView, Dimensions, FlatList, RefreshControl, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import Order from '../../../../components/molecules/order'
import styles from './style'
import { useFocusEffect } from '@react-navigation/native'
import { fetchData } from '../../../../hooks/useFetch'
import AppLoader from '../../../../components/molecules/AppLoader'
import NoOrderFound from '../../../../components/molecules/noOrderFound'
const Completed = ({ navigation }) => {
    const { width, height } = new Dimensions.get("window")
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [shopsNumber, setShopsNumber] = useState(0)
    const [orders, setOrders] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const fetchOrders = async () => {
        const { data } = await fetchData('seller/orders/view', setError, setIsLoading)
        if (data?.message?.length) {
            const orderData = data?.message?.filter(order => order?.status == 5)
            setOrders(orderData)
            setRefreshing(false)
        }
    }
    useEffect(() => {
        fetchOrders()
    }, [])
    return (
        <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetchOrders} />}>
            <StatusBar barStyle={'light-content'} />

            {
                orders.length !== 0 ? (
                    <FlatList
                        scrollEnabled={false}
                        showsVerticalScrollIndicator={false}
                        data={orders}
                        contentContainerStyle={styles.orderContainer}
                        keyExtractor={(item) => item.UOID}
                        enableEmptySections={true}

                        renderItem={({ item }) => (
                            <Order status="completed" navigation={navigation} order={item} />
                        )}
                    />
                ) : <View style={{ height: Dimensions.get('screen').height / 1.3, justifyContent: "flex-start" }}>
                    <NoOrderFound />
                </View>
            }
            {
                isLoading && (
                    <AppLoader />
                )
            }
        </ScrollView>

    )
}

export default Completed