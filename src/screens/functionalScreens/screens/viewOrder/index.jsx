import { View, Text, StatusBar, ScrollView, Image, TouchableOpacity, FlatList, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Product3 from '../../../../assets/product3.jpg'
import Product from '../../../../components/atoms/product';
import DecisionButton from '../../../../components/atoms/decisionButton';
import { nameShortner } from '../../../../utils/utilityFunctions';
import AppHeader from '../../../../components/molecules/header';
import ModalComponent from '../../../../components/molecules/modal';
const ViewOrder = ({ navigation, route }) => {
    const id = route.params?.order.UOID.split('-')
    const [orderId, setOrderId] = useState(id[id.length - 1])
    const [refreshing, setRefreshing] = useState(false)
    const [visible, setVisible] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [show, setShow] = useState(true)
    const [status, setstatus] = useState({})
    const refreshHandler = () => {
        setRefreshing(false)
    }

    const acceptOrder = () => {
        setShowModal(true)
        setVisible(true)
        setstatus({ state: "ACCEPTED", description: "Order is accepted" })
        setTimeout(() => {
            navigation?.replace("orderTopTabs", { screen: "newOrders", initial: false, })
        }, 2000)
    }

    const rejectOrder = () => {
        setShowModal(true)
        setVisible(true)
        setstatus({ state: "REJECTED", description: "Order is rejected" })
        setTimeout(() => {
            navigation?.navigate("HomeS", { screen: "Home", initial: false, })
        }, 2000)
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <AppHeader backButton={true} title={"Order Details"} navigation={navigation} color={"#000"} />
            <ScrollView enableEmptySections={true} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refreshHandler} />} showsVerticalScrollIndicator={false} contentContainerStyle={styles.acionButtonsWrapper}>
                <View style={styles.orderDetailCard}>
                    <Text style={styles.orderNumber}>Order id : {orderId}</Text>
                    <View style={styles.nameDateWrapper}>
                        <View style={styles.nameHolder}>
                            <Text style={styles.customerName} numberOfLines={1}>{route?.params?.order?.buyer_name}</Text>
                        </View>
                        <View style={styles.dateWrapper}>
                            <Text style={styles.dateText}>{route?.params?.order?.createdAt}</Text>
                        </View>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.locationSection}>
                        <View>
                            <Text style={styles.locationTextTitle}>Location :</Text>
                        </View>
                        <View style={styles.locationInfoHolder}>
                            <View style={styles.locationIconNameHolder}>
                                <Ionicons name='ios-location' size={25} color="red" />
                                <Text style={styles.locationText}>{route?.params?.order?.additional_information},</Text>
                                <Text style={styles.locationText}>{route?.params?.order?.landmark}</Text>
                            </View>
                            <View style={styles.countryCityHolder}>
                                <Text>Mogadishu,</Text>
                                <Text>Somalia</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* product items */}
                <View style={styles.productHolder}>
                    <ScrollView>
                        <Product order={route?.params?.order} />
                    </ScrollView>
                </View>
                {/* product items ends here */}
                <View style={styles.totalAmmountWapper}>
                    <View style={styles.titleMoneyWrapper}>
                        <Text style={styles.totalAmmountText}>Total Pay</Text>
                        <Text style={styles.totalMoney}>${route?.params?.order?.amount}</Text>
                    </View>
                    <View style={styles.completedHolder}>
                        <Text style={styles.completedText}>Payment Completed</Text>
                    </View>
                </View>
                {
                    route?.params?.order?.status == 1 && (
                        <View style={styles.decisionButtonHolder}>
                            <DecisionButton title="REJECT" onPress={() => rejectOrder()} setVisible={setVisible} show={show} setShowModal={setShowModal} showModal={showModal} visible={visible} status={status} />
                            <DecisionButton title="ACCEPT" onPress={() => acceptOrder()} setVisible={setVisible} show={show} setShowModal={setShowModal} showModal={showModal} visible={visible} status={status} />
                        </View>
                    )
                }

                <ModalComponent status={status} navigation={navigation} setVisible={setVisible} visible={visible} showModal={showModal} setShowModal={setShowModal} />

            </ScrollView>
        </SafeAreaView>
    )
}

export default ViewOrder