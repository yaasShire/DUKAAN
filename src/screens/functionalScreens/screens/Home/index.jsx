import { View, Text, StatusBar, ScrollView, FlatList, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'
import Header from '../../../../components/atoms/header'
import DashboardCard from '../../../../components/atoms/dashboardCard'
import SellerCardAction from '../../../../components/atoms/SellerActionCard'
import Order from '../../../../components/molecules/order'
import NoOrderCard from '../../../../components/molecules/noOrderCard'
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import sProduct1 from '../../../../assets/sProduct1.png'
import sProduct2 from '../../../../assets/sProduct2.png'
import sProduct3 from '../../../../assets/sProduct3.png'
import sProduct4 from '../../../../assets/sProduct4.png'
import sProduct5 from '../../../../assets/sProduct5.png'
import sProduct6 from '../../../../assets/sProduct6.png'
import sProduct7 from '../../../../assets/sProduct7.png'
import HomeScreenReport from '../../../../components/molecules/homeScreenReport'
const Home = ({ navigation }) => {
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
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={Platform.OS == 'android' ? "light-content" : "dark-content"} />
            <Header navigation={navigation} />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.miniHolder}>
                {/* reports */}
                <View style={styles.reportHolder}>
                    <HomeScreenReport />
                </View>
                {/* reports ends here */}
                <View style={styles.mainCardsHolder}>
                    <ScrollView style={[styles.infoCardsHolder]} horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ columnGap: 35 }}>
                        <DashboardCard ammount={900} description="Sales Today" />
                        <DashboardCard ammount={800} description="Revenue Today" />
                        <DashboardCard ammount={700} description="Loss Today" />
                    </ScrollView>
                </View>
                <View style={styles.sellerActionCardHolder}>
                    <SellerCardAction icon="person-sharp" actionName="Profile" directory="Ionicons" navigation={navigation} />
                    <SellerCardAction icon="file-tray-sharp" actionName="Shop" navigation={navigation} />
                    <SellerCardAction icon="cube-sharp" actionName="Products" navigation={navigation} />
                    <SellerCardAction icon="analytics" actionName="Reports" navigation={navigation} />
                </View>
                <View style={styles.actionCards}>
                    <TouchableOpacity style={styles.cardAction}>
                        <View style={styles.iconActionNameWrapper}>
                            <MaterialCommunityIcons name='android-messages' size={25} color="gray" />
                            <Text style={styles.actionName}>Messages</Text>
                        </View>
                        <View style={styles.CardRightSection}>
                            <View style={styles.messagCountWrapper}>
                                <Text style={styles.messageNumber}>15</Text>
                            </View>
                            <Feather name='chevron-right' size={25} color="gray" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardAction}>
                        <View style={styles.iconActionNameWrapper}>
                            <MaterialIcons name='attach-money' size={25} color="gray" />
                            <Text style={styles.actionName}>Manage Returns</Text>
                        </View>
                        <Feather name='chevron-right' size={25} color="gray" />
                    </TouchableOpacity>

                </View>
                <View style={styles.orderCardsHolder}>
                    <Text style={styles.newOrdersText}>New Orders</Text>
                    <ScrollView contentContainerStyle={{ rowGap: 20, marginBottom: 30, }}>
                        {
                            orders.map((item) => (
                                <Order navigation={navigation} key={item.id} item={item} />
                            ))
                        }
                    </ScrollView>

                </View>
                {/* <NoOrderCard /> */}
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home