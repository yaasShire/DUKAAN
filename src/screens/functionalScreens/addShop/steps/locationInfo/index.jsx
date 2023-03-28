import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import AddShopField from '../../../../../components/atoms/addShopField'
import AddShopButton from '../../../../../components/atoms/addShopButton'
import { Formik } from 'formik'
import { shopLocationValidation } from '../../../../../utils/validationSchema/shopLocationValidation'
const PersonalInfo = ({ setcurrentPosition }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.titleHolder}>
                <Text style={styles.titleText}>Enter Location Details</Text>
            </View>
            <Formik
                initialValues={{ country: "", state: "", city: "", nearestLANMark: "" }}
                validationSchema={shopLocationValidation}
                onSubmit={() => {
                    setcurrentPosition(prev => prev + 1)

                }}
            >
                {
                    ({ values, errors, handleBlur, handleChange, handleSubmit, touched, setTouched, setFieldTouched }) => (
                        <View style={styles.fieldsHolder}>
                            <AddShopField label={'Country'} name="country" values={values.country} errors={errors} touched={touched} setTouched={setTouched} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} setFieldTouched={setFieldTouched} />
                            <AddShopField label={'State'} name="state" values={values.state} errors={errors} touched={touched} setTouched={setTouched} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} setFieldTouched={setFieldTouched} />
                            <AddShopField label={'City'} name="city" values={values.city} errors={errors} touched={touched} setTouched={setTouched} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} setFieldTouched={setFieldTouched} />
                            <AddShopField label={'Nearest LAN Mark'} name="nearestLANMark" values={values.nearestLANMark} errors={errors} touched={touched} setTouched={setTouched} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} setFieldTouched={setFieldTouched} />
                            <View style={styles.buttonHolder}>
                                <AddShopButton handleSubmit={handleSubmit} label="Next" />
                            </View>
                        </View>
                    )
                }
            </Formik>
        </ScrollView>
    )
}

export default PersonalInfo