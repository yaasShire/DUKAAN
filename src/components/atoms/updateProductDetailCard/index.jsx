import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './style'
import Entypo from 'react-native-vector-icons/Entypo';
const UpdateProductDetailCard = ({ title, value, navigation }) => {
    return (
        <View style={styles.pricingSectionCard}>
            <View styles={styles.actionContent}>
                <Text style={styles.actionText}>{title}</Text>
                <Text style={styles.priceText}>{value}</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("updateProduct")}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("updateInventoryField")} >
                    <View style={styles.updateIconTextHolder}>
                        <View style={styles.updateIcon}>
                            <Entypo name='edit' color={"#066b6b"} />
                        </View>

                        <Text style={styles.updateText}>Update</Text>
                    </View>
                </TouchableWithoutFeedback>

            </TouchableWithoutFeedback>
        </View>
    )
}

export default UpdateProductDetailCard