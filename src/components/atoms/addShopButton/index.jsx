import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { useSelector } from 'react-redux';
import { formDataGenerator, shopDataGenerator } from '../../../utils/utilityFunctions';
import { postData } from '../../../hooks/usePost';
import { API } from '../../../hooks';
const AddShopButton = ({ label, handleSubmit, setcurrentPosition, navigation, checkMainImage }) => {
    const { locationData, personalData, shopData, shopImages } = useSelector(state => state.shopRegistration);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState([])

    const formatedShopData = shopDataGenerator(shopData, locationData, shopImages)

    const shopInfo = formDataGenerator(formatedShopData, shopImages, shopData)
    const postShopData = async () => {
        const mainImageChecker = checkMainImage()
        if (mainImageChecker) {
            const { result } = await postData('seller/shop/create', shopInfo, setError, setIsLoading)
            console.log(result)
            if (result.status) {
                navigation.replace('uploadState', { uploadStatus: result })
            }
        } else {
            Alert.alert('Main image is required!')
        }

    }

    return (
        <TouchableOpacity style={styles.buttonHolder} onPress={() => {
            handleSubmit && handleSubmit()
            label == 'Finish' && postShopData()
        }}>
            <View style={styles.buttonView}>
                <Text style={styles.text}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default AddShopButton