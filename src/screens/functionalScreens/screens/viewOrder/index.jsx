import { View, Text, StatusBar, ScrollView, Image, TouchableOpacity, FlatList, RefreshControl, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import DecisionButton from '../../../../components/atoms/decisionButton';
import { nameShortner } from '../../../../utils/utilityFunctions';
import AppHeader from '../../../../components/molecules/header';
import ModalComponent from '../../../../components/molecules/modal';
import { fetchData } from '../../../../hooks/useFetch';
import { postData } from '../../../../hooks/usePost';
import AppLoader from '../../../../components/molecules/AppLoader';
import OrderStatus from './components/orderStatus';
import VerificationModal from './components/verificationModal';
import { globalStyles } from '../../../../globalConstants/styles';
import OTPModal from './components/otpModal';
import SendOTPButton from './components/sendOTPButton';
import OTPResponseModal from './components/otpResponse';
import Product from './components/product';
import Products from './components/product';

const ViewOrder = ({ navigation, route }) => {
    const id = route.params?.order?.UOID.split('-')
    const [orderId, setOrderId] = useState(id[id?.length - 1])
    const [refreshing, setRefreshing] = useState(false)
    const [visible, setVisible] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [show, setShow] = useState(true)
    const [status, setstatus] = useState({})
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [currentOrder, setCurrentOrder] = useState({})
    const [order, setOrder] = useState({})
    const [verificationModal, setVerificationModal] = useState(false)
    const [verificationTitle, setVerificationTitle] = useState("")
    const [verificationDescription, setVerificationDescription] = useState("")
    const [orderState, setOrderState] = useState("")
    const [showOTPModal, setShowOTPModal] = useState(false)
    const [otpResponseModal, setOtpResponseModal] = useState(false)
    const [otpResponseText, setOtpResponseText] = useState(null)
    const refreshHandler = () => {
        setRefreshing(false)
    }
    const acceptOrder = async () => {
        const formData = new FormData()
        formData.append('UOID', route?.params?.order?.UOID)
        const updatedOrderStatus = await postData('seller/orders/accept', formData, setError, setIsLoading)
        console.log(updatedOrderStatus)
        if (updatedOrderStatus?.result?.message == 'Order Accepted') {
            setShowModal(true)
            setVisible(true)
            setstatus({ state: "ACCEPTED", description: "Order is accepted" })
            setTimeout(() => {
                navigation?.replace("orderTopTabs", { screen: "pending", initial: false, })
            }, 2000)
        }
    }

    console.log(route.params)
    const rejectOrder = async () => {
        const formData = new FormData()
        formData.append('UOID', route?.params?.order?.UOID)
        // formData.append('status', -2)
        const updatedOrderStatus = await postData('seller/orders/reject', formData, setError, setIsLoading)
        setShowModal(true)
        setVisible(true)
        setstatus({ state: "REJECTED", description: "Order is rejected" })
        setTimeout(() => {
            navigation?.navigate("HomeS", { screen: "Home", initial: false, })
        }, 2000)
    }

    const fetchOrder = async () => {
        const formData = new FormData()
        formData.append('UOID', route?.params?.order?.UOID)
        const { result } = await postData('seller/orders/view', formData, setError, setIsLoading)
        if (result?.status == 'fetched') {
            if (result?.message?.length > 0) {
                setOrder(result?.message[0])
            }
        }
    }
    useEffect(() => {
        fetchOrder()
    }, [])

    const sendOTP = async () => {
        const formData = new FormData()
        formData.append('UOID', order?.UOID)
        const data = await postData('seller/orders/sendotp', formData, setError, setIsLoading)
        console.log(data)
        if (data?.result?.status == 'OTP generated and inserted successfully') {
            setOtpResponseText(data?.result?.status)
            return data?.result?.status
        }
    }
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <StatusBar barStyle={'light-content'} />
            <AppHeader backButton={true} title={"Order Details"} navigation={navigation} color={"#000"} />
            <ScrollView enableEmptySections={true} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetchOrder} />} showsVerticalScrollIndicator={false} contentContainerStyle={{ rowGap: 30 }} style={styles.acionButtonsWrapper}>
                <View style={styles.orderDetailCard}>
                    <Text style={styles.orderNumber}>Order id : {orderId}</Text>
                    <View style={styles.nameDateWrapper}>
                        <View style={styles.nameHolder}>
                            <Text style={styles.customerName} numberOfLines={1}>{order?.buyer_name}</Text>
                        </View>
                        <View style={styles.dateWrapper}>
                            <Text style={styles.dateText}>{order?.createdAt}</Text>
                        </View>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.locationSection}>
                        <View style={styles.locationTitleWrapper}>
                            <Text style={styles.locationTextTitle}>Address</Text>
                            <Ionicons name='ios-location' size={25} color="red" />
                            <Text style={styles.locationTextTitle}>:</Text>
                        </View>
                        <View style={styles.locationInfoHolder}>
                            <View style={styles.locationIconNameHolder}>
                                <Text style={styles.locationText}>{order?.additional_information},</Text>
                                <Text style={styles.locationText}>{order?.landmark}</Text>
                            </View>
                            {/* <View style={styles.countryCityHolder}>
                                <Text>Mogadishu,</Text>
                                <Text>Somalia</Text>
                            </View> */}
                        </View>
                    </View>
                </View>
                {/* product items */}
                <View style={styles.productHolder}>
                    {
                        order?.name && (
                            <Products order={order} />
                        )
                    }
                </View>
                {/* product items ends here */}
                <View style={styles.totalAmmountWapper}>
                    <View style={styles.titleMoneyWrapper}>
                        <Text style={styles.totalAmmountText}>Total Pay</Text>
                        <Text style={styles.totalMoney}>${order?.amount}</Text>
                    </View>
                    <View style={styles.completedHolder}>
                        <Text style={styles.completedText}>Payment Completed</Text>
                    </View>
                </View>
                {
                    order?.status == 1 && (
                        <View style={styles.decisionButtonHolder}>
                            <DecisionButton title="REJECT" onPress={() => {
                                setOrderState("REJECT")
                                setVerificationTitle("Reject Order")
                                setVerificationDescription("If you want to reject this order click reject order button.")
                                setVerificationModal(true)

                            }} />
                            <DecisionButton title="ACCEPT" onPress={() => {
                                setOrderState("ACCEPT")
                                setVerificationTitle("Accept Order")
                                setVerificationDescription("If you want to accept this order click accept order button.")
                                setVerificationModal(true)
                            }} />
                        </View>
                    )
                }
                {
                    order?.status == 4 && (
                        <OrderStatus status='On Process' />
                    )
                }
                {
                    order?.status == 2 && (
                        <OrderStatus status='Pending for delivery agent to accept' />
                    )
                }
                {
                    order?.status == 3 && (
                        <SendOTPButton setShowOTPModal={setShowOTPModal} />
                    )
                }
                <ModalComponent status={status} navigation={navigation} setVisible={setVisible} visible={visible} showModal={showModal} setShowModal={setShowModal} />
                <VerificationModal acceptOrder={acceptOrder} rejectOrder={rejectOrder} orderState={orderState} setShowModal={setShowModal} verificationDescription={verificationDescription} verificationTitle={verificationTitle} onPress={() => rejectOrder()} verificationModal={verificationModal} setVerificationModal={setVerificationModal} />
                <OTPModal setOtpResponseModal={setOtpResponseModal} sendOTP={sendOTP} acceptOrder={acceptOrder} showOTPModal={showOTPModal} setShowOTPModal={setShowOTPModal} rejectOrder={rejectOrder} orderState={orderState} setShowModal={setShowModal} verificationDescription={verificationDescription} verificationTitle={verificationTitle} onPress={() => rejectOrder()} verificationModal={verificationModal} setVerificationModal={setVerificationModal} />
                <OTPResponseModal orderId={order?.UOID} navigation={navigation} otpResponseText={otpResponseText} setOtpResponseModal={setOtpResponseModal} otpResponseModal={otpResponseModal} />
            </ScrollView>
            {
                isLoading && (
                    <AppLoader />
                )
            }
        </View>
    )
}

export default ViewOrder