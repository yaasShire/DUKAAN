import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import Order from '../../../../components/molecules/order'
import styles from './style'
import sProduct1 from '../../../../assets/sProduct1.png'
import sProduct2 from '../../../../assets/sProduct2.png'
import sProduct3 from '../../../../assets/sProduct3.png'
import sProduct4 from '../../../../assets/sProduct4.png'
import sProduct5 from '../../../../assets/sProduct5.png'
import sProduct6 from '../../../../assets/sProduct6.png'
import sProduct7 from '../../../../assets/sProduct7.png'
const NewOrderStage = ({ navigation }) => {
    const { width, height } = new Dimensions.get("window")
    const orders = [
        {
            id: 1,
            orderNo: 384848,
            customerName: "Nuur Ali Ahmed",
            ammount: 46,
            products: [
                {
                    id: 1,
                    name: "Gasoline",
                    quantity: 5,
                    price: 6,
                    ammount: 30,
                    orderId: 1,
                    customerName: "Nuur Ali Ahmed",
                    image: sProduct1
                },
                {
                    id: 2,
                    name: "Motor cleaner",
                    quantity: 4,
                    price: 4,
                    ammount: 16,
                    orderId: 1,
                    customerName: "Nuur Ali Ahmed",
                    image: sProduct2
                },
            ]
        },
        {
            id: 2,
            orderNo: 574849,
            customerName: "Sadaam Daahir Tahliil",
            ammount: 50,
            products: [
                {
                    id: 1,
                    name: "Side Mirror oil",
                    quantity: 5,
                    price: 6,
                    ammount: 30,
                    orderId: 2,
                    customerName: "Faarah Ahmed Haaji",
                    image: sProduct3
                },
                {
                    id: 2,
                    name: "Motor cleaner",
                    quantity: 5,
                    price: 4,
                    ammount: 20,
                    orderId: 2,
                    customerName: "Abdi Naasir Nuur Huseyn",
                    image: sProduct4
                },
            ]
        },
        {
            id: 3,
            orderNo: 390848,
            customerName: "Safiya mustaf Nuur",
            ammount: 76,
            products: [
                {
                    id: 1,
                    name: "Gumber",
                    quantity: 6,
                    price: 8,
                    ammount: 48,
                    orderId: 3,
                    customerName: "Muumin Abdi wali Qaasim",
                    image: sProduct5
                },
                {
                    id: 2,
                    name: "Air conditioner",
                    quantity: 4,
                    price: 7,
                    ammount: 28,
                    orderId: 3,
                    customerName: "Nuur Ali Ahmed",
                    image: sProduct6
                },
            ]
        },
        {
            id: 4,
            orderNo: 3384848,
            customerName: "Yahye Shukri Hilowle",
            ammount: 99,
            products: [
                {
                    id: 1,
                    name: "Tires",
                    quantity: 7,
                    price: 9,
                    ammount: 63,
                    orderId: 4,
                    customerName: "Muumin Abdi wali Qaasim",
                    image: sProduct5
                },
                {
                    id: 2,
                    name: "Motor washer",
                    quantity: 9,
                    price: 4,
                    ammount: 36,
                    orderId: 4,
                    customerName: "Nuur Ali Ahmed",
                    image: sProduct6
                },
            ]
        },

    ]
    return (
        <ScrollView style={[styles.orderContainer, { height, width }]} contentContainerStyle={{ rowGap: 20, marginBottom: 30, }} showsVerticalScrollIndicator={false} >

            {
                orders.map(item => (
                    <Order navigation={navigation} key={item.id} item={item} />
                ))
            }

        </ScrollView>
    )
}

export default NewOrderStage