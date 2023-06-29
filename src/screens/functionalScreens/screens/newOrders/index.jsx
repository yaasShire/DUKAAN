import { View, Text, ScrollView, Dimensions, FlatList, RefreshControl, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
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
import NoOrderFound from '../../../../components/molecules/noOrderFound'
import { HeightDimension } from '../../../../globalConstants/styles'
const NewOrderStage = ({ navigation }) => {
    const { width, height } = new Dimensions.get("window")
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [shopsNumber, setShopsNumber] = useState(0)
    const [orders, setOrders] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    const fetchOrders = async () => {
        const { data } = await fetchData('seller/orders/view', setError, setIsLoading)
        if (data?.message?.length) {
            const orderData = data?.message?.filter(order => order?.status == 1)
            setOrders(orderData)
            setRefreshing(false)
        }
    }
    useEffect(() => {
        fetchOrders()
    }, [])
    if (orders.length == 0) {
        <NoOrderFound />
    }
    console.log(orders.length)

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetchOrders} />}>
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
                            <Order navigation={navigation} order={item} />
                        )}
                    />
                ) :
                    <View style={{ height: Dimensions.get('screen').height / 1.3, justifyContent: "flex-start" }}>
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

export default NewOrderStage