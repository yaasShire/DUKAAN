import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { Button } from 'react-native'
const VerificationMessage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.contentWrapper}>
                <Text style={styles.text}>We have sent verification email, verify by you email and then log in.</Text>
                <Button title='Log in' onPress={() => navigation.navigate("login")} />
            </View>
        </View>
    )
}

export default VerificationMessage