import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import AddShopField from '../../../../../components/atoms/addShopField'
import AddShopButton from '../../../../../components/atoms/addShopButton'
import { Formik } from 'formik'
import { addShopPersonalInfoValidation } from '../../../../../utils/validationSchema/addShopPersonalInfoValidation'
import CancelButton from '../../../../../components/atoms/canelButton'
import { useDispatch } from 'react-redux'
import { setPersonalData } from '../../../../../redux/shop'
import { fetchData } from '../../../../../hooks/useFetch'
import { useFocusEffect } from '@react-navigation/native'

const PersonalInfo = ({ setcurrentPosition }) => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [user, setUser] = useState({})
    const handleDataSubmit = (values) => {
        dispatch(setPersonalData(values))
        setcurrentPosition(prev => prev + 1)
    }
    useFocusEffect(
        React.useCallback(() => {
            const getUserData = async () => {
                const { data: userData } = await fetchData('seller/user/view', setError, setIsLoading)
                setUser(userData.data[0])

            }
            getUserData()
            return () => {
                // Actions to perform when the screen loses focus
            };
        }, [])
    );

    return (
        <View style={styles.container}>
            <View style={styles.titleHolder}>
                <Text style={styles.titleText}>Enter Personal Details</Text>
            </View>
            <Formik
                initialValues={{ ownerName: user.name, ownerEmail: user.email, ownerPhoneNumber: user.phone_number, ownerAddress: "" }}
                validationSchema={addShopPersonalInfoValidation}
                onSubmit={(values) => handleDataSubmit(values)}
            >
                {
                    ({ values, errors, handleBlur, handleChange, handleSubmit, touched, setTouched, setFieldTouched }) => {
                        return (
                            <ScrollView style={styles.fieldsHolder} showsVerticalScrollIndicator={false} contentContainerStyle={{ rowGap: 15 }}>
                                <AddShopField user={user} label={'Owner name'} name="ownerName" values={values} errors={errors} touched={touched} setTouched={setTouched} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} setFieldTouched={setFieldTouched} />
                                <AddShopField user={user} label={'Owner email'} name="ownerEmail" values={values} errors={errors} touched={touched} setTouched={setTouched} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} setFieldTouched={setFieldTouched} />
                                <AddShopField user={user} label={'Owner phone number'} name="ownerPhoneNumber" values={values} errors={errors} touched={touched} setTouched={setTouched} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} setFieldTouched={setFieldTouched} />
                                <AddShopField user={user} label={'Owner address'} name="ownerAddress" values={values} errors={errors} touched={touched} setTouched={setTouched} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} setFieldTouched={setFieldTouched} />
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