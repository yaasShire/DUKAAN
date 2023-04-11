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
import product1 from '../../../../assets/sProduct1.png'
import product2 from '../../../../assets/sProduct2.png'
import product3 from '../../../../assets/sProduct3.png'
import product4 from '../../../../assets/sProduct4.png'
import product5 from '../../../../assets/sProduct5.png'
import product6 from '../../../../assets/sProduct6.png'
import product7 from '../../../../assets/sProduct7.png'
import AppHeader from '../../../../components/molecules/appHeader';
const Shops = ({ navigation }) => {
    const shops = [
        {
            id: 1,
            name: "Xiin faniin",
            image: shop1,
            numberOfProducts: 2000,
            purchased: 400,
            wished: 200,
            liked: 100,
            images: [
                {
                    id: 1,
                    image: product1,
                    name: "Gasoline",
                    stock: 500
                },
                {
                    id: 2,
                    image: product2,
                    name: "Oil",
                    stock: 600
                },
                {
                    id: 3,
                    image: product3,
                    name: "Motor",
                    stock: 700
                },
                {
                    id: 4,
                    image: product4,
                    name: "Jumper",
                    stock: 900
                },
            ]
        },
        {
            id: 2,
            name: "Guuleed's shop",
            image: shop2,
            numberOfProducts: 4000,
            purchased: 600,
            wished: 700,
            liked: 150,
            images: [
                {
                    id: 1,
                    image: product3,
                    name: "Gasoline",
                    stock: 700
                },
                {
                    id: 2,
                    image: product5,
                    name: "Mirror",
                    stock: 700
                },
                {
                    id: 3,
                    image: product6,
                    name: "Side Mirror",
                    stock: 500
                },
                {
                    id: 4,
                    image: product7,
                    name: "Air conditioner",
                    stock: 890
                },
            ]

        },
        {
            id: 3,
            name: "John's shop",
            image: shop3,
            numberOfProducts: 5000,
            purchased: 250,
            wished: 190,
            liked: 305,
            images: [
                {
                    id: 1,
                    image: product2,
                    name: "Mirror Back",
                    stock: 300
                },
                {
                    id: 2,
                    image: product4,
                    name: "Engine oil",
                    stock: 200
                },
                {
                    id: 3,
                    image: product6,
                    name: "Motor",
                    stock: 500
                },
                {
                    id: 4,
                    image: product5,
                    name: "Gasoline",
                    stock: 900
                },
            ]

        },
        {
            id: 4,
            name: "Ali's shop",
            image: shop4,
            numberOfProducts: 7000,
            purchased: 680,
            wished: 300,
            liked: 560,
            images: [
                {
                    id: 1,
                    image: product3,
                    name: "Gasoline",
                    stock: 500
                },
                {
                    id: 2,
                    image: product2,
                    name: "Engine",
                    stock: 500
                },
                {
                    id: 3,
                    image: product1,
                    name: "Oil",
                    stock: 500
                },
                {
                    id: 4,
                    image: product6,
                    name: "Motor",
                    stock: 500
                },
            ]
        },
        {
            id: 5,
            name: "Yusuf's shop",
            image: shop5,
            numberOfProducts: 9000,
            purchased: 980,
            wished: 380,
            liked: 484,
            images: [
                {
                    id: 1,
                    image: product1,
                    name: "Oil",
                    stock: 500
                },
                {
                    id: 2,
                    image: product2,
                    name: "Gasoline",
                    stock: 500
                },
                {
                    id: 3,
                    image: product3,
                    name: "Tire Wrapper",
                    stock: 500
                },
                {
                    id: 4,
                    image: product4,
                    name: "Tire",
                    stock: 500
                },
            ]

        },
        {
            id: 6,
            name: "Zaki's shop",
            image: shop6,
            numberOfProducts: 3000,
            purchased: 120,
            wished: 340,
            liked: 580,
            images: [
                {
                    id: 1,
                    image: product3,
                    name: "Oil",
                    stock: 500
                },
                {
                    id: 2,
                    image: product4,
                    name: "Repair Tool",
                    stock: 500
                },
                {
                    id: 3,
                    image: product1,
                    name: "Gasoline",
                    stock: 500
                },
                {
                    id: 4,
                    image: product6,
                    name: "Bumber",
                    stock: 500
                },
            ]

        },
        {
            id: 7,
            name: "Xasan's shop",
            image: shop7,
            numberOfProducts: 4000,
            purchased: 790,
            wished: 530,
            liked: 620,
            images: [
                {
                    id: 1,
                    image: product5,
                    name: "Motor",
                    stock: 500
                },
                {
                    id: 2,
                    image: product6,
                    name: "Gasoline",
                    stock: 500
                },
                {
                    id: 3,
                    image: product4,
                    name: "Oil",
                    stock: 500
                },
                {
                    id: 4,
                    image: product2,
                    name: "Mirror",
                    stock: 500
                },
            ]

        },
    ]
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <AppHeader title="Shops" navigation={navigation} color={"#000"} screen={"Shops"} />
            <ScrollView style={styles.cards} showsVerticalScrollIndicator={false}>
                {
                    shops.map(shop => (

                        <ShopCard key={shop.id} shop={shop} navigation={navigation} />
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Shops