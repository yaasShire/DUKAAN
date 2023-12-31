import { View, Text, Image, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
// import { SafeAreaView } from 'react-native-safe-area-context'
import { Carousel } from 'react-native-ui-lib/src/components/carousel'
import { postData } from '../../../../hooks/usePost'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import ShopInfoCard from './components/shopInfoCard'
import TitleHeader from './components/title'
import ProductCard from './components/productCard'
import { getShopImages } from '../../../../utils/utilityFunctions'
import NoProductForShopProfile from './components/noProducts'
import { FAB } from 'react-native-paper'
import EditShopButton from './components/editButton'
import ProductSmallCard from '../../../../components/molecules/productSmallCard'
import AppLoader from '../../../../components/molecules/AppLoader'
const ShopProfile = ({ route, navigation }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [products, setProducts] = useState([])
    const [isNoProducts, setIsNoProducts] = useState(false)
    useEffect(() => {
        const fetchRelatedProducts = async () => {
            const shopId = new FormData()
            shopId.append('USID', route?.params?.data?.USID)
            const { result } = await postData('seller/products/search', shopId, setError, setIsLoading)
            console.log(route?.params?.data?.USID)
            setProducts(result?.data)
            if (!result?.data?.length) {
                setIsNoProducts(true)
            }
        }
        fetchRelatedProducts()
    }, [])
    const shopImages = getShopImages(route?.params?.data)
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <ScrollView style={styles.contentScrollWrapper} showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
                <Carousel
                    autoplay={true}
                    loop={true}
                    showCounter={Platform.OS == 'android' ? true : false}
                    pageControlPosition='over' style={styles.carousel}>
                    {
                        shopImages.map(image => (
                            <Image key={image} source={{ uri: `https://api.elabis.app/storage/images/shops/${image}` }} style={styles.image} />
                        ))
                    }
                </Carousel>
                <View style={styles.bottomContent}>
                    <View style={styles.barWrapper}>
                        <View style={styles.bar} />
                    </View>
                    <View style={styles.shopEditButtonWrapper}>
                        <EditShopButton navigation={navigation} shop={route?.params?.data} />
                    </View>
                    <View style={styles.shopInfoCardWrapper}>
                        <ShopInfoCard shop={route?.params?.data} />
                    </View>
                    <View style={styles.productInfoWrapper}>
                        <TitleHeader navigation={navigation} isNoProducts={true} />
                        {
                            !isNoProducts ?
                                <FlatList
                                    horizontal={true}
                                    contentContainerStyle={styles.productsScrollWrapper}
                                    showsHorizontalScrollIndicator={false}
                                    data={products}
                                    keyExtractor={item => item.UPID}
                                    renderItem={({ item }) => (
                                        <ProductSmallCard product={item} />
                                    )}
                                /> :
                                <NoProductForShopProfile navigation={navigation} />
                        }
                    </View>
                </View>
                {
                    isLoading && (
                        <AppLoader />
                    )
                }
            </ScrollView>
        </View>
    )
}

export default ShopProfile