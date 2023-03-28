import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style'
const ChanePasswordField = ({ label, icon, errors, touched, values, setFieldTouched, handleBlur, handleChange, name }) => {
    return (
        <View style={styles.fieldHolder}>
            <Ionicons name={icon} size={28} style={styles.lockIcon} />
            <TextInput placeholder={label} style={styles.input}
                onChangeText={(text) => {
                    handleChange(name)(text)
                }} onBlur={() => {
                    handleBlur(name)
                    setFieldTouched(name)
                }} value={values[name]} numberOfLines={2}
            />
            <View>
                {(errors[name] && touched[name]) && (
                    <View style={styles.errorHolder}>
                        <Text style={styles.errorText}>{errors[name]}</Text>
                    </View>
                )
                }
            </View>
        </View>
    )
}

export default ChanePasswordField