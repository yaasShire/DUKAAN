import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import AddProductField from '../../../../../components/atoms/addProductField'
import AddProductActionButton from '../../../../../components/atoms/addProductActionButton'
import { Formik } from 'formik'
import { requiredProductDetails } from '../../../../../utils/validationSchema/requiredProductDetails'
import { useDispatch, useSelector } from 'react-redux'
import { fillRequiredProductInformation } from '../../../../../redux/requiredProductInformation'
const RequiredInfo = ({ setCurrentPosition, title }) => {
    const dispatch = useDispatch()
    const requiredInfo = useSelector(state => state.productInDetails)
    const handleGo = () => {
        setCurrentPosition(5)
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.textTitle}>{title}</Text>
                <Formik
                    initialValues={{ productName: requiredInfo.productName, productBrand: requiredInfo.productBrand, yearOfMake: requiredInfo.yearOfMake }}
                    validationSchema={requiredProductDetails}
                    onSubmit={handleGo}
                >
                    {
                        ({ errors, values, handleBlur, handleChange, handleSubmit, touched, setFieldTouched }) => (
                            <>
                                <View>
                                    <AddProductField step="requiredInfo" label="Product Name" valuesObj={values} name="productName" values={values.productName} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} setFieldTouched={setFieldTouched} />
                                    <AddProductField step="requiredInfo" label="Product Brand" valuesObj={values} name="productBrand" values={values.productBrand} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} setFieldTouched={setFieldTouched} />
                                    <AddProductField step="requiredInfo" label="Year Of Make" valuesObj={values} name="yearOfMake" values={values.yearOfMake} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} setFieldTouched={setFieldTouched} />
                                </View>
                                <View style={styles.actionButtonHolder}>
                                    <AddProductActionButton label={"Next"} errors={errors} handleSubmit={handleSubmit} />
                                </View>
                            </>
                        )
                    }
                </Formik>
            </View>
        </ScrollView>
    )
}

export default RequiredInfo