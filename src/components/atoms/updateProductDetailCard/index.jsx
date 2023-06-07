import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './style'
import Entypo from 'react-native-vector-icons/Entypo';
import { FAB } from 'react-native-paper';
const UpdateProductDetailCard = ({ title, value, navigation, name, productDetail }) => {
    return (
        <View style={styles.pricingSectionCard}>
            <View styles={styles.actionContent}>
                <Text style={styles.actionText}>{title}</Text>
                <Text style={styles.priceText}>{name == 'price' ? '$' : ""}{value}</Text>
            </View>
            <View>
                <FAB
                    icon="pen"
                    size='small'
                    style={styles.fab}
                    onPress={() => navigation.navigate("updateInventoryField", { data: { label: title, name, productDetail, value } })}
                />

            </View>
        </View>
    )
}

export default UpdateProductDetailCard