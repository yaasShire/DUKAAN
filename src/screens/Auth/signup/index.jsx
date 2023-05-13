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
import useFetch from '../../../api/signup'
import { openInbox } from 'react-native-email-link'
const SignUp = ({ navigation }) => {
    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)
    // setTimeout(() => {
    //     setIsLoading(false)
    // }, 2000)
    const handleSignUp = async (values) => {
        setData(null)
        setIsLoading(true)
        showDialog()

        // !isLoading && navigation.navigate('bottomTabs')
        const { name, phone_number, email, password } = values
        const userData = new FormData()
        userData.append("name", name)
        userData.append("email", email)
        userData.append("phone_number", phone_number)
        userData.append("password", password)
        const result = await useFetch(userData, setError, setIsLoading, 'seller/user/signup')
        setData(result?.status)
        console.warn(result)
    }
    return (
        <>
            {
                visible && (
                    <Portal>
                        <Dialog visible={visible} onDismiss={hideDialog} style={{ height: 250 }}>
                            <View style={{ padding: "3%" }}>
                                <Dialog.Title style={{ textAlign: "center", fontSize: 20, fontWeight: "500" }}>{data ? data : error}</Dialog.Title>
                                <Dialog.Content>
                                    {
                                        isLoading && <ActivityIndicator size="large" color="#00ff00" />
                                    }
                                </Dialog.Content>
                                {
                                    !isLoading && (
                                        <View>
                                            <Button icon="email" mode="contained" onPress={() => openInbox({ message: "Whatcha wanna do?", cancelLabel: "Go back!" })} >Check your mail to verify</Button>

                                        </View>

                                    )
                                }
                                <View>

                                </View>
                            </View>
                        </Dialog>
                    </Portal>
                )
            }
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
                    initialValues={{ name: "", phone_number: "", email: "", city: "", password: "", confirmPassword: "" }}
                    onSubmit={handleSignUp}
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


        </>
    )
}

export default SignUp