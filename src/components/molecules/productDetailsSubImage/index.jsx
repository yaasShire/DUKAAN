import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './style'
const ProductDetailsSubImage = ({ data, setselectedImage, selectedImage }) => {
    return (
        <TouchableWithoutFeedback onPress={() => {
            setselectedImage({
                id: data.id,
                image: data.image
            })
        }}>
            <View style={[styles.productSubImage, data.id == selectedImage.id ? styles.active : ""]}>
                <Image source={data.image} style={styles.subImage} />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ProductDetailsSubImage