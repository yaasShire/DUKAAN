import { View, Text, StatusBar, TextInput, Platform, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import AppHeader from '../../../../components/molecules/header';
import styles from './style'
import { postData } from '../../../../hooks/usePost';
import { Formik } from 'formik';
import { productDetailUpdate } from '../../../../utils/validationSchema/productDetailUpdate';
import { formdataProducer, updateFieldDataGenerator } from '../../../../utils/utilityFunctions';
import AppLoader from '../../../../components/molecules/AppLoader';
const UpdateInventoryField = ({ navigation, route }) => {
    const [productInformation, setProductInformation] = useState(route.params?.data)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [inputValue, setInputValue] = useState(route.params?.data?.value)
    const updateProductInformation = async () => {
        setIsLoading(true)
        const inputFormat = {
            [productInformation?.name]: inputValue,
            UPID: productInformation?.productDetail?.UPID
        }
        const data = formdataProducer(inputFormat)
        const result = await postData('seller/products/update', data, setError, setIsLoading)
        if (result?.result?.status == 'changed') {
            navigation.goBack()
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={Platform.OS == 'ios' ? 'dark-content' : 'light-content'} />
            <AppHeader title={"Update Product Details"} navigation={navigation} color={"#000"} backButton={true} />
            <View style={styles.contentHolder}>
                {
                    error && (
                        <Text style={styles.errorText}>Problem</Text>
                    )
                }
                <View style={styles.inputLableHolder}>
                    <Text style={styles.label}>{productInformation?.label}</Text>
                    <TextInput style={styles.input} onChangeText={(text) => setInputValue(text)} value={`${inputValue}`} />
                </View>
                <View style={styles.buttonHolder}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        updateProductInformation()
                    }} >
                        <Text style={styles.buttonText}>UPDATE</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {
                isLoading && (
                    <AppLoader />
                )
            }
        </SafeAreaView>
    )
}
export default UpdateInventoryField

// onPress={() => navigation.goBack()}