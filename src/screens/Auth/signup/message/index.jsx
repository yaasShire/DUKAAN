import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { Button } from 'react-native'
const VerificationMessage = ({ navigation = () => { }, description = "", screen = "", setVerificationMessage }) => {
    return (
        <View style={styles.container}>
            <View style={styles.contentWrapper}>
                <Text style={styles.text}>{description}</Text>
                <Button title='Log in' onPress={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'pending' }],
                    });
                    setVerificationMessage(false)
                }
                } />
            </View>
        </View>
    )
}

export default VerificationMessage