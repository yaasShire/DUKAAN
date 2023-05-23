import { View, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
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
import { formDataGenerator } from '../../../utils/utilityFunctions'
const Login = ({ navigation }) => {
    const [visible, setVisible] = React.useState(false);

    const hideDialog = () => setVisible(false);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [data, setData] = useState({})
    const [showError, setShowError] = useState(false)
    const handleSignIn = async (values) => {
        setIsLoading(true)
        setError("")
        const data = formDataGenerator(values)
        const result = await useFetch(data, setError, setIsLoading, 'seller/user/signin')
        console.warn(result);
        if (result) {
            // await AsyncStorage.setItem("user", result)
            // navigation.navigate('bottomTabs')
        }
        else if (result?.message) {
            setShowError(true)
            setError(result.message)
        }
        setTimeout(() => {
            setError("")
        }, 2000)
    }
   
    return (
        <>
            <StatusBar barStyle="white-content" />
            <ScrollView style={styles.container}>
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
                    isLoading && (
                        <View>
                            <Portal >
                                <Dialog style={{ height: 150, justifyContent: "center" }} visible={isLoading} onDismiss={hideDialog}>
                                    <Dialog.Title style={styles.title}>Loading...</Dialog.Title>
                                    <ActivityIndicator size={"large"} color='green' />
                                </Dialog>
                            </Portal>
                        </View>
                    )
                }
                {showError && (
                    <View style={styles.messageTextHolder}>
                        <View style={styles.subMessageWrapper}>
                            <Text style={styles.messageText}>{error}</Text>
                        </View>
                    </View>
                )}
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={loginValidationSchema}
                    onSubmit={(values) => handleSignIn(values)}
                >
                    {
                        ({ errors, touched, setFieldTouched, handleBlur, handleChange, handleSubmit, values }) => (
                            <>
                                <View style={styles.fieldsHolder}>
                                    {/* <TextField title="Phone Number" name="phoneNumber" values={values} errors={errors} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} /> */}
                                    <TextField title="email" name="email" values={values} errors={errors} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                    <TextField title="Password" name="password" values={values} errors={errors} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                </View>
                                <View>
                                    <TouchableOpacity style={styles.forgetPasswordHolder} onPress={() => navigation.navigate("forgetPassword")}>
                                        <Text style={styles.forgetPasswordText}>Forget password?</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.buttonHolder}>
                                    <AuthButton isLoading={isLoading} title='Login' handleSubmit={() => handleSubmit(values)} />
                                </View>
                                <View style={styles.signupLinkWrapper}>
                                    <TouchableOpacity style={styles.newAccount} onPress={() => navigation.navigate("signup")}>
                                        <Text style={styles.accountCreation}>Don't have account?</Text>
                                        <Text style={styles.signUpLink}>Sign up</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )
                    }

                </Formik>



            </ScrollView>
        </>
    )
}

export default Login