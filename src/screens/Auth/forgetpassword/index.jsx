import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import TextFieldC from '../../../components/atoms/textInput'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'
import newPasswordImage from '../../../assets/signupImage.png'
import AuthButton from '../../../components/atoms/button'
import { forgetPasswordValidation } from '../../../utils/validationSchema/forgetPasswordValidation'
import { Formik } from 'formik'
import { authFetchData } from '../../../hooks/auth'
import { authFormData } from '../../../utils/utilityFunctions'
import VerificationMessage from '../signup/message'
const ForgetPassword = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [verificationMessage, setVerificationMessage] = useState(false)
    const handleForgetPassword = async (values) => {
        setIsLoading(true)
        const payload = authFormData(values)
        // console.log(payload)
        // setTimeout(async () => {
        const data = await authFetchData('seller/user/resetpassword', payload, setError, setIsLoading)
        console.log(data)
        if (data.message) {
            setVerificationMessage(true)
        }
        // }, 3000)
    }
    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.textHolder}>
                    <Text style={styles.title}>Forget Password</Text>
                </View>
                <View style={styles.imageHolder}>
                    <Image source={newPasswordImage} style={styles.image} />
                </View>
                <Formik
                    initialValues={{ name: "", email: "" }}
                    validationSchema={forgetPasswordValidation}
                    onSubmit={(values) => handleForgetPassword(values)}
                >
                    {
                        ({ values, errors, handleBlur, handleChange, handleSubmit, touched, setFieldTouched }) => (
                            <>
                                <View style={styles.textInputHolder} >
                                    <TextFieldC title="name" name="name" errors={errors} values={values} handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} touched={touched} setFieldTouched={setFieldTouched} />
                                    <TextFieldC title="email" name="email" errors={errors} values={values} handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} touched={touched} setFieldTouched={setFieldTouched} />
                                </View>
                                <View style={styles.buttonHolder}>
                                    <AuthButton title="Send" handleSubmit={(values) => handleSubmit(values)} errors={errors} />
                                </View>
                            </>
                        )
                    }
                </Formik>
            </ScrollView>
            {
                verificationMessage && (
                    <VerificationMessage navigation={navigation} screen='login' description='reset password link is sent your email, check you email' />
                )
            }
        </>
    )
}

export default ForgetPassword