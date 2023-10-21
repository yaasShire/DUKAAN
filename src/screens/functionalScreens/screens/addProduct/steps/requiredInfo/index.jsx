import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import AddProductField from '../../../../../../components/atoms/addProductField'
import AddProductActionButton from '../../../../../../components/atoms/addProductActionButton'
import { Formik } from 'formik'
import { requiredProductDetails } from '../../../../../../utils/validationSchema/requiredProductDetails'
import { useDispatch, useSelector } from 'react-redux'
// import { fillRequiredProductInformation } from '../../../../../../redux/requiredProductInformation'
import { fillRequiredProductInformation } from '../../../../../../redux/products'
import BrandField from './brandField'
import { fetchData } from '../../../../../../hooks/useFetch'

const RequiredInfo = ({ setCurrentPosition, title }) => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [brandsList, setBrandsList] = useState([])
    const dispatch = useDispatch()
    const requiredInfo = useSelector(state => state.productRegistration.productRequiredInfo)
    const handleNext = (values) => {
        dispatch(fillRequiredProductInformation(values))
        setCurrentPosition(prev => prev + 1)
    }
    useEffect(() => {
        const fetchRegions = async () => {
            const { data } = await fetchData('seller/brand/view', setError, setIsLoading)
            console.log(data)
            setBrandsList(data.data)
        }
        fetchRegions()
    }, [])

    return (
        // <ScrollView style={{ height: "100%", backgroundColor: "pink" }}>
        <View style={styles.container}>
            <Text style={styles.textTitle}>{title}</Text>
            <Formik
                initialValues={{ productName: requiredInfo.productName, productBrand: requiredInfo.productBrand, yearOfMake: requiredInfo.yearOfMake }}
                validationSchema={requiredProductDetails}
                onSubmit={(values) => handleNext(values)}
            >
                {
                    ({ errors, values, handleBlur, handleChange, handleSubmit, touched, setFieldTouched, setFieldValue }) => (
                        <>
                            <ScrollView showsVerticalScrollIndicator={false} >
                                <AddProductField step="requiredInfo" label="Product Name" valuesObj={values} name="productName" values={values.productName} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} setFieldTouched={setFieldTouched} />
                                {/* <AddProductField step="requiredInfo" label="Product Brand" valuesObj={values} name="productBrand" values={values.productBrand} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} setFieldTouched={setFieldTouched} /> */}
                                <AddProductField step="requiredInfo" label="Year Of Make" valuesObj={values} name="yearOfMake" values={values.yearOfMake} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} setFieldTouched={setFieldTouched} />
                                <BrandField setFieldValue={setFieldValue} brandsList={brandsList} step="requiredInfo" label="Product Brand" valuesObj={values} name="productBrand" values={values.productBrand} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} setFieldTouched={setFieldTouched} />
                            </ScrollView>
                            <View style={styles.actionButtonHolder}>
                                <AddProductActionButton action="Prev" label={"Prev"} errors={errors} setCurrentPosition={setCurrentPosition} />
                                <AddProductActionButton action="Next" label={"Next"} errors={errors} handleSubmit={(values) => handleSubmit(values)} />
                            </View>
                        </>
                    )
                }
            </Formik>
        </View>
        // </ScrollView>
    )
}

export default RequiredInfo