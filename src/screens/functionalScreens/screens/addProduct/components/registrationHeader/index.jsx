import { View, Text } from 'react-native'
import React from 'react'

const RegistrationHeader = ({ title }) => {
    return (
        <View style={{ textAlign: "center", opacity: 0.5, width: "100%", paddingVertical: "2%", alignItems: "center" }}>
            <Text>{title}</Text>
        </View>
    )
}

export default RegistrationHeader