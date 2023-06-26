import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { TextInput } from 'react-native-paper';
const AddShopField = ({ label, touched, errors, keyboardType = "ascii-capable", handleSubmit = "", user, handleBlur, handleChange, values, setFieldTouched, name }) => {

    return (
        <>
            <View style={styles.fieldHolder}>
                <Text style={styles.label}>{label}</Text>
                <TextInput
                    keyboardType={keyboardType}
                    style={styles.input}
                    mode="outlined"
                    onChangeText={(text) => {
                        handleChange(name)(text)
                    }} onBlur={() => {
                        handleBlur(name)
                        setFieldTouched(name)
                    }} value={values[name]} numberOfLines={2}
                />
            </View>
            {
                (errors[name] && touched[name]) && (
                    <View style={styles.mainErrorHolder}>
                        <View style={styles.errorHolder}>
                            <Text style={{ color: "red" }}>{errors[name]}</Text>
                        </View>
                    </View>
                )
            }
        </>
    )
}

export default AddShopField