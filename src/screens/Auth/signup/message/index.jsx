import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { Button } from 'react-native'
const VerificationMessage = ({ navigation = "", description = "", screen = "", setVerificationMessage }) => {
    return (
        <View style={styles.container}>
            <View style={styles.contentWrapper}>
                <Text style={styles.text}>{description}</Text>
                <Button title='Log in' onPress={() => {
                    setVerificationMessage(false)
                    navigation.navigate(screen)


                }} />
            </View>
        </View>
    )
}

export default VerificationMessage