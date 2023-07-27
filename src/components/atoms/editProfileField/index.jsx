import { View, Text, KeyboardAvoidingView } from 'react-native'
import { TextInput } from 'react-native-paper'
import React from 'react'
import styles from './style'
import { globalStyles } from '../../../globalConstants/styles'
const EditProfileField = ({ label, touched, setFieldTouched, user, errors, values, handleChange, handleBlur, name }) => {
    return (

        <TextInput
            placeholderTextColor={globalStyles.colors.tertiary}
            style={styles.input}
            mode="outlined"
            outlineColor={globalStyles.colors.tertiary}
            selectionColor={globalStyles.colors.orange}
            activeOutlineColor={globalStyles.colors.logoColor}
            label={label}
            onChangeText={(text) => {
                handleChange(name)(text)
            }}
            onBlur={() => {
                handleBlur(name)
                setFieldTouched(name)
            }} value={values ? values : user[name]} numberOfLines={2}
        />

    )
}
export default EditProfileField