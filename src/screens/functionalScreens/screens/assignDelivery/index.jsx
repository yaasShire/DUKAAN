import { View, Text, ScrollView, Dimensions, FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import Order from '../../../../components/molecules/order'
import styles from './style'
import { useFocusEffect } from '@react-navigation/native'
import { fetchData } from '../../../../hooks/useFetch'
import AppLoader from '../../../../components/molecules/AppLoader'
const AssignDelivery = ({ navigation }) => {
    const { width, height } = new Dimensions.get("window")
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [shopsNumber, setShopsNumber] = useState(0)
    const [orders, setOrders] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const fetchOrders = async () => {
        const { data } = await fetchData('seller/orders/view', setError, setIsLoading)
        if (data?.message?.length) {
            setOrders(data?.message)
            setRefreshing(false)
        }
    }
    useEffect(() => {
        fetchOrders()
    }, [])
    return (
        <>
            <FlatList
                data={orders}
                contentContainerStyle={styles.orderContainer}
                keyExtractor={(item) => item.UOID}
                enableEmptySections={true}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={fetchOrders} />
                }
                renderItem={({ item }) => (
                    <Order navigation={navigation} order={item} assign={true} />
                )}
            />
            {
                isLoading && (
                    <AppLoader />
                )
            }
        </>
    )
}

export default AssignDelivery