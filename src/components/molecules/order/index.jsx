import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import devliveryIcon from '../../../assets/delivery2.png'
import shoppingBagImage from '../../../assets/bag.png'
import bag3 from '../../../assets/bag2.png'
import AcceptButton from '../../atoms/acceptButton'
const Order = ({ accept = true, reject = true, status, navigation, item }) => {
    const [show, setShow] = useState(false)
    return (
        <View style={styles.orderCard}>
            <View style={styles.orderInfo1Holder}>
                <View style={styles.imageOrderIdHolder}>
                    <Image source={bag3} style={{ width: 70, height: 70 }} />
                    <View style={styles.orderStageHolder}>
                        <Text style={styles.orderNumber}>Order No - {item?.orderNo}</Text>
                        {show && <Text style={styles.orderStage}>Order Processing</Text>}

                    </View>
                </View>
                <Text style={styles.ammount}>${item?.ammount}</Text>
            </View>
            <View style={styles.divider} />
            <View>
                <View style={styles.nameMinutesHolder}>
                    <View style={styles.nameHolder}>
                        <Text style={styles.textName}>{item?.customerName}</Text>
                    </View>
                    {
                        status && (<View style={styles.statusHolder}>
                            <Text style={styles.statusText}>{status}</Text>
                        </View>)
                    }

                    <View>
                        <Text style={styles.minutesPassedHolder}>3 min ago</Text>
                    </View>
                </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.actionButtonsHolder}>
                <View style={styles.viewButtonHolder}>
                    <AcceptButton title="View Order" navigation={navigation} order={item} />

                </View>
            </View>
        </View>
    )
}

export default Order