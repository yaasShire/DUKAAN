import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import cameraPlaceHolder from '../../../assets/camera1.png'
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { setMainImage, setImage2, setImage3, setImage4, setImage5, setImage6 } from '../../../redux/productImages';
const ImageTaker = ({ main, image: imageIdentifier, imageURL }) => {
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
            main ? dispatch(setMainImage(result.assets[0].uri))
                : imageIdentifier == 'image2' ? dispatch(setImage2(result.assets[0].uri))
                    : imageIdentifier == 'image3' ? dispatch(setImage3(result.assets[0].uri))
                        : imageIdentifier == 'image4' ? dispatch(setImage4(result.assets[0].uri))
                            : imageIdentifier == 'image5' ? dispatch(setImage5(imresult.assets[0].uriage))
                                : imageIdentifier == 'image6' ? dispatch(setImage6(result.assets[0].uri)) : ""
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

