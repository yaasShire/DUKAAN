import { View, Text, StatusBar, Platform, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import styles from './style'
import mechanicBanner from '../../../../assets/mechanicB.jpg'
import profile from '../../../../assets/justin.jpg'
import product1 from '../../../../assets/sProduct1.png'
import product2 from '../../../../assets/sProduct2.png'
import product3 from '../../../../assets/sProduct3.png'
import product4 from '../../../../assets/sProduct4.png'
import product5 from '../../../../assets/sProduct5.png'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import DecisionButton from '../../../../components/atoms/decisionButton'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppHeader from '../../../../components/molecules/appHeader'
import { GridList, GridListItem, GridView } from 'react-native-ui-lib'
import { Feather } from '@expo/vector-icons'
import { globalStyles } from '../../../../globalConstants/styles'
import shopPlaceHolder from '../../../../assets/images/shopPlaceHolder.png'
import { useFocusEffect } from '@react-navigation/native'
import { postData } from '../../../../hooks/usePost'
import NoProduct from '../../../../assets/images/noShops.png'
import NoProductForProfile from './components/noProducts'
import ProductCard from './components/productCard'


const ShopProfile = ({ navigation, route }) => {
    const [products, setProducts] = useState([])
    const [isNoProducts, setIsNoProducts] = useState(false)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const data = [
        {
            id: 1,
            name: "Moto Cleaner",
            image: product1,
            stock: 500
        },
        {
            id: 2,
            name: "Gasoline",
            image: product2,
            stock: 700
        },
        {
            id: 3,
            name: "Engine Oil",
            image: product3,
            stock: 900
        },
        {
            id: 4,
            name: "Jumper",
            image: product4,
            stock: 300
        },
        {
            id: 5,
            name: "Side Mirror",
            image: product5,
            stock: 850
        },
    ]
    const ShopHeader = () => (
        <View>
            <Text>Products</Text>
        </View>
    )



    useFocusEffect(
        React.useCallback(() => {
            const fetchProducts = async () => {
                const shopId = new FormData()
                shopId.append('USID', route.params.data.USID)
                const data = await postData('seller/shop/products', shopId, setError, setIsLoading)
                setProducts(data.result.data)
                // console.warn(data.result.data.length);
                if (!data.result.data.length) {
                    setIsNoProducts(true)
                    console.log("empty")
                }
            }
            fetchProducts()
            return () => {
                // Actions to perform when the screen loses focus
            };
        }, [])
    );



    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={Platform.OS == 'android' ? 'light-content' : 'dark-content'} />
            <ImageBackground style={styles.bannerWrapper} source={mechanicBanner}>
                <AppHeader title={"Shop Profile"} navigation={navigation} color={"#fff"} />
            </ImageBackground>
            <View style={styles.miniWrapper}>
                <View style={styles.cardWrapper}>
                    <View style={styles.profileCard}>
                        <View style={styles.profileImageWrapper}>
                            {/* <Image accessible={false} source={route.params.data.image} style={styles.image} /> */}
                            <Image source={route.params.data?.photos ? { uri: "https://sweyn.co.uk/storage/images/shops/" + route.params.data?.photos } : shopPlaceHolder} style={styles.image} />

                        </View>
                        <View style={styles.shopNameLocationWrapper}>
                            <Text style={styles.shopName}>{route.params.data.name}</Text>
                            <Text style={styles.locationText}>Muqdisho, Benadir</Text>
                        </View>
                        {/* <View style={styles.infoWrapper}>
                            <View style={styles.singleInfoWrapper}>
                                <Text style={styles.singleInfoWrapperTitle}>Purchased</Text>
                                <Text style={styles.singleInfoWrapperValue}>200</Text>
                            </View>
                            <View style={styles.singleInfoWrapper}>
                                <Text style={styles.singleInfoWrapperTitle}>Wished</Text>
                                <Text style={styles.singleInfoWrapperValue}>100</Text>
                            </View>
                            <View style={styles.singleInfoWrapper}>
                                <Text style={styles.singleInfoWrapperTitle}>Liked</Text>
                                <Text style={styles.singleInfoWrapperValue}>380</Text>
                            </View>
                        </View> */}
                    </View>
                </View>
                <View style={styles.bottomContentWrapper}>
                    <View style={styles.productsWrapperTitle}>
                        <Text style={styles.productsWrapperTitleText}>Products</Text>
                        {/* <View style={styles.sellAllWrapper}>
                            <Text>See all</Text>
                            <TouchableOpacity>
                                <Feather size={23} color={globalStyles.colors.secondaryGray} name='chevron-right' />
                            </TouchableOpacity>
                        </View> */}
                    </View>
                    {
                        !isNoProducts ?
                            <FlatList
                                horizontal={true}
                                contentContainerStyle={styles.productList}
                                showsHorizontalScrollIndicator={false}
                                data={products}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => (
                                    <ProductCard item={item} />
                                )}
                            /> :
                            (
                                <NoProductForProfile navigation={navigation} />

                            )
                    }
                    {/* <View style={styles.buttonsHolder}> */}
                    {/* <DecisionButton title="Cancel" navigation={navigation} /> */}
                    {/* <DecisionButton title="Update Shop" navigation={navigation} /> */}

                    {/* </View> */}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ShopProfile 