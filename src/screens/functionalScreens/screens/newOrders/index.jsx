import { View, Text, ScrollView, Dimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import Order from '../../../../components/molecules/order'
import styles from './style'
import sProduct1 from '../../../../assets/sProduct1.png'
import sProduct2 from '../../../../assets/sProduct2.png'
import sProduct3 from '../../../../assets/sProduct3.png'
import sProduct4 from '../../../../assets/sProduct4.png'
import sProduct5 from '../../../../assets/sProduct5.png'
import sProduct6 from '../../../../assets/sProduct6.png'
import sProduct7 from '../../../../assets/sProduct7.png'
import { useFocusEffect } from '@react-navigation/native'
import { fetchData } from '../../../../hooks/useFetch'
import AppLoader from '../../../../components/molecules/AppLoader'
const NewOrderStage = ({ navigation }) => {
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
        <>
            <FlatList
                data={orders}
                contentContainerStyle={styles.orderContainer}
                keyExtractor={(item) => item.UOID}
                renderItem={({ item }) => (
                    <Order navigation={navigation} order={item} />
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

export default NewOrderStage