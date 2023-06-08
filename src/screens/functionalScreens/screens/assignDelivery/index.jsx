import { View, Text, ScrollView, Dimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import Order from '../../../../components/molecules/order'
import styles from './style'
import { useFocusEffect } from '@react-navigation/native'
import { fetchData } from '../../../../hooks/useFetch'
const AssignDelivery = ({ navigation }) => {
    const { width, height } = new Dimensions.get("window")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [shopsNumber, setShopsNumber] = useState(0)
    const [orders, setOrders] = useState([])
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
        // <ScrollView style={[styles.orderContainer, { height, width }]} contentContainerStyle={{ rowGap: 20, marginBottom: 30, }} showsVerticalScrollIndicator={false} >

        //     {
        //         orders.map(item => (
        //             <Order navigation={navigation} order={item} />
        //         ))
        //     }

        // </ScrollView>
        <FlatList
            data={orders}
            contentContainerStyle={styles.orderContainer}
            keyExtractor={(item) => item.UOID}
            renderItem={({ item }) => (
                <Order navigation={navigation} order={item} />
            )}
        />
    )
}

export default AssignDelivery