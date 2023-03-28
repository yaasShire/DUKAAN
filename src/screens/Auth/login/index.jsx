import { View, Text, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
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
const Login = ({ navigation }) => {
    const handleSignIn = () => {
        navigation.navigate('bottomTabs')
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
                        <Text style={styles.description}>Welcome back you've </Text>
                        <Text style={styles.description}> been missed.</Text>
                    </View>
                </View>
                <View style={styles.imageHolder}>
                    <Image source={signUpImage} style={styles.image} />
                </View>
                <Formik
                    initialValues={{ phoneNumber: "", password: "" }}
                    validationSchema={loginValidationSchema}
                    onSubmit={handleSignIn}
                >
                    {
                        ({ errors, touched, setFieldTouched, handleBlur, handleChange, handleSubmit, values }) => (
                            <>
                                <View style={styles.fieldsHolder}>
                                    <TextField title="Phone Number" name="phoneNumber" values={values} errors={errors} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                    <TextField title="Password" name="password" values={values} errors={errors} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                </View>
                                <View>
                                    <TouchableOpacity style={styles.forgetPasswordHolder} onPress={() => navigation.navigate("forgetPassword")}>
                                        <Text style={styles.forgetPasswordText}>Forget password?</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.buttonHolder}>
                                    <AuthButton title='Login' handleSubmit={handleSubmit} />
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