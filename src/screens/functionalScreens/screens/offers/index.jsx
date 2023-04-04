import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import AddProductField from '../../../../components/atoms/addProductField'
import AddProductActionButton from '../../../../components/atoms/addProductActionButton'
import { Formik } from 'formik'
import { productOfferDetails } from '../../../../utils/validationSchema/productOffers'
import { useSelector } from 'react-redux'
const Offers = ({ setCurrentPosition, title }) => {
    const handleGo = () => {
        // setCurrentPosition(prev=>prev+)
    }
    const productValues = useSelector(state => state.offers)
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.textTitle}>{title}</Text>
                <Formik
                    initialValues={{ quantity: productValues.quantity, price: productValues.price, sellerSKU: productValues.sellerSKU }}
                    validationSchema={productOfferDetails}
                >
                    {
                        ({ errors, values, touched, setFieldTouched, handleBlur, handleChange, handleSubmit }) => (
                            <>
                                <View>
                                    <AddProductField step="offer" label="Quantity" valuesObj={values} name="quantity" values={values.productName} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} setFieldTouched={setFieldTouched} />
                                    <AddProductField step="offer" label="Price" valuesObj={values} name="price" values={values.productBrand} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} setFieldTouched={setFieldTouched} />
                                    <AddProductField step="offer" label="Seller SKU" valuesObj={values} name="sellerSKU" values={values.yearOfMake} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} setFieldTouched={setFieldTouched} />
                                </View>
                                <View style={styles.actionButtonHolder}>
                                    <AddProductActionButton label={"Next"} errors={errors} handleSubmit={handleSubmit} />
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