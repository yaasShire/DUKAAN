import { View, Text } from 'react-native'
import { TextInput } from 'react-native-paper'
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
                <View>
                    {(errors[name] && touched[name]) && (
                        <Text style={styles.errorText}>{errors[name]}*</Text>
                    )
                    }
                </View>
                <Text style={styles.label}>{label}</Text>

                <TextInput
                    mode='outlined'
                    onChangeText={(text) => {
                        handleChange(name)(text)
                    }} onBlur={() => {
                        handleBlur(name)
                        setFieldTouched(name)
                    }} value={valuesObj[name]}
                    numberOfLines={2}
                    style={styles.input}
                />


            </View>

        </View>
    )
}

export default AddProductField