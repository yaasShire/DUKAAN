import { StatusBar, FlatList, SafeAreaView, View, Image, Button, TouchableOpacity, RefreshControl } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import styles from './style'
import ShopCard from '../../../../components/molecules/shopCard';
// import AppHeader from '../../../../components/molecules/appHeader';
import { fetchData } from '../../../../hooks/useFetch';
import AppLoader from '../../../../components/molecules/AppLoader';
import { Text } from 'react-native-paper';
import { globalStyles } from '../../../../globalConstants/styles';
import NoShopFound from './noShop';
import { useFocusEffect } from '@react-navigation/native';
import AppHeader from '../../../../components/molecules/header';
import { ScrollView } from 'react-native-gesture-handler';
const Shops = ({ navigation }) => {
    const [shopData, setShopData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [isNoShops, setIsNoShops] = useState(false)
    const [refreshing, setRefreshing] = useState(false)

    const fetchShopData = async () => {
        const { data } = await fetchData('seller/shop/view', setError, setIsLoading)
        if (data?.data) {
            setShopData(data?.data)
            setRefreshing(false)
        }
        if (data?.data?.length == 0) {
            setIsNoShops(true)
        }
    }
    useFocusEffect(
        useCallback(() => {
            fetchShopData()
        }, [])
    )

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <AppHeader addShopButton={true} title="Shops" navigation={navigation} color={"#000"} backButton={true} screen={"Shops"} />
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetchShopData} />} style={{ flex: 1 }}>
                <FlatList
                    scrollEnabled={false}
                    keyExtractor={(item) => item.USID}
                    showsVerticalScrollIndicator={true}
                    scrollsToTop={true}
                    initialNumToRender={10}
                    scrollIndicatorInsets={10}
                    contentContainerStyle={{ rowGap: 15, padding: 15 }}
                    style={styles.cards}
                    data={shopData}
                    enableEmptySections={true}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={fetchShopData} />
                    }
                    renderItem={({ item }) => (
                        <ShopCard key={Date().toString()} shop={item} navigation={navigation} />
                    )}
                />
                {
                    isNoShops && (
                        <NoShopFound navigation={navigation} />
                    )
                }
            </ScrollView>
            {
                isLoading && (
                    <AppLoader />
                )
            }
        </SafeAreaView>
    )
}
export default Shops