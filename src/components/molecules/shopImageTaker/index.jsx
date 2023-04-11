import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import cameraPlaceHolder from '../../../assets/camera1.png'
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
const ShopImageTaker = ({ main, image: imageIdentifier, imageURL }) => {
    const [image, setImage] = useState(imageURL);
    const dispatch = useDispatch()

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);

        }
    };
    return (
        <TouchableOpacity style={styles.imageTaker} onPress={() => {
            pickImage()


        }}>
            {image ? <Image source={{ uri: image }} style={styles.image} /> : <Image source={cameraPlaceHolder} style={styles.image} />}
            {main && <View style={styles.mainHolder}>
                <Text style={styles.mainText}>Main</Text>
            </View>}
        </TouchableOpacity>
    )
}

export default ShopImageTaker

