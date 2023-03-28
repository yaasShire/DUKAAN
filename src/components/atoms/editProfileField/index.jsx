import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './style'
const EditProfileField = ({ label, touched, setFieldTouched, errors, values, handleChange, handleBlur, name }) => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
                <TextInput style={styles.input}
                    onChangeText={(text) => {
                        handleChange(name)(text)
                    }} onBlur={() => {
                        handleBlur(name)
                        setFieldTouched(name)
                    }} value={values[name]} numberOfLines={2}
                />
            </View>
            {(errors[name] && touched[name]) && (
                <View style={styles.errorHolder}>
                    <Text style={styles.errorText}>{errors[name]}</Text>
                </View>
            )
            }
        </>
    )
}

export default EditProfileField