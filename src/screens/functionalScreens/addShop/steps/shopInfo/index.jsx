import { View, Text, ScrollView, Platform, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import styles from './style'
import AddShopField from '../../../../../components/atoms/addShopField'
import AddShopButton from '../../../../../components/atoms/addShopButton'
import { Formik } from 'formik'
import { shopDetailsValidation } from '../../../../../utils/validationSchema/shopDetailsValidation'
import CancelButton from '../../../../../components/atoms/canelButton'
import { useDispatch, useSelector } from 'react-redux'
import { setShopData } from '../../../../../redux/shop'
import ProductRegistrationHeader from '../../components/productRegistrationHeader'
const PersonalInfo = ({ setcurrentPosition }) => {
    const { shopData } = useSelector(state => state.shopRegistration)
    const dispatch = useDispatch()
    const handleDataSubmit = (values) => {
        dispatch(setShopData(values))
        setcurrentPosition(prev => prev + 1)
    }
    return (
        <View style={styles.container}>
            <ProductRegistrationHeader title="Enter Shop Details" />
            <KeyboardAvoidingView
                enabled
                style={{ flex: 1 }}
                keyboardVerticalOffset={15}
                behavior={Platform.OS == 'ios' ? 'padding' : null}>
                <Formik
                    initialValues={{ shopName: shopData?.shopName, shopEmail: shopData?.shopEmail, shopNumber: shopData?.shopNumber }}
                    validationSchema={shopDetailsValidation}
                    onSubmit={(values) => handleDataSubmit(values)}
                >
                    {
                        ({ values, errors, handleBlur, handleChange, handleSubmit, touched, setTouched, setFieldTouched }) => (
                            <ScrollView style={styles.fieldsHolder} showsVerticalScrollIndicator={false} contentContainerStyle={{ rowGap: 8 }}>
                                <AddShopField label={'Shop Name'} name="shopName" values={values} errors={errors} touched={touched} setTouched={setTouched} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} setFieldTouched={setFieldTouched} />
                                <AddShopField keyboardType='email-address' label={'Shop Email'} name="shopEmail" values={values} errors={errors} touched={touched} setTouched={setTouched} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} setFieldTouched={setFieldTouched} />
                                <AddShopField keyboardType='number-pad' label={'Shop Phone Number'} name="shopNumber" values={values} errors={errors} touched={touched} setTouched={setTouched} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} setFieldTouched={setFieldTouched} />
                                <View style={styles.buttonHolder}>
                                    <CancelButton disabled={true} handleSubmit={handleSubmit} label="Previous" setcurrentPosition={setcurrentPosition} />
                                    <AddShopButton handleSubmit={() => handleSubmit(values)} label="Next" setcurrentPosition={setcurrentPosition} />
                                </View>
                            </ScrollView>
                        )
                    }
                </Formik>
            </KeyboardAvoidingView>
        </View>
    )
}

export default PersonalInfo