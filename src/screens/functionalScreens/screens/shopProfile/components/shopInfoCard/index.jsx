import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { Feather, FontAwesome5, Fontisto } from '@expo/vector-icons'
import { globalStyles } from '../../../../../../globalConstants/styles'
const ShopInfoCard = ({ shop }) => {
    return (
        <View style={styles.container}>
            <View style={styles.cardInfo}>
                <View style={[styles.cardInfoRow, styles.contentBetween]}>
                    <View style={styles.iconTextWrapper}>
                        <Fontisto name='shopping-store' size={30} color={globalStyles.colors.logoColor} />
                        <Text style={styles.shopName}>{shop?.name}</Text>
                    </View>
                    {/* <View style={styles.salesWrapper}>
                        <Text style={styles.salesText}>Sales</Text>
                        <Text style={styles.salesValue}>$200</Text>
                    </View> */}
                </View>
                <View style={styles.cardInfoRow}>
                    <Feather name='phone' size={30} color={globalStyles.colors.logoColor} />
                    <Text style={styles.shopTelephone}>{shop?.phone_number}</Text>
                </View>
                {/* <View style={styles.cardInfoRow}>
                    <FontAwesome5 name='box' size={30} color={globalStyles.colors.logoColor} />
                    <Text style={styles.shopTelephone}>400 products</Text>
                </View> */}
            </View>

        </View>
    )
}

export default ShopInfoCard