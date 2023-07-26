import { View, StatusBar, Platform, Image, TouchableWithoutFeedback, ScrollView, TouchableOpacity, Dimensions, SafeAreaView as RNSafeArea, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useState } from 'react'
import { Text } from 'react-native-paper';
import styles from './style'
import { Carousel } from "react-native-ui-lib/src/components/carousel";
import { fetchData } from '../../../../hooks/useFetch';
import ProductInformationRow from './components/productInfoRaw';
import BrandCard from './components/brand';
import NoBrand from './components/noBrand';
import ProductDetailsCard from './components/productDetailsCard';
import OtherProducts from './components/otherProducts';
import Label from './components/label';
const ProductDetails = ({ route, navigation }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [productImages, setProductImages] = useState([])
    const [productDetail, setProductDetail] = useState(null)
    const [brandsList, setBrandsList] = useState([])
    const [noBrand, setNoBrand] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProductData = async () => {
            const data = await fetchData(`seller/products/view/${route?.params?.data.UPID}`, setError, setIsLoading)
            setProductDetail(data.data.data[0])
            setProductImages(data.data.images)

        }
        const fetchProducts = async () => {
            const { data } = await fetchData(`seller/products/view`, setError, setIsLoading)
            if (data?.data?.length > 0) {

                setProducts(data?.data)
            }
        }
        fetchProducts()
        const fetchBrand = async () => {
            const { data } = await fetchData(`seller/brand/view/${route?.params?.data?.brand}`, setError, setIsLoading)
            if (data?.data?.length == 0) {
                setNoBrand(true)
            }
            setBrandsList(data.data)
        }

        fetchProductData()
        fetchBrand()
    }, [])

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <StatusBar barStyle='light-content' />
            <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
                <View style={styles.upperContent}>
                    <Carousel
                        autoplay={true}
                        loop={true}
                        showCounter={Platform.OS == 'android' ? true : false}
                        pageControlPosition='over'
                        style={{}}>
                        {
                            productImages.map(image => (
                                <Image key={image} source={{ uri: "https://sweyn.co.uk/storage/images/" + image }} style={{ width: "100%", resizeMode: "cover", height: "100%" }} />
                            ))
                        }
                    </Carousel>
                </View>
                <View style={styles.bottomSection}>
                    <View style={styles.barWrapper}>
                        <View style={styles.bar} />
                    </View>
                    <View style={styles.namePriceSection}>
                        <Text style={styles.name}>{productDetail?.name}</Text>
                        <View style={styles.priceValueWrapper}>
                            <Text style={styles.priceTile}>price</Text>
                            <Text style={styles.priceValue}>${productDetail?.price}</Text>
                        </View>
                    </View>
                    <View style={styles.brandsWrapper}>
                        <Text style={styles.availableBrandsText}>Available Brands</Text>
                        {
                            !productDetail?.brand?.name && (
                                <NoBrand />
                            )
                        }

                        <BrandCard item={productDetail?.brand} />

                    </View>
                    {/* <View style={styles.totalSalesWrapper}>
                        <Text style={styles.sectionLabel}>Total Sales</Text>
                        <Text style={styles.totalSalesValue}>$0</Text>
                    </View> */}
                    <View style={styles.infoCardsWrapper}>
                        <Label label={'Sales'} />
                        <ProductDetailsCard productDetail={productDetail} />
                        <View style={styles.detailsSection}>
                            <Label label={'Product Details'} />
                            <View style={styles.infoCard}>
                                <ProductInformationRow text={productDetail?.description} />
                            </View>
                        </View>
                    </View>
                    <OtherProducts products={products} />

                </View>
            </ScrollView>

        </View>

    )
}

export default ProductDetails