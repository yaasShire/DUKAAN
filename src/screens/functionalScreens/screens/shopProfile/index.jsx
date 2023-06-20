import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
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
const ShopProfile = ({ route, navigation }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [products, setProducts] = useState([])
    const [isNoProducts, setIsNoProducts] = useState(false)
    const caroselImages = [
        require('../../../../assets/images/mechanic1.jpg'),
        require('../../../../assets/images/mechanic2.jpg'),
        require('../../../../assets/images/mechanic3.jpg'),
        require('../../../../assets/images/mechanic4.jpg'),
        require('../../../../assets/images/mechanic5.jpg'),
    ]


    useEffect(() => {
        const fetchRelatedProducts = async () => {
            const shopId = new FormData()
            shopId.append('USID', route?.params?.data?.USID)
            const { result } = await postData('seller/shop/products', shopId, setError, setIsLoading)
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
                            <Image key={image} source={{ uri: `https://sweyn.co.uk/storage/images/shops/${image}` }} style={styles.image} />
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
                        <TitleHeader navigation={navigation} isNoProducts={isNoProducts} />
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
            </ScrollView>
        </View>
    )
}

export default ShopProfile