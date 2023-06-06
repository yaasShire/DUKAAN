import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './style'
const AddShopField = ({ label, touched, errors, handleSubmit, user, handleBlur, handleChange, values, setFieldTouched, name }) => {

    return (
        <>
            <View style={styles.fieldHolder}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.inputHolder}>
                    <TextInput style={styles.input}
                        onChangeText={(text) => {
                            handleChange(name)(text)
                        }} onBlur={() => {
                            handleBlur(name)
                            setFieldTouched(name)
                        }} value={values[name]} numberOfLines={2}
                    />
                </View>
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