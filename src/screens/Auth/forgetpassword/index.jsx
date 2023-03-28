import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import TextFieldC from '../../../components/atoms/textInput'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'
import newPasswordImage from '../../../assets/signupImage.png'
import AuthButton from '../../../components/atoms/button'
import { forgetPasswordValidation } from '../../../utils/validationSchema/forgetPasswordValidation'
import { Formik } from 'formik'
const ForgetPassword = ({ navigation }) => {
    const handleForgetPassword = () => {
        navigation.navigate('otp')
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.textHolder}>
                <Text style={styles.title}>Forget Password</Text>
            </View>
            <View style={styles.imageHolder}>
                <Image source={newPasswordImage} style={styles.image} />
            </View>
            <Formik
                initialValues={{ phoneNumber: "" }}
                validationSchema={forgetPasswordValidation}
                onSubmit={handleForgetPassword}
            >
                {
                    ({ values, errors, handleBlur, handleChange, handleSubmit, touched, setFieldTouched }) => (
                        <>
                            <View style={styles.textInputHolder} >
                                <TextFieldC title="Enter your number" name="phoneNumber" errors={errors} values={values} handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} touched={touched} setFieldTouched={setFieldTouched} />
                            </View>
                            <View style={styles.buttonHolder}>
                                <AuthButton title="Send" handleSubmit={handleSubmit} errors={errors} />
                            </View>
                        </>
                    )
                }
            </Formik>
        </ScrollView>
    )
}

export default ForgetPassword