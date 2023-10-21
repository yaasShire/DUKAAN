import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { TextInput } from 'react-native-paper';
const AddShopField = ({ label, touched, errors, keyboardType = "ascii-capable", handleSubmit = "", user, handleBlur, handleChange, values, setFieldTouched, name }) => {

    return (
        <>
            <View style={styles.fieldHolder}>
                {
                    (errors[name] && touched[name]) && (
                        <Text style={{ color: "red", marginTop: 5 }}>{errors[name]}</Text>
                    )
                }
                <Text style={styles.label}>{label}</Text>
                <TextInput
                    keyboardType={keyboardType}
                    style={styles.input}
                    onChangeText={(text) => {
                        handleChange(name)(text)
                    }}
                    onBlur={() => {
                        handleBlur(name)
                        setFieldTouched(name)
                    }}
                    value={values[name]}
                    numberOfLines={2}
                />
            </View>

        </>
    )
}

export default AddShopField