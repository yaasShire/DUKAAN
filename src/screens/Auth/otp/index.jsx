import { View, Text, StatusBar, Image, ScrollView } from 'react-native'
import React, { useRef } from 'react'
import OtpInput from '../../../components/atoms/otpInput'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'
import otpImage from '../../../assets/otp.png'
import AuthButton from '../../../components/atoms/button'
import { Formik } from 'formik'
import { otpVerification } from '../../../utils/validationSchema/otpValidation'
const OTP = ({ navigation }) => {
    const input1 = useRef()
    const input2 = useRef()
    const input3 = useRef()
    const input4 = useRef()
    const handleOTP = () => {
        navigation.navigate('newPassword')
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <ScrollView style={styles.mainHolder}>
                <View style={styles.textHolder}>
                    <Text style={styles.otpText}>OTP CODE</Text>
                </View>
                <View style={styles.imageHolder}>
                    <Image source={otpImage} style={styles.otpImage} />
                </View>
                <Formik
                    initialValues={{ input1: "", input2: "", input3: "", input4: "" }}
                    validationSchema={otpVerification}
                    onSubmit={handleOTP}
                >
                    {
                        ({ values, errors, handleChange, handleBlur, handleSubmit, touched, setFieldTouched }) => (
                            <>
                                <View style={styles.otpFieldsHolder}>
                                    <OtpInput input={input1} name="input1" nextInput={input2} input1={input1} inputFocus={true} values={values} errors={errors} handleChange={handleChange} handleBlur={handleBlur} touched={touched} setFieldTouched={setFieldTouched} />
                                    <OtpInput input={input2} name="input2" nextInput={input3} values={values} errors={errors} handleChange={handleChange} handleBlur={handleBlur} touched={touched} setFieldTouched={setFieldTouched} />
                                    <OtpInput input={input3} name="input3" nextInput={input4} values={values} errors={errors} handleChange={handleChange} handleBlur={handleBlur} touched={touched} setFieldTouched={setFieldTouched} />
                                    <OtpInput input={input4} name="input4" nextInput={input4} values={values} errors={errors} handleChange={handleChange} handleBlur={handleBlur} touched={touched} setFieldTouched={setFieldTouched} />
                                </View>
                                <View style={styles.buttonHolder}>
                                    <AuthButton title="Verify" handleSubmit={handleSubmit} />

                                </View>
                            </>
                        )
                    }
                </Formik>
            </ScrollView>
        </SafeAreaView>
    )
}

export default OTP;