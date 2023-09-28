import { View, Text, ScrollView, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import { List, TextInput } from 'react-native-paper'
import { HeightDimension, WidthDimension } from '../../../../../../globalConstants/styles'
import { globalStyles } from '../../../../../../globalConstants/styles'
import { Picker } from "react-native-ui-lib/src/components/picker";
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'
import UpdatePickerVerifyModal from '../updatePickerVerifyModal'
import { postData } from '../../../../../../hooks/usePost'
const UpdatePickerColor = ({ listData = [], label = "", color = "blue", value, fieldName = "", category = {}, productId = "", setIsLoading = () => { }, setError = () => { }, fetchTargetProduct = () => { } }) => {
    const [selectedValue, setSelectedValue] = useState("Pick color")
    const [showPickerVerifyModal, setShowPickerVerifyModal] = useState(false)
    const updateCategory = async () => {
        setIsLoading(true)
        const productData = new FormData()
        productData.append('UPID', productId)
        productData.append(fieldName, selectedValue?.color)
        const { result } = await postData('seller/products/update', productData, setError, setIsLoading)
        setShowPickerVerifyModal(false)
        if (result?.status == 'changed') {
            fetchTargetProduct()
        }
    }
    const handlePicker = (item) => {
        setSelectedValue(item)
        setShowPickerVerifyModal(true)
    }
    return (
        <View style={styles.card}>
            <SafeAreaView />
            <View style={styles.verticalBar(color)} />
            <View style={styles.pickerButtonWrapper}>
                <Picker
                    containerStyle={styles.pickerStyle}
                    placeholder={value}
                    placeholderTextColor="#000"
                    shearchPlaceHolder={"Search"}
                    label={label}
                    labelStyle={styles.labelStyle}
                    enableModalBlur={false}
                    topBarProps={{ title: label }}
                >
                    {
                        listData.map(item => (
                            <Picker.Item
                                key={item?.id}
                                label={item.color}
                                onPress={() => {
                                    handlePicker(item)
                                }}
                            />
                        ))
                    }
                </Picker>
                <Feather name='chevron-down' size={25} color={"gray"} style={{ position: "absolute", right: 14, zIndex: -10 }} />
            </View>
            <UpdatePickerVerifyModal label={label} onPress={updateCategory} setShowPickerVerifyModal={setShowPickerVerifyModal} showPickerVerifyModal={showPickerVerifyModal} />
        </View>
    )
}

export default UpdatePickerColor