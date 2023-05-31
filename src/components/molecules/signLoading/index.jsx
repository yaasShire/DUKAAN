import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import styles from './style'
import loadingAnimation from '../../../assets/animations/loading.json'
const AppLoader = () => {
    return (
        <View style={styles.container}>
            <LottieView source={require('../../../assets/animations/signLoading.json')} autoPlay loop />
        </View>
    )
}

export default AppLoader