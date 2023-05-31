import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import ImageTaker from '../../../../../../components/atoms/productImageTaker'
import { useSelector } from 'react-redux'
import AddProductActionButton from '../../../../../../components/atoms/addProductActionButton'
import ProductRegistrationError from '../../../../../../components/atoms/productRegistrationError'
const AddImages = ({ setCurrentPosition, title }) => {
    const [showError, setShowError] = useState(false)
    const mainImage = useSelector(state => state.productRegistration.images.url1)
    const image2 = useSelector(state => state.productRegistration.images.url2)
    const image3 = useSelector(state => state.productRegistration.images.url3)
    const image4 = useSelector(state => state.productRegistration.images.url4)
    const errorHandler = (action) => {
        if (action == 'Prev') {
            setCurrentPosition(prev => prev - 1)
        }
        else if ((action == 'Next' && mainImage) && (image2 && image3) && image4) {
            setCurrentPosition(prev => prev + 1)
        }
        else if ((!mainImage || !image2 || !image3 || !image4)) {
            setShowError(true)
            setTimeout(() => {
                setShowError(false)
            }, 2000)
        }
    }
    return (
        <View style={styles.mainContainer}>
            {
                showError && (
                    <ProductRegistrationError label='All images is required' />
                )
            }
            <Text style={styles.textTitle}>{title}</Text>
            <View style={styles.container}>
                <ImageTaker main={true} imageURL={mainImage} img={1} />
                <ImageTaker image={"image2"} imageURL={image2} img={2} />
                <ImageTaker image={"image3"} imageURL={image3} img={3} />
                <ImageTaker image={"image4"} imageURL={image4} img={4} />
                {/* <ImageTaker image={"image5"} imageURL={image5} img5={img5} />
                <ImageTaker image={"image6"} imageURL={image6} /> */}
            </View>
            <View style={styles.actionButtonHolder}>
                <AddProductActionButton errorHandler={errorHandler} action="Prev" setCurrentPosition={setCurrentPosition} label="Prev" />
                <AddProductActionButton errorHandler={errorHandler} action="Next" setCurrentPosition={setCurrentPosition} label="Next" />
            </View>

        </View>
    )
}
export default AddImages