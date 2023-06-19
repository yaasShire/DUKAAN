import { View, Text, KeyboardAvoidingView } from 'react-native'
import { TextInput } from 'react-native-paper'
import React from 'react'
import styles from './style'
import { globalStyles } from '../../../globalConstants/styles'
const EditProfileField = ({ label, touched, setFieldTouched, user, errors, values, handleChange, handleBlur, name }) => {
    return (
        <>
            <TextInput
                placeholderTextColor={globalStyles.colors.primaryGray}
                style={styles.input}
                mode="outlined"
                label={label}
                onChangeText={(text) => {
                    handleChange(name)(text)
                }}
                onBlur={() => {
                    handleBlur(name)
                    setFieldTouched(name)
                }} value={values ? values : user[name]} numberOfLines={2}
            />
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