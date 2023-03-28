import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import AddShopField from '../../../../../components/atoms/addShopField'
import AddShopButton from '../../../../../components/atoms/addShopButton'
import { Formik } from 'formik'
import { shopDetailsValidation } from '../../../../../utils/validationSchema/shopDetailsValidation'
const PersonalInfo = ({ setcurrentPosition }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.titleHolder}>
                <Text style={styles.titleText}>Enter Shop Details</Text>
            </View>
            <Formik
                initialValues={{ shopName: "", shopEmail: "", shopAddress: "" }}
                validationSchema={shopDetailsValidation}
                onSubmit={() => {
                    setcurrentPosition(prev => prev + 1)

                }}
            >
                {
                    ({ values, errors, handleBlur, handleChange, handleSubmit, touched, setTouched, setFieldTouched }) => (
                        <View style={styles.fieldsHolder}>
                            <AddShopField label={'Shop name'} name="shopName" values={values.shopName} errors={errors} touched={touched} setTouched={setTouched} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} setFieldTouched={setFieldTouched} />
                            <AddShopField label={'Shop email'} name="shopEmail" values={values.shopEmail} errors={errors} touched={touched} setTouched={setTouched} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} setFieldTouched={setFieldTouched} />
                            <AddShopField label={'Shop address'} name="shopAddress" values={values.shopAddress} errors={errors} touched={touched} setTouched={setTouched} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} setFieldTouched={setFieldTouched} />
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