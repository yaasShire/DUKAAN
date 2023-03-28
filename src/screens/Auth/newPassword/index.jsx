import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import TextFieldC from '../../../components/atoms/textInput'
import AuthButton from '../../../components/atoms/button'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'
import newPasswordImage from '../../../assets/signupImage.png'
import { Formik } from 'formik'
import { newPasswordValidation } from '../../../utils/validationSchema/newPasswordValidation'
const NewPassword = ({ navigation }) => {
    handleNewPasswordSubmit = () => {
        navigation.navigate('success')
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.textHolder}>
                <Text style={styles.title}>New Password</Text>
            </View>
            <View style={styles.imageHolder}>
                <Image source={newPasswordImage} style={styles.image} />
            </View>
            <Formik
                initialValues={{ newPassword: "", confirmNewPassword: "" }}
                validationSchema={newPasswordValidation}
                onSubmit={handleNewPasswordSubmit}
            >
                {
                    ({ values, errors, handleBlur, handleChange, handleSubmit, touched, setFieldTouched }) => (
                        <>
                            <View style={styles.textInputHolder} >
                                <TextFieldC title="New password" name="newPassword" values={values} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} handleSubmit={handleSubmit} />
                                <TextFieldC title="Confirm password" name="confirmNewPassword" values={values} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} handleSubmit={handleSubmit} />
                            </View>
                            <View style={styles.buttonHolder}>
                                <AuthButton title="Change Password" handleSubmit={handleSubmit} />
                            </View>
                        </>

                    )
                }
            </Formik>
        </ScrollView>
    )
}

export default NewPassword