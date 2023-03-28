import { View, Text, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
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
const SignUp = ({ navigation }) => {
    const handleSignUp = () => {
        navigation.navigate('bottomTabs')
    }
    return (
        <>
            <StatusBar barStyle="dark-white" />
            <ScrollView style={styles.container}>
                <View style={styles.titlesHolder}>
                    <View >
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
                <Formik
                    validationSchema={signupValidationSchema}
                    initialValues={{ fullName: "", phoneNumber: "", email: "", city: "", password: "", confirmPassword: "" }}
                    onSubmit={handleSignUp}
                >
                    {
                        ({ values, errors, handleChange, handleBlur, touched, handleSubmit, isValid, setFieldTouched }) => (
                            <>
                                <View style={styles.fieldsHolder}>
                                    <TextFieldC title="Full Name" name="fullName" setFieldTouched={setFieldTouched} values={values.fullName} handleChange={handleChange} handleBlur={handleBlur} isValid={isValid} handleSubmit={handleSubmit} touched={touched} errors={errors} />
                                    <TextFieldC title="Phone Number" name="phoneNumber" setFieldTouched={setFieldTouched} values={values.phoneNumber} handleChange={handleChange} handleBlur={handleBlur} isValid={isValid} handleSubmit={handleSubmit} touched={touched} errors={errors} />
                                    <TextFieldC title="email" name="email" setFieldTouched={setFieldTouched} values={values.email} handleChange={handleChange} handleBlur={handleBlur} isValid={isValid} handleSubmit={handleSubmit} touched={touched} errors={errors} />
                                    <TextFieldC title="City" name="city" setFieldTouched={setFieldTouched} values={values.phoneNumber} handleChange={handleChange} handleBlur={handleBlur} isValid={isValid} handleSubmit={handleSubmit} touched={touched} errors={errors} />
                                    <TextFieldC title="Password" name="password" setFieldTouched={setFieldTouched} values={values.password} handleChange={handleChange} handleBlur={handleBlur} isValid={isValid} handleSubmit={handleSubmit} touched={touched} errors={errors} />
                                    <TextFieldC title="Confirm Password" name="confirmPassword" setFieldTouched={setFieldTouched} values={values.confirmPassword} handleChange={handleChange} handleBlur={handleBlur} isValid={isValid} handleSubmit={handleSubmit} touched={touched} errors={errors} />
                                    {/* <TextFieldC title="Choose Location" name="chooseLocation" setFieldTouched={setFieldTouched} values={values.confirmPassword} handleChange={handleChange} handleBlur={handleBlur} isValid={isValid} handleSubmit={handleSubmit} touched={touched} errors={errors} /> */}
                                </View>
                                <View style={styles.buttonHolder}>
                                    <AuthButton title='Sign up' handleSubmit={handleSubmit} errors={errors} />
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
        </>
    )
}

export default SignUp