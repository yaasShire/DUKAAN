import { View, Text, KeyboardAvoidingView } from 'react-native'
import { TextInput } from 'react-native-paper'
import React from 'react'
import styles from './style'
import { globalStyles } from '../../../globalConstants/styles'
const EditProfileField = ({ label, touched, setFieldTouched, errors, values, handleChange, handleBlur, name }) => {
    return (
        <>
            <View style={styles.container}>
                <TextInput
                    editable={false}
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