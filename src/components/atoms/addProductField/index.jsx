import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './style'
import { useDispatch } from 'react-redux'
import { fillRequiredProductInformation } from '../../../redux/requiredProductInformation'
import { setProductOffers } from '../../../redux/productOffers'
const AddProductField = ({ name = '', label = '', valuesObj = {}, values = {}, handleChange = () => { }, handleBlur = () => { }, errors = {}, touched = false, setFieldTouched = () => { }, step = "" }) => {
    const dispatch = useDispatch();
    step == 'offer' ? dispatch(setProductOffers(valuesObj)) : step == 'requiredInfo' ? dispatch(fillRequiredProductInformation(valuesObj)) : ""
    return (
        <View>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>{label}</Text>
                <View>
                    {(errors[name] && touched[name]) && (
                        <Text style={styles.errorText}>{errors[name]}*</Text>
                    )
                    }
                </View>
                <TextInput
                    onChangeText={(text) => {
                        handleChange(name)(text)
                    }} onBlur={() => {
                        handleBlur(name)
                        setFieldTouched(name)
                    }} value={valuesObj[name]}
                    numberOfLines={2}
                    style={styles.input} />
            </View>

        </View>
    )
}

export default AddProductField