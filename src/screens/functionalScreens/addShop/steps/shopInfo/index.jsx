import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import AddShopField from '../../../../../components/atoms/addShopField'
import AddShopButton from '../../../../../components/atoms/addShopButton'
import { Formik } from 'formik'
import { shopDetailsValidation } from '../../../../../utils/validationSchema/shopDetailsValidation'
import CancelButton from '../../../../../components/atoms/canelButton'
import { useDispatch } from 'react-redux'
import { setShopData } from '../../../../../redux/shop'
const PersonalInfo = ({ setcurrentPosition }) => {
    const dispatch = useDispatch()
    const handleDataSubmit = (values) => {
        dispatch(setShopData(values))
        setcurrentPosition(prev => prev + 1)
    }
    return (
        <View style={styles.container}>
            <View style={styles.titleHolder}>
                <Text style={styles.titleText}>Enter Shop Details</Text>
            </View>
            <Formik
                initialValues={{ shopName: "", shopEmail: "", shopNumber: "" }}
                validationSchema={shopDetailsValidation}
                onSubmit={(values) => handleDataSubmit(values)}
            >
                {
                    ({ values, errors, handleBlur, handleChange, handleSubmit, touched, setTouched, setFieldTouched }) => (
                        <ScrollView style={styles.fieldsHolder} showsVerticalScrollIndicator={false} contentContainerStyle={{ rowGap: 8 }}>
                            <AddShopField label={'Shop Name'} name="shopName" values={values.shopName} errors={errors} touched={touched} setTouched={setTouched} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} setFieldTouched={setFieldTouched} />
                            <AddShopField label={'Shop Email'} name="shopEmail" values={values.shopEmail} errors={errors} touched={touched} setTouched={setTouched} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} setFieldTouched={setFieldTouched} />
                            <AddShopField label={'Shop Number'} name="shopNumber" values={values.shopNumber} errors={errors} touched={touched} setTouched={setTouched} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} setFieldTouched={setFieldTouched} />
                            <View style={styles.buttonHolder}>
                                <CancelButton disabled={false} handleSubmit={handleSubmit} label="Previous" setcurrentPosition={setcurrentPosition} />
                                <AddShopButton handleSubmit={() => handleSubmit(values)} label="Next" setcurrentPosition={setcurrentPosition} />
                            </View>
                        </ScrollView>
                    )
                }
            </Formik>
        </View>
    )
}

export default PersonalInfo