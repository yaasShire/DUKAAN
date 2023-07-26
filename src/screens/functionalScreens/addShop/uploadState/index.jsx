import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import styles from './style'
import success from '../../../../assets/images/success.png'
const UploadState = ({ route, navigation }) => {

    return (
        <View color={['#5cd199', '#6cf5b3']} style={styles.container}>
            <Image style={styles.image} source={success} />
            <View style={styles.bottomContent}>
                <Text style={styles.successLabel}>{route?.params?.uploadStatus?.result?.status}</Text>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("shops")}>
                    <Text style={styles.buttonText}>GO BACK TO SHOPS</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default UploadState