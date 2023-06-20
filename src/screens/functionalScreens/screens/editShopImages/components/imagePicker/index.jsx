import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import cameraPlaceHolder from '../../../../../../assets/camera1.png'
import * as ImagePicker from 'expo-image-picker';
import { postData } from '../../../../../../hooks/usePost';
const ShopImagePicker = ({ main = false, url = "", name = "", shopId = "", setModalVisible = () => { }, setIsLoading = () => { }, setResponseMessage = () => { } }) => {
    const [image, setImage] = useState(url);
    const [error, setError] = useState(null)
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [6, 6],
        });
        if (!result.canceled) {
            setIsLoading(true)
            const imageName = result.assets[0].uri.split('/')
            const shopData = new FormData()
            setImage(imageName)
            shopData.append('USID', shopId)
            shopData.append(name, {
                name: imageName[imageName.length - 1],
                uri: result.assets[0].uri,
                type: `image/${result.assets[0].uri.slice(-4)}`
            })
            const data = await postData('seller/shop/update', shopData, setError, setIsLoading)
            if (data?.result?.status == 'changed') {
                setModalVisible(true)
                setResponseMessage(data?.result?.status)
            }
        }
    };


    return (
        <>
            <TouchableOpacity style={styles.imageTaker} onPress={() => {
                pickImage()
            }}>
                {/* {url ? <Image source={{ uri: url }} style={styles.image} /> : <Image source={cameraPlaceHolder} style={styles.image} />} */}
                <Image style={styles.image} source={{ uri: "https://sweyn.co.uk/storage/images/shops/" + url }} />
                {main && <View style={styles.mainHolder}>
                    <Text style={styles.mainText}>Main</Text>
                </View>}
            </TouchableOpacity>
        </>
    )
}

export default ShopImagePicker

