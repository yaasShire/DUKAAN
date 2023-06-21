import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import devliveryIcon from '../../../assets/delivery2.png'
import shoppingBagImage from '../../../assets/bag.png'
import bag3 from '../../../assets/bag2.png'
import OrderActionButton from '../../atoms/orderActionButton'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { globalStyles } from '../../../globalConstants/styles'
const Order = ({ accept = true, reject = true, status = false, navigation, order, assign = false, refRBSheet }) => {
    const [show, setShow] = useState(false)
    const id = order?.UOID.split('-')
    const [orderNumber, setOrderNumber] = useState(id[id?.length - 1])
    return (
        <View style={styles.orderCard}>
            <View style={styles.orderInfo1Holder}>
                <View style={styles.imageOrderIdHolder}>
                    <Image source={bag3} style={{ width: 70, height: 70 }} />
                    <View style={styles.orderStageHolder}>
                        <Text style={styles.orderNumber}>Order id - {orderNumber}</Text>
                        {show && <Text style={styles.orderStage}>Order Processing</Text>}
                    </View>
                </View>
                <Text style={styles.ammount}>${order?.amount}</Text>
            </View>
            <View style={styles.divider} />
            <View>
                <View style={styles.nameMinutesHolder}>
                    <View style={styles.nameHolder}>
                        <Text style={styles.textName} numberOfLines={2}>{order?.buyer_name}</Text>
                    </View>
                    {
                        status && (<View style={styles.statusHolder}>
                            <Text style={styles.statusText}>{status}</Text>
                        </View>)
                    }

                    <View style={styles.timePassedWrapper}>
                        <Text style={styles.timePassedText}>3 min ago</Text>
                    </View>
                </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.actionButtonsHolder}>
                {
                    assign && (
                        <OrderActionButton refRBSheet={refRBSheet} title="Assing" assign={assign} navigation={navigation} order={order} />
                    )
                }
                {
                    status == "completed" && (
                        <View style={styles.orderDeliveredCard}>
                            <Text style={styles.deliveredText}>Order Delivered</Text>
                            <AntDesign name='check' size={20} color={globalStyles.colors.miniPrimary} />
                        </View>
                    )
                }
                <OrderActionButton title="Order Details" navigation={navigation} order={order} />
            </View>
        </View>
    )
}

export default Order