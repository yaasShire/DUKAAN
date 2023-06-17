import { View, Text, StatusBar, Platform, Image, TouchableWithoutFeedback, ScrollView, TouchableOpacity, Dimensions, SafeAreaView as RNSafeArea, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import styles from './style'
import ProductDetailsSubImage from '../../../../components/molecules/productDetailsSubImage';
import sProduct1 from '../../../../assets/sProduct1.png'
import sProduct2 from '../../../../assets/sProduct2.png'
import sProduct3 from '../../../../assets/sProduct3.png'
import sProduct4 from '../../../../assets/sProduct4.png'
import sProduct5 from '../../../../assets/sProduct5.png'
import sProduct6 from '../../../../assets/sProduct6.png'
import sProduct7 from '../../../../assets/sProduct7.png'
import AppHeader from '../../../../components/molecules/header';
import { Carousel } from "react-native-ui-lib/src/components/carousel";
import Header from '../../../../components/atoms/header';
import { FAB } from 'react-native-paper';
import { fetchData } from '../../../../hooks/useFetch';
import ProductInformationRow from './components/productInfoRaw';
import BrandCard from './components/brand';
import NoBrand from './components/noBrand';
const ProductDetails = ({ route, navigation }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [productImages, setProductImages] = useState([])
    const [productDetail, setProductDetail] = useState(null)
    const [brandsList, setBrandsList] = useState([])
    const [noBrand, setNoBrand] = useState(false)
    const [selectedImage, setselectedImage] = useState({
        id: route.params.data.id,
        image: route.params.data.image
    })

    useEffect(() => {
        const fetchProductData = async () => {
            const data = await fetchData(`seller/products/view/${route?.params?.data.UPID}`, setError, setIsLoading)
            setProductDetail(data.data.data[0])
            setProductImages(data.data.images)

        }
        const fetchBrand = async () => {
            const { data } = await fetchData(`seller/brand/view/${route?.params?.data?.brand}`, setError, setIsLoading)
            if (data?.data?.length == 0) {
                setNoBrand(true)
            }
            setBrandsList(data.data)
            console.log(data.data)
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
                    <View>
                        <View style={styles.namePriceSection}>
                            <Text style={styles.name}>{productDetail?.name}</Text>
                            <View style={styles.priceValueWrapper}>
                                <Text style={styles.priceTile}>price</Text>
                                <Text style={styles.priceValue}>${productDetail?.price}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.brandsWrapper}>
                        <Text style={styles.availableBrandsText}>Available Brands</Text>
                        {
                            noBrand && (
                                <NoBrand />
                            )
                        }
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.flatListStyle}
                            data={brandsList}
                            renderItem={({ item }) => (
                                <BrandCard item={item} />
                            )}
                        />
                    </View>
                    <View style={styles.totalSalesWrapper}>
                        <Text style={styles.sectionLabel}>Total Sales</Text>
                        <Text style={styles.totalSalesValue}>$0</Text>
                    </View>
                    <View style={styles.infoCardsWrapper}>
                        <View style={styles.infoCard}>
                            {/* <View style={styles.rowContent}>
                                <View style={styles.dotTextValueWrapper}>
                                    <View style={styles.dot} />
                                    <Text style={styles.textTitle}>Stock</Text>
                                </View>
                                <Text style={styles.valueText}>200</Text>
                            </View> */}
                            <ProductInformationRow text={"Stock"} value={productDetail?.quantity_avaliable} />
                            <ProductInformationRow text={"Sales"} value={0} />
                        </View>
                        <View style={styles.detailsSection}>
                            <Text style={styles.sectionLabel}>Product Details</Text>
                            <View style={styles.infoCard}>
                                <ProductInformationRow text={productDetail?.description} />
                            </View>
                        </View>
                    </View>


                </View>
            </ScrollView>

        </View>

    )
}

export default ProductDetails