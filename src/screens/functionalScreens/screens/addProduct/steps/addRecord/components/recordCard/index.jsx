import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../../../../../../globalConstants/styles'
import { EvilIcons, Feather } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { setRemoveRecord } from '../../../../../../../../redux/products'

const RecordCard = ({ data, index = -1 }) => {
    const records = useSelector(state => state.productRegistration.productRecord)
    const dispatch = useDispatch()
    const removeRecord = () => {
        const newRecords = records.filter((item, i) => i !== index)
        console.log(newRecords)
        dispatch(setRemoveRecord(newRecords))
    }
    return (
        <View style={styles.card}>
            <Pressable onPress={removeRecord} style={{ backgroundColor: "red", width: 20, height: 20, justifyContent: "center", alignItems: "center", borderRadius: 5 }}>
                <EvilIcons name='close' color={globalStyles.colors.miniPrimary} size={18} />
            </Pressable>
            <View style={styles.column}>
                <Text style={styles.title}>Size</Text>
                <Text style={styles.value}>{data?.size}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.title}>Quantity</Text>
                <Text style={styles.value}>{data?.quantity}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.title}>Price</Text>
                <Text style={styles.value}>{data?.price}</Text>
            </View>
        </View>
    )
}

export default RecordCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: globalStyles.colors.primaryGray,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: 65,
        borderRadius: 10
    },
    column: {
        rowGap: 6
    },
    title: {
        fontWeight: "500",
        fontSize: 15,
        color: globalStyles.colors.tertiary
    },
    value: {
        fontWeight: "400",
        fontSize: 15,
        color: globalStyles.colors.tertiary
    }
})