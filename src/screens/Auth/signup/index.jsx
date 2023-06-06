import { View, Image, ScrollView, TouchableOpacity, StatusBar, ActivityIndicator, Linking } from 'react-native'
import { Button, Dialog, Portal, Provider, Text } from 'react-native-paper';
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'
import TextField from '../../../components/atoms/otpInput'
import Login from '../login'
import AuthButton from '../../../components/atoms/button'
import SignUpOptionCard from '../../../components/atoms/signupOptionCard'
import googleImage from '../../../assets/google.png'
import facebookImage from '../../../assets/facebook.png'
import bannerImage from '../../../assets/signup.png'
import { signupValidationSchema } from '../../../utils/validationSchema/signUpValidationSchema'
import { Formik } from 'formik'
import TextFieldC from '../../../components/atoms/textInput'
import useFetch from '../../../api/auth'
import { openInbox } from 'react-native-email-link'
import Feather from 'react-native-vector-icons/Feather';
import { formDataGenerator, formValues } from '../../../utils/utilityFunctions';
import { fetchData } from '../../../hooks/useFetch';
import SignLoading from '../../../components/molecules/signLoading'
import { authFetchData } from '../../../hooks/auth';
import { authFormData } from '../../../utils/utilityFunctions';
import VerificationMessage from './message';
const SignUp = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [verificationMessage, setVerificationMessage] = useState(null)
    setTimeout(() => {
        setIsLoading(false)
    }, 2000)
    const handleSignUp = async (values) => {
        setIsLoading(true)
        const payload = formValues(values)
        // setTimeout(async () => {
        const data = await authFetchData('seller/user/signup', payload, setError, setIsLoading)
        console.log(data)
        if (data?.message) {
            setVerificationMessage(data?.message)
        }
        if (data?.email) {
            setError(data?.email[0])
            // setTimeout(() => {
            setError(null)
            // }, 100)
        }
        // }, 3000)
    }
    return (
        <>
            <SafeAreaView />
            <StatusBar barStyle="light-content" />
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.titlesHolder}>
                    <View style={styles.uperText} >
                        <Text style={styles.title1}>welcome to</Text>
                        <Text style={styles.title2}>MECHANICS</Text>
                    </View>
                    <View>
                        <Text style={styles.description}>Welcome back you've </Text>
                        <Text style={styles.description}> been missed.</Text>
                    </View>
                </View>
                <View style={styles.imageHolder}>
                    <Image source={bannerImage} style={styles.image} />
                </View>
                {
                    error && (
                        <View style={{ alignItems: 'center', marginVertical: "2%" }}>
                            <Text style={{ color: "red", fontSize: 17 }}>{error}</Text>
                        </View>
                    )
                }
                <Formik
                    validationSchema={signupValidationSchema}
                    initialValues={{ name: "", phone_number: "", email: "", city: "", password: "", confirmPassword: "" }}
                    onSubmit={(values) => handleSignUp(values)}
                >
                    {
                        ({ values, errors, handleChange, handleBlur, touched, handleSubmit, isValid, setFieldTouched }) => (
                            <>
                                <View style={styles.fieldsHolder}>
                                    <TextFieldC title="Full Name" name="name" setFieldTouched={setFieldTouched} values={values.fullName} handleChange={handleChange} handleBlur={handleBlur} isValid={isValid} handleSubmit={handleSubmit} touched={touched} errors={errors} />
                                    <TextFieldC title="Phone Number" name="phone_number" setFieldTouched={setFieldTouched} values={values.phoneNumber} handleChange={handleChange} handleBlur={handleBlur} isValid={isValid} handleSubmit={handleSubmit} touched={touched} errors={errors} />
                                    <TextFieldC title="email" name="email" setFieldTouched={setFieldTouched} values={values.email} handleChange={handleChange} handleBlur={handleBlur} isValid={isValid} handleSubmit={handleSubmit} touched={touched} errors={errors} />
                                    <TextFieldC title="City" name="city" setFieldTouched={setFieldTouched} values={values.phoneNumber} handleChange={handleChange} handleBlur={handleBlur} isValid={isValid} handleSubmit={handleSubmit} touched={touched} errors={errors} />
                                    <TextFieldC title="Password" name="password" setFieldTouched={setFieldTouched} values={values.password} handleChange={handleChange} handleBlur={handleBlur} isValid={isValid} handleSubmit={handleSubmit} touched={touched} errors={errors} />
                                    <TextFieldC title="Confirm Password" name="confirmPassword" setFieldTouched={setFieldTouched} values={values.confirmPassword} handleChange={handleChange} handleBlur={handleBlur} isValid={isValid} handleSubmit={handleSubmit} touched={touched} errors={errors} />
                                    {/* <TextFieldC title="Choose Location" name="chooseLocation" setFieldTouched={setFieldTouched} values={values.confirmPassword} handleChange={handleChange} handleBlur={handleBlur} isValid={isValid} handleSubmit={handleSubmit} touched={touched} errors={errors} /> */}
                                </View>
                                <View style={styles.buttonHolder}>
                                    <AuthButton isLoading={isLoading} title='Sign up' handleSubmit={() => handleSubmit(values)} errors={errors} />
                                </View>
                            </>

                        )
                    }
                </Formik>
                <View style={styles.segmentHolder}>
                    <View style={styles.segment} />
                    <Text style={styles.optionText}>Or Sign up with</Text>
                    <View style={styles.segment} />
                </View>
                <View style={styles.signupOptionCardsHolder}>
                    <SignUpOptionCard image={googleImage} />
                    <SignUpOptionCard image={facebookImage} />
                </View>
                <View style={styles.loginHolder}>
                    <Text style={styles.textLogin1}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('login')}>
                        <Text style={styles.textLogin2}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {
                isLoading && (
                    <SignLoading />
                )
            }
            {
                verificationMessage && (
                    <VerificationMessage navigation={navigation} screen='login' description='We have sent verification email, verify by you email and then log in.' />
                )
            }

        </>
    )
}

export default SignUp