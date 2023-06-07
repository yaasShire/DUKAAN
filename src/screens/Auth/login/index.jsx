import { View, Image, ScrollView, TouchableOpacity, StatusBar, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'
import signUpImage from '../../../assets/signupImage.png'
import TextField from '../../../components/atoms/textInput'
import AuthButton from '../../../components/atoms/button'
import SignUpOptionCard from '../../../components/atoms/signupOptionCard'
import googleImage from '../../../assets/google.png'
import facebookImage from '../../../assets/facebook.png'
import { Formik } from 'formik'
import { loginValidationSchema } from '../../../utils/validationSchema/loginValidationSchema'
import useFetch from '../../../api/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ActivityIndicator } from 'react-native-paper'
import { Dialog, Portal, Text } from 'react-native-paper';
import { formDataGenerator, formValues } from '../../../utils/utilityFunctions'
import { authFetchData } from '../../../hooks/auth'
import { authFormData } from '../../../utils/utilityFunctions'
import SignLoading from '../../../components/molecules/signLoading'
const Login = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [userInfo, setUserInfo] = useState({})

    const handleSignIn = async (values) => {
        setIsLoading(true)
        const payload = formValues(values)
        setTimeout(async () => {
            const data = await authFetchData('seller/user/signin', payload, setError, setIsLoading)
            if (data.access_token) {
                await AsyncStorage.setItem("access_token", data?.access_token)
                await AsyncStorage.setItem("token_type", data?.token_type)
                await AsyncStorage.setItem("user", JSON.stringify(data?.user))
                navigation.replace("bottomTabs")
            }
            if (!data.access_token) {
                setError("Un authorized user.")
                setTimeout(() => {
                    setError(null)
                }, 5000)
            }
        }, 3000)
    }
    return (
        <>
            <StatusBar barStyle={Platform.OS == 'android' ? 'light-content' : 'dark-content'} />
            <SafeAreaView />
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.titlesHolder}>
                    <View >
                        <Text style={styles.title1}>welcome to</Text>
                        <Text style={styles.title2}>MECHANICS</Text>
                    </View>
                    <View>
                        <Text style={styles.description}>Access your account </Text>
                        <Text style={styles.description}> easily by login.</Text>
                    </View>
                </View>
                <View style={styles.imageHolder}>
                    <Image source={signUpImage} style={styles.image} />
                </View>
                {
                    error && (
                        <View style={{ alignItems: 'center', marginVertical: "2%" }}>
                            <Text style={{ color: "red", fontSize: 17 }}>*User not Authorized</Text>
                        </View>
                    )
                }

                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={loginValidationSchema}
                    onSubmit={(values) => handleSignIn(values)}
                >
                    {
                        ({ errors, touched, setFieldTouched, handleBlur, handleChange, handleSubmit, values }) => (
                            <View>
                                <View style={styles.fieldsHolder}>
                                    <TextField title="email" name="email" values={values} errors={errors} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                    <TextField title="Password" name="password" values={values} errors={errors} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                </View>
                                <TouchableOpacity style={styles.forgetPasswordHolder} onPress={() => navigation.navigate("forgetPassword")}>
                                    <Text style={styles.forgetPasswordText}>Forget password?</Text>
                                </TouchableOpacity>
                                <View style={styles.buttonHolder}>
                                    <AuthButton title='Login' handleSubmit={() => handleSubmit(values)} />
                                </View>
                                <View style={styles.signupLinkWrapper}>
                                    <View style={styles.newAccount} >
                                        <Text style={styles.accountCreation} >Don't have account?</Text>
                                        <TouchableOpacity onPress={() => navigation.navigate("signup")}>
                                            <Text style={styles.signUpLink}>Sign up</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )
                    }

                </Formik>

                {
                    isLoading && (
                        <SignLoading />
                    )
                }

            </ScrollView>

        </>
    )
}

export default Login