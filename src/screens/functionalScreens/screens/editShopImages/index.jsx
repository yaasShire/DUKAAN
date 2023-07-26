import { View, Text, StatusBar } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import styles from './style'
import AppHeader from '../../../../components/molecules/header'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImageTaker from '../../../../components/atoms/productImageTaker'
import ImagePicker from './components/imagePicker'
import ShopImagePicker from './components/imagePicker'
import { RefreshControl, ScrollView } from 'react-native-gesture-handler'
import { fetchData } from '../../../../hooks/useFetch'
import { getShopImages, shopImagesList } from '../../../../utils/utilityFunctions'
import ResponseModal from './components/responseModal'
import AppLoader from '../../../../components/molecules/AppLoader'
import { useFocusEffect } from '@react-navigation/native'
const EditShopImages = ({ navigation, route }) => {
    const [shopData, setShopData] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [images, setImages] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [responseMessage, setResponseMessage] = useState('')
    const fetchShopData = async () => {
        const { data } = await fetchData(`seller/shop/view/${route?.params?.shopId}`, setError, setIsLoading)
        if (data?.data) {
            const shopImages = shopImagesList(data?.data)
            setImages(shopImages)
            setShopData(data.data)
            setRefreshing(false)
        }
    }
    useFocusEffect(
        useCallback(() => {
            fetchShopData()
        }, [])
    )
    // useEffect(() => {
    //     fetchShopData()
    // }, [])
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <SafeAreaView />
            <AppHeader title='Edit Shop Images' navigation={navigation} backButton />
            <View style={styles.description}>
                <Text style={styles.descriptionText}>Click the image you want to update and upload the new one, if you don't see the uploaded image then refresh.</Text>
            </View>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetchShopData} />}>
                <View style={styles.imagesWrapper}>
                    <ShopImagePicker fetchShopData={fetchShopData} setResponseMessage={setResponseMessage} setIsLoading={setIsLoading} setModalVisible={setModalVisible} url={images[0]?.url} name={images[0]?.name} shopId={route?.params?.shopId} />
                    <ShopImagePicker fetchShopData={fetchShopData} setResponseMessage={setResponseMessage} setIsLoading={setIsLoading} setModalVisible={setModalVisible} url={images[1]?.url} name={images[1]?.name} shopId={route?.params?.shopId} />
                    <ShopImagePicker fetchShopData={fetchShopData} setResponseMessage={setResponseMessage} setIsLoading={setIsLoading} setModalVisible={setModalVisible} url={images[2]?.url} name={images[2]?.name} shopId={route?.params?.shopId} />
                    <ShopImagePicker fetchShopData={fetchShopData} setResponseMessage={setResponseMessage} setIsLoading={setIsLoading} setModalVisible={setModalVisible} url={images[3]?.url} name={images[3]?.name} shopId={route?.params?.shopId} />
                </View>
            </ScrollView>
            <ResponseModal responseMessage={responseMessage} modalVisible={modalVisible} setModalVisible={setModalVisible} />
            {
                isLoading && (
                    <AppLoader />
                )
            }
        </View>
    )
}

export default EditShopImages