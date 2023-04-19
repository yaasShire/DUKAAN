import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import AddProductField from '../../../../../../components/atoms/addProductField'
import AddProductActionButton from '../../../../../../components/atoms/addProductActionButton'
import { Formik } from 'formik'
import { productOfferDetails } from '../../../../../../utils/validationSchema/productOffers'
import { useSelector } from 'react-redux'
const Offers = ({ setCurrentPosition, title }) => {
    const [showError, setShowError] = useState(false)
    const productValues = useSelector(state => state.offers)
    const errorHandler = (action) => {
        if (action == 'Prev') {
            setCurrentPosition(prev => prev - 1)
        }
        if (action == 'Next') {
            setCurrentPosition(prev => prev + 1)
        }
        if (!productValues.id) {
            setShowError(true)
            setTimeout(() => {
                setShowError(false)
            }, 2000)

        }
    }
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    showError && (
                        <View style={styles.errorHolder}>
                            <Text style={styles.textError}>Please select product category</Text>
                        </View>
                    )
                }
                <Text style={styles.textTitle}>{title}</Text>
                <Formik
                    initialValues={{ quantity: productValues.quantity, price: productValues.price, sellerSKU: productValues.sellerSKU }}
                    validationSchema={productOfferDetails}
                >
                    {
                        ({ errors, values, touched, setFieldTouched, handleBlur, handleChange, handleSubmit }) => (
                            <>
                                <View>
                                    {/* <AddProductField step="requiredInfo" label="Product Name" valuesObj={values} name="productName" values={values.productName} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} setFieldTouched={setFieldTouched} /> */}
                                    <AddProductField step="offer" label="Quantity" valuesObj={values} name="quantity" values={values.quantity} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} setFieldTouched={setFieldTouched} />
                                    <AddProductField step="offer" label="Price" valuesObj={values} name="price" values={values.price} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} setFieldTouched={setFieldTouched} />
                                    <AddProductField step="offer" label="Seller SKU" valuesObj={values} name="sellerSKU" values={values.sellerSKU} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} setFieldTouched={setFieldTouched} />
                                </View>
                                <View style={styles.actionButtonHolder}>
                                    <AddProductActionButton label={"Prev"} action="Prev" errors={errors} errorHandler={errorHandler} handleSubmit={handleSubmit} />
                                    <AddProductActionButton label={"Next"} action="Next" errors={errors} errorHandler={errorHandler} handleSubmit={handleSubmit} />
                                </View>
                            </>
                        )
                    }
                </Formik>

            </ScrollView>
        </View>
    )
}

export default Offers