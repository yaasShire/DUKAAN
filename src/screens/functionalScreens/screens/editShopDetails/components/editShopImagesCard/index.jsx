import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { FAB } from 'react-native-paper'
const EditShopImagesCard = ({ color, title, navigation, shopId = "" }) => {
    return (
        <View style={styles.card}>
            <View style={styles.verticalBar(color)} />
            <View style={styles.contentWrapper}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <FAB color='#fff' style={styles.fab} icon={'pen'} onPress={() => {
                    navigation.navigate("editShopImages", { shopId })
                }} />
            </View>
        </View>
    )
}

export default EditShopImagesCard