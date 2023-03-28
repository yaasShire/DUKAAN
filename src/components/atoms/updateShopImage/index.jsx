import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import cameraPlaceHolder from '../../../assets/camera1.png'
import * as ImagePicker from 'expo-image-picker';
const UpdateShopImage = ({ main, image: imageIdentifier, imageURL }) => {
    const [image, setImage] = useState(imageURL);


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
            {image ? <Image source={{ uri: image }} style={{ width: 162, height: 146, borderRadius: 5 }} /> : <Image source={cameraPlaceHolder} style={{ width: 162, height: 146, borderRadius: 5 }} />}
            {main && <View style={styles.mainHolder}>
                <Text style={styles.mainText}>Main</Text>
            </View>}
        </TouchableOpacity>
    )
}

export default UpdateShopImage

