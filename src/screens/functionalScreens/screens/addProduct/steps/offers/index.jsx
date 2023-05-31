import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import AddProductField from '../../../../../../components/atoms/addProductField'
import AddProductActionButton from '../../../../../../components/atoms/addProductActionButton'
import { Formik } from 'formik'
import { productOfferDetails } from '../../../../../../utils/validationSchema/productOffers'
import { useSelector, useDispatch } from 'react-redux'
import { setProductOffers } from '../../../../../../redux/products'
const Offers = ({ setCurrentPosition, title }) => {
    const dispatch = useDispatch()
    const [showError, setShowError] = useState(false)
    const offers = useSelector(state => state.productRegistration.productOffers)


    const handleNext = (values) => {
        dispatch(setProductOffers(values))
        setCurrentPosition(prev => prev + 1)
    }

    return (
        <View style={styles.container}>
            {
                showError && (
                    <View style={styles.errorHolder}>
                        <Text style={styles.textError}>Please select product category</Text>
                    </View>
                )
            }
            <Text style={styles.textTitle}>{title}</Text>
            <Formik
                initialValues={{ quantity: offers.quantity, price: offers.price, description: offers.description }}
                validationSchema={productOfferDetails}
                onSubmit={(values) => handleNext(values)}
            >
                {
                    ({ errors, values, touched, setFieldTouched, handleBlur, handleChange, handleSubmit }) => (
                        <>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                {/* <AddProductField step="requiredInfo" label="Product Name" valuesObj={values} name="productName" values={values.productName} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} setFieldTouched={setFieldTouched} /> */}
                                <AddProductField step="offer" label="Quantity" valuesObj={values} name="quantity" values={values.quantity} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} setFieldTouched={setFieldTouched} />
                                <AddProductField step="offer" label="Price" valuesObj={values} name="price" values={values.price} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} setFieldTouched={setFieldTouched} />
                                <AddProductField step="offer" label="Description" valuesObj={values} name="description" values={values.description} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} setFieldTouched={setFieldTouched} />
                            </ScrollView>
                            <View style={styles.actionButtonHolder}>
                                <AddProductActionButton label={"Prev"} action="Prev" errors={errors} setCurrentPosition={setCurrentPosition} />
                                <AddProductActionButton label={"Next"} action="Next" errors={errors} handleSubmit={() => handleSubmit(values)} />
                            </View>
                        </>
                    )
                }
            </Formik>

        </View>
    )
}

export default Offers