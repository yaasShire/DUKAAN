import { View, Text, StatusBar, TouchableWithoutFeedback, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntiDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Product1 from '../../../../assets/product1.jpg'
import Product2 from '../../../../assets/product2.jpg'
import Product3 from '../../../../assets/product3.jpg'
import Product4 from '../../../../assets/product4.jpg'
import Product5 from '../../../../assets/product7.jpg'
import Product6 from '../../../../assets/product9.jpg'
import ShopCard from '../../../../components/molecules/shopCard';
import shop1 from '../../../../assets/shop1.jpg'
import shop2 from '../../../../assets/shop2.jpg'
import shop3 from '../../../../assets/shop4.jpg'
import shop4 from '../../../../assets/shop5.jpg'
import shop5 from '../../../../assets/shop6.jpg'
import shop6 from '../../../../assets/shop7.jpg'
import shop7 from '../../../../assets/shop8.jpg'
const Shops = ({ navigation }) => {
    const shops = [
        {
            id: 1,
            name: "Xiin faniin",
            image: shop1,
            numberOfProducts: 2000
        },
        {
            id: 2,
            name: "Guuleed's shop",
            image: shop2,
            numberOfProducts: 4000

        },
        {
            id: 3,
            name: "John's shop",
            image: shop3,
            numberOfProducts: 5000

        },
        {
            id: 4,
            name: "Ali's shop",
            image: shop4,
            numberOfProducts: 7000

        },
        {
            id: 5,
            name: "Yusuf's shop",
            image: shop5,
            numberOfProducts: 9000

        },
        {
            id: 6,
            name: "Zaki's shop",
            image: shop6,
            numberOfProducts: 3000

        },
        {
            id: 7,
            name: "Xasan's shop",
            image: shop7,
            numberOfProducts: 4000

        },
    ]
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <View style={styles.curve} />
            <View style={styles.header}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <Ionicons name='arrow-back' size={30} color="#000" />
                </TouchableWithoutFeedback>
                <Text style={styles.headerText}>Shops</Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("addShop")}>
                    <View style={styles.buttonHolder}>
                        <View style={styles.addButtonHolder}>
                            <FontAwesome name='plus' size={20} color="#fff" />
                        </View>

                    </View>
                </TouchableWithoutFeedback>
            </View>
            <ScrollView style={styles.cards}>
                {
                    shops.map(shop => (

                        <ShopCard key={shop.id} shop={shop} navigation={navigation} />
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default Shops