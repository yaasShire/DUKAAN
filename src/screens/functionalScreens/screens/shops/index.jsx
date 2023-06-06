import { StatusBar, FlatList, SafeAreaView, View, Image, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import ShopCard from '../../../../components/molecules/shopCard';
import AppHeader from '../../../../components/molecules/appHeader';
// import AppHeader from '../../../../components/molecules/header';
import { fetchData } from '../../../../hooks/useFetch';
import AppLoader from '../../../../components/molecules/AppLoader';
import { Text } from 'react-native-paper';
import NoShopsImage from '../../../../assets/images/noShops.png'
import { globalStyles } from '../../../../globalConstants/styles';
import NoShopFound from './noShop';
import { useFocusEffect } from '@react-navigation/native';
const Shops = ({ navigation }) => {
    const [shopData, setShopData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [isNoShops, setIsNoShops] = useState(false)
    useFocusEffect(
        React.useCallback(() => {
            const fetchShopData = async () => {
                const { data } = await fetchData('seller/shop/view', setError, setIsLoading)
                if (data?.data !== undefined) {
                    setShopData(data.data)
                }
                if (data?.data?.length == 0) {
                    setIsNoShops(true)
                }
            }
            fetchShopData()
            return () => {
                // Actions to perform when the screen loses focus
                console.log('Screen is blurred');
            };
        }, [])
    );

    useFocusEffect(
        React.useCallback(() => {
            const fetchShopData = async () => {
                const { data } = await fetchData('seller/shop/view', setError, setIsLoading)
                if (data?.data !== undefined) {
                    setShopData(data.data)
                }
                if (data?.data?.length == 0) {
                    setIsNoShops(true)
                }
            }
            fetchShopData()
            return () => {
                // Actions to perform when the screen loses focus
            };
        }, [])
    );

    useEffect(() => {
        const fetchShopData = async () => {
            const { data } = await fetchData('seller/shop/view', setError, setIsLoading)
            if (data?.data !== undefined) {
                setShopData(data.data)
            }
            if (data?.data?.length == 0) {
                setIsNoShops(true)
            }
        }
        fetchShopData()

    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <AppHeader title="Shops" navigation={navigation} color={"#000"} backButton={true} screen={"Shops"} />
            <FlatList
                keyExtractor={(item) => item.USID}
                showsVerticalScrollIndicator={true}
                scrollsToTop={true}
                initialNumToRender={10}
                scrollIndicatorInsets={10}
                contentContainerStyle={{ rowGap: 15, padding: 15 }}
                style={styles.cards}
                data={shopData}
                renderItem={({ item }) => (
                    <ShopCard key={Date().toString()} shop={item} navigation={navigation} />
                )}
            />
            {
                isLoading && (
                    <AppLoader />
                )
            }
            {
                isNoShops && (
                    <NoShopFound navigation={navigation} />
                )
            }
        </SafeAreaView>
    )
}
export default Shops