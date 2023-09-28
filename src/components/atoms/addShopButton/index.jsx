import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { useDispatch, useSelector } from 'react-redux';
import { formDataGenerator, formatedShopFormData, shopDataGenerator } from '../../../utils/utilityFunctions';
import { postData } from '../../../hooks/usePost';
import { API } from '../../../hooks';
import AppLoader from '../../molecules/AppLoader';
import { setImage1 } from '../../../redux/shop';
const AddShopButton = ({ label, handleSubmit, setcurrentPosition, navigation, checkMainImage, setIsLoading = () => { }, clearShopDetails = () => { } }) => {
    const [error, setError] = useState(null)
    const { locationData, personalData, shopData, shopImages, coordinates } = useSelector(state => state.shopRegistration);
    const shopInformation = shopDataGenerator(shopData, locationData, shopImages, coordinates)
    const shopInfo = formatedShopFormData(shopInformation, shopImages, shopData)
    const dispatch = useDispatch()
    const postShopData = async () => {
        const mainImageChecker = checkMainImage()
        if (mainImageChecker) {
            setIsLoading(true)
            const result = await postData('seller/shop/create', shopInfo, setError, setIsLoading)
            console.log(result)
            if (result?.result?.status == 'Shop Added Successfully') {
                clearShopDetails()
                dispatch(setImage1(""))
                navigation.replace('uploadState', initial = false, { uploadStatus: result })
            }
        } else {
            Alert.alert('Main image is required!')
        }
    }
    return (
        <>
            <TouchableOpacity style={styles.buttonHolder} onPress={() => {
                handleSubmit && handleSubmit()
                label == 'Finish' && postShopData()
            }}>
                <View style={styles.buttonView}>
                    <Text style={styles.text}>{label}</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}
export default AddShopButton