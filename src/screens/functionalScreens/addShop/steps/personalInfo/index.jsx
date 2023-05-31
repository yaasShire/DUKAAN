import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import AddShopField from '../../../../../components/atoms/addShopField'
import AddShopButton from '../../../../../components/atoms/addShopButton'
import { Formik } from 'formik'
import { addShopPersonalInfoValidation } from '../../../../../utils/validationSchema/addShopPersonalInfoValidation'
import CancelButton from '../../../../../components/atoms/canelButton'
import { useDispatch } from 'react-redux'
import { setPersonalData } from '../../../../../redux/shop'
const PersonalInfo = ({ setcurrentPosition }) => {
    const dispatch = useDispatch()
    const handleDataSubmit = (values) => {
        dispatch(setPersonalData(values))
        setcurrentPosition(prev => prev + 1)
    }
    return (
        <View style={styles.container}>
            <View style={styles.titleHolder}>
                <Text style={styles.titleText}>Enter Personal Details</Text>
            </View>
            <Formik
                initialValues={{ ownerName: "", ownerEmail: "", ownerPhoneNumber: "", ownerAddress: "" }}
                validationSchema={addShopPersonalInfoValidation}
                onSubmit={(values) => handleDataSubmit(values)}
            >
                {
                    ({ values, errors, handleBlur, handleChange, handleSubmit, touched, setTouched, setFieldTouched }) => {
                        return (
                            <ScrollView style={styles.fieldsHolder} showsVerticalScrollIndicator={false} contentContainerStyle={{ rowGap: 15 }}>
                                <AddShopField label={'Owner name'} name="ownerName" values={values.ownerName} errors={errors} touched={touched} setTouched={setTouched} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} setFieldTouched={setFieldTouched} />
                                <AddShopField label={'Owner email'} name="ownerEmail" values={values.ownerEmail} errors={errors} touched={touched} setTouched={setTouched} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} setFieldTouched={setFieldTouched} />
                                <AddShopField label={'Owner phone number'} name="ownerPhoneNumber" values={values} errors={errors} touched={touched} setTouched={setTouched} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} setFieldTouched={setFieldTouched} />
                                <AddShopField label={'Owner address'} name="ownerAddress" values={values.ownerAddress} errors={errors} touched={touched} setTouched={setTouched} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} setFieldTouched={setFieldTouched} />
                                <View style={styles.buttonHolder}>
                                    <CancelButton disabled={true} handleSubmit={handleSubmit} label="Previous" setcurrentPosition={setcurrentPosition} />
                                    <AddShopButton handleSubmit={() => handleSubmit(values)} label="Next" setcurrentPosition={setcurrentPosition} />
                                </View>
                            </ScrollView>
                        )
                    }
                }
            </Formik>
        </View>
    )
}

export default PersonalInfo