import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import ImageTaker from '../../atoms/productImageTaker'
import { useSelector } from 'react-redux'
import AddProductActionButton from '../../atoms/addProductActionButton'
const AddImages = ({ setCurrentPosition, title }) => {
    const [showError, setShowError] = useState(false)
    const mainImage = useSelector(state => state.product_Images.mainImage.url)
    const image2 = useSelector(state => state.product_Images.image2.url)
    const image3 = useSelector(state => state.product_Images.image3.url)
    const image4 = useSelector(state => state.product_Images.image4.url)
    const image5 = useSelector(state => state.product_Images.image5.url)
    const image6 = useSelector(state => state.product_Images.image6.url)
    const errorHandler = () => {
        if (!mainImage) {
            setShowError(true)
            setTimeout(() => {
                setShowError(false)
            }, 2000)

        } else {
            setCurrentPosition(prev => prev + 1)
        }
    }
    return (
        <View style={styles.mainContainer}>
            {
                showError && (
                    <View style={styles.errorHolder}>
                        <Text style={styles.textError}>Product main image is required</Text>
                    </View>
                )
            }
            <Text style={styles.textTitle}>{title}</Text>
            <View style={styles.container}>
                <ImageTaker main={true} imageURL={mainImage} />
                <ImageTaker image={"image2"} imageURL={image2} />
                <ImageTaker image={"image3"} imageURL={image3} />
                <ImageTaker image={"image4"} imageURL={image4} />
                <ImageTaker image={"image5"} imageURL={image5} />
                <ImageTaker image={"image6"} imageURL={image6} />
            </View>
            <View style={styles.actionButtonHolder}>
                <AddProductActionButton errorHandler={errorHandler} setCurrentPosition={setCurrentPosition} label="Next" />
            </View>

        </View>
    )
}
export default AddImages