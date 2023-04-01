import { View, Text, StatusBar, Platform, Image, TouchableWithoutFeedback, ScrollView, TouchableOpacity } from 'react-native'
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
const ProductDetails = ({ route, navigation }) => {
    const [selectedImage, setselectedImage] = useState({
        id: route.params.data.id,
        image: route.params.data.image
    })
    data = [
        {
            id: 1,
            image: sProduct1,
        },
        {
            id: 2,
            image: sProduct2,
        },
        {
            id: 3,
            image: sProduct3,
        },
        {
            id: 4,
            image: sProduct4,
        },
        {
            id: 5,
            image: sProduct5,
        },
        {
            id: 6,
            image: sProduct6,
        },
        {
            id: 7,
            image: sProduct7,
        },
    ]
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={Platform.OS == 'android' ? 'light-content' : "dark-content"} />
            <View style={styles.header}>
                <TouchableWithoutFeedback style={styles.backIconHolder} onPress={() => navigation.goBack()}>
                    <Feather name='chevron-left' size={30} color={"gray"} />
                </TouchableWithoutFeedback>
                <Text style={styles.headerText}>Product Details</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.contentHolder}>
                <Text numberOfLines={2} style={styles.productName} >{route.params.data.productName}</Text>
                <View style={styles.stockHolder}>
                    <Text numberOfLines={2} style={styles.stockQuantity}>#{route.params.data.inStock}</Text>
                    <Text style={styles.stockText}>in stock</Text>

                </View>
                <View style={styles.salesHolder}>
                    <Text style={styles.salesQuantity}>#{route.params.data.numberOfSales}</Text>
                    <Text style={styles.salesText}>in Sales</Text>
                </View>
            </View>
            <View style={styles.mainImageHolder}>
                <View style={styles.imageHolder}>
                    <Image source={selectedImage.image} style={styles.image} />
                </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.productScrollHolder}>
                <ScrollView style={styles.mainSubImagesHolder} horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ columnGap: 10 }} >
                    {
                        data.map(item => (
                            <ProductDetailsSubImage key={item.id} data={item} selectedImage={selectedImage} setselectedImage={setselectedImage} />
                        ))

                    }
                </ScrollView>

            </View>
            <View style={styles.divider} />
            <View style={styles.moneyTitleHolder}>
                <Text style={styles.moneyTitle}>Money Section</Text>
            </View>
            <View style={styles.moneySection}>
                <View style={styles.moneyTitleWrapper}>
                    <Text style={styles.moneyQuantity}>$200</Text>
                    <Text style={styles.moneyText}>Price</Text>
                </View>
                <View>
                    <Text style={styles.operator}>+</Text>
                </View>
                <View style={styles.moneyTitleWrapper}>
                    <Text style={styles.moneyQuantity}>$4</Text>
                    <Text style={styles.moneyText}>Shipping</Text>
                </View>
                <View>
                    <Text style={styles.operator}>-</Text>
                </View>
                <View style={styles.moneyTitleWrapper}>
                    <Text style={styles.moneyQuantity}>$0.566</Text>
                    <Text style={styles.moneyText}>Transaction fee</Text>
                </View>
                <View>
                    <Text style={styles.operator}>=</Text>
                </View>
                <View style={styles.moneyTitleWrapper}>
                    <Text style={styles.moneyQuantity}>$23.5</Text>
                    <Text style={styles.moneyText}>Gross proceeds</Text>
                </View>
            </View>
            <View style={styles.featuresDetailsHolder}>
                <View >
                    <Text style={styles.featureDetailsText}>Features & Details</Text>
                </View>
                <View style={styles.features}>
                    <View style={styles.singleFeatureHolder}>
                        <View style={styles.dotCircle} />
                        <Text style={styles.featureText}>Rich of gasoline</Text>
                    </View>
                    <View style={styles.singleFeatureHolder}>
                        <View style={styles.dotCircle} />
                        <Text style={styles.featureText}>Fast speed mottor</Text>
                    </View>
                    <View style={styles.singleFeatureHolder}>
                        <View style={styles.dotCircle} />
                        <Text style={styles.featureText}>Car lifespan increases</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonsHolder}>
                <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.updateText}>Canel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.updateProductButton} >
                    <Text style={styles.updateText}>Update</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ProductDetails