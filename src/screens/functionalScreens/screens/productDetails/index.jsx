import { View, Text, StatusBar, Platform, Image, TouchableWithoutFeedback, ScrollView, TouchableOpacity, Dimensions, SafeAreaView as RNSafeArea, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
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
const ProductDetails = ({ route, navigation }) => {
    const [selectedImage, setselectedImage] = useState({
        id: route.params.data.id,
        image: route.params.data.image
    })
    const IMAGES = [

        require('../../../../assets/images/mechanic1.jpg'),
        require('../../../../assets/images/mechanic2.jpg'),
        require('../../../../assets/images/mechanic3.jpg'),
        require('../../../../assets/images/mechanic4.jpg'),
    ]
    data = [
        {
            id: 1,
            image: require('../../../../assets/images/mechanic1.jpg'),
        },
        {
            id: 2,
            image: require('../../../../assets/images/mechanic1.jpg'),
        },
        {
            id: 3,
            image: require('../../../../assets/images/mechanic2.jpg'),
        },
        {
            id: 4,
            image: require('../../../../assets/images/mechanic3.jpg'),
        },
        {
            id: 5,
            image: require('../../../../assets/images/mechanic4.jpg'),
        },
        {
            id: 6,
            image: require('../../../../assets/images/mechanic3.jpg'),
        },
        {
            id: 7,
            image: require('../../../../assets/images/mechanic2.jpg'),
        },
    ]

    const brands = [
        {
            id: 1,
            name: 'Ferrari',
            image: require('../../../../assets/ferrari.png'),
        },
        {
            id: 2,
            name: 'Honda',
            image: require('../../../../assets/honda.png'),
        },
        {
            id: 3,
            name: 'lambo',
            image: require('../../../../assets/lambo.png'),
        },
        {
            id: 4,
            name: 'BMW',
            image: require('../../../../assets/bmw.png'),
        },
    ]
    return (
        <View style={styles.container}>
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
                            IMAGES.map(image => (
                                <Image key={image} source={image} style={{ width: "100%", resizeMode: "stretch", height: "100%" }} />
                            ))
                        }
                    </Carousel>
                </View>
                <View style={styles.bottomSection}>
                    <View>
                        <View style={{ alignItems: "flex-end", paddingVertical: "3%" }}>
                            <FAB
                                icon="pen"
                                style={styles.fab}
                                onPress={() => navigation.navigate("updateProduct", { data: route.params.data })}

                            />
                        </View>
                        <View style={styles.namePriceSection}>
                            <Text style={styles.name}>Car Engine Oil</Text>
                            <View style={styles.priceValueWrapper}>
                                <Text style={styles.priceTile}>price</Text>
                                <Text style={styles.priceValue}>$150</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.brandsWrapper}>
                        <Text style={styles.availableBrandsText}>Available Brands</Text>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.flatListStyle}
                            data={brands}
                            renderItem={({ item }) => (
                                <View style={styles.brandWholeWrapper}>
                                    <View style={styles.brandWrapper}>
                                        <Image source={item.image} style={styles.brandImage} />
                                    </View>
                                    <Text style={styles.brandName}>{item.name}</Text>
                                </View>
                            )}
                        />
                    </View>
                    <View style={styles.totalSalesWrapper}>
                        <Text style={styles.sectionLabel}>Total Sales</Text>
                        <Text style={styles.totalSalesValue}>$500</Text>
                    </View>
                    <View style={styles.infoCardsWrapper}>
                        <View style={styles.infoCard}>
                            <View style={styles.rowContent}>
                                <View style={styles.dotTextValueWrapper}>
                                    <View style={styles.dot} />
                                    <Text style={styles.textTitle}>Stock</Text>
                                </View>
                                <Text style={styles.valueText}>200</Text>
                            </View>
                            <View style={styles.rowContent}>
                                <View style={styles.dotTextValueWrapper}>
                                    <View style={styles.dot} />
                                    <Text style={styles.textTitle}>Sales</Text>
                                </View>
                                <Text style={styles.valueText}>200</Text>
                            </View>
                        </View>
                        <View style={styles.detailsSection}>
                            <Text style={styles.sectionLabel}>Product Details</Text>
                            <View style={styles.infoCard}>
                                <View style={styles.rowDetailContent}>
                                    <View style={styles.dot} />
                                    <Text style={styles.textTitle}>This product is focused on the engine of the card.</Text>
                                </View>
                                <View style={styles.rowDetailContent}>
                                    <View style={styles.dot} />
                                    <Text style={styles.textTitle}>Takes car of your car nicely on the long run.</Text>
                                </View>
                            </View>
                        </View>
                    </View>


                </View>
            </ScrollView>

        </View>

    )
}

export default ProductDetails