import { View, Text, StatusBar, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'
import Header from '../../../../components/atoms/header'
import Filter from '../../../../components/molecules/filter'
import ProductCard from '../../../../components/molecules/productCard'
import sProduct1 from '../../../../assets/sProduct1.png'
import sProduct2 from '../../../../assets/sProduct2.png'
import sProduct3 from '../../../../assets/sProduct3.png'
import sProduct4 from '../../../../assets/sProduct4.png'
import sProduct5 from '../../../../assets/sProduct5.png'
import sProduct6 from '../../../../assets/sProduct6.png'
import sProduct7 from '../../../../assets/sProduct7.png'
import AddProductButton from '../../../../components/atoms/addProductButton'
const ProductsList = ({ navigation }) => {
    const data = [
        {
            id: "#FJLKF99",
            productName: "Gasoline car oil ",
            Qty: 200,
            price: 500,
            image: sProduct1
        },
        {
            id: "#JFKLKFD99",
            productName: "Car Oil Super natural",
            Qty: 300,
            price: 400,
            image: sProduct2
        },
        {
            id: "#JDJD778",
            productName: "Side View Mirror",
            Qty: 900,
            price: 700,
            image: sProduct3
        },
        {
            id: "#3747JD3FHD",
            productName: "Gamber",
            Qty: 800,
            price: 900,
            image: sProduct4
        },
        {
            id: "#374FHDJteSDJ",
            productName: "Air conditioner",
            Qty: 350,
            price: 1000,
            image: sProduct5
        },
        {
            id: "#374FHD565JSDJ",
            productName: "Motor Cleaner",
            Qty: 350,
            price: 1000,
            image: sProduct6
        },
        {
            id: "#37344FHDJSDJ",
            productName: "Oil For Motor",
            Qty: 350,
            price: 1000,
            image: sProduct7
        },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <Header showAddButton={true} navigation={navigation} />
            {/*filter  */}
            <View>
                <Filter navigation={navigation} />
            </View>
            <ScrollView>
                <View style={styles.productCardsHolder}>

                    {
                        data.map(item => (
                            <ProductCard key={item.id} item={item} navigation={navigation} />
                        ))
                    }
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default ProductsList
