import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import cameraPlaceHolder from '../../../assets/camera1.png'
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { setProductImage1, setProductImage2, setProductImage3, setProductCategory, setProductImage4 } from '../../../redux/products';

const ImageTaker = ({ main, image: img, imageURL, img: imageNumber = 0 }) => {
    const [image, setImage] = useState(imageURL);
    const dispatch = useDispatch()

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
            imageNumber == 1 ? dispatch(setProductImage1(result.assets[0].uri))
                : imageNumber == 2 ? dispatch(setProductImage2(result.assets[0].uri))
                    : imageNumber == 3 ? dispatch(setProductImage3(result.assets[0].uri))
                        : imageNumber == 4 ? dispatch(setProductImage4(result.assets[0].uri)) : ""
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

export default ImageTaker

