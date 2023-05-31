import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import LottieView from 'lottie-react-native'


const UploadingAnimation = () => {
    return (
        <View style={styles.container}>
            <LottieView source={require('../../../assets/animations/uploading.json')} autoPlay loop />
            {/* <Text>Loading...</Text> */}
        </View>
    )
}

export default UploadingAnimation