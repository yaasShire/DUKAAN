import { View, Text, StatusBar, Platform, Image, TouchableWithoutFeedback, ScrollView } from 'react-native'
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
            <View style={styles.mainImageHolder}>
                <View style={styles.imageHolder}>
                    <Image source={selectedImage.image} style={styles.image} />
                </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.productScrollHolder}>
                <ScrollView style={styles.mainSubImagesHolder} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        data.map(item => (
                            <ProductDetailsSubImage key={item.id} data={item} selectedImage={selectedImage} setselectedImage={setselectedImage} />
                        ))

                    }
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}

export default ProductDetails