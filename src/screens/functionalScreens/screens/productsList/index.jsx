import { View, Text, StatusBar, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'
import Header from '../../../../components/atoms/header'
import Filter from '../../../../components/molecules/filter'
import ProductCard from '../../../../components/molecules/productCard'
import product1 from '../../../../assets/product1.jpg'
import product2 from '../../../../assets/product2.jpg'
import product3 from '../../../../assets/product3.jpg'
import product4 from '../../../../assets/product4.jpg'
import product5 from '../../../../assets/product7.jpg'
import AddProductButton from '../../../../components/atoms/addProductButton'
const ProductsList = ({ navigation }) => {
    const data = [
        {
            id: "#FJLKF99",
            productName: "Gasoline car oil ",
            Qty: 200,
            price: 500,
            image: product1
        },
        {
            id: "#JFKLKFD99",
            productName: "Car Oil Super natural",
            Qty: 300,
            price: 400,
            image: product2
        },
        {
            id: "#JDJD778",
            productName: "Side View Mirror",
            Qty: 900,
            price: 700,
            image: product3
        },
        {
            id: "#3747JDFHD",
            productName: "Gamber",
            Qty: 800,
            price: 900,
            image: product4
        },
        {
            id: "#374FHDJSDJ",
            productName: "Air conditioner",
            Qty: 350,
            price: 1000,
            image: product5
        },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <Header />
            {/*filter  */}
            <View>
                <Filter navigation={navigation} />
            </View>
            {/* filter ends here */}

            {/* <FlatList
                horizontal={true}
                style={styles.productCardsHolder}
                data={data}

                renderItem={({ item }) => (
                    <ProductCard  item={item} />
                )}
            /> */}

            <ScrollView>
                <View style={styles.productCardsHolder}>

                    {
                        data.map(item => (
                            <ProductCard item={item} />
                        ))
                    }
                </View>

            </ScrollView>
            <AddProductButton navigation={navigation} />
        </SafeAreaView>
    )
}

export default ProductsList
