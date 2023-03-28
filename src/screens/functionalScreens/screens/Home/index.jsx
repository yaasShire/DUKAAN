import { View, Text, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'
import Header from '../../../../components/atoms/header'
import DashboardCard from '../../../../components/atoms/dashboardCard'
import SellerCardAction from '../../../../components/atoms/SellerActionCard'
import Order from '../../../../components/molecules/order'
import NoOrderCard from '../../../../components/molecules/noOrderCard'
const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Header />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.miniHolder}>
                <View style={styles.mainCardsHolder}>
                    <ScrollView style={[styles.infoCardsHolder]} horizontal={true} showsHorizontalScrollIndicator={false}>
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
                {/* <View style={styles.orderCardsHolder}>
                    <Text style={styles.newOrdersText}>New Orders</Text>
                    <Order navigation={navigation} />
                    <Order navigation={navigation} />
                    <Order navigation={navigation} />
                    <Order navigation={navigation} />
                    <Order navigation={navigation} />
                    <Order navigation={navigation} />
                    <Order navigation={navigation} />
                    <Order navigation={navigation} />
                </View> */}
                <NoOrderCard />
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home