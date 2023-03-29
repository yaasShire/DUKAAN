import { View, Text, StatusBar, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import GlobalHeader from '../../../../components/molecules/globalHeader'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik';
import { changePasswordValidation } from '../../../../utils/validationSchema/changePasswordValidation'
import ChanePasswordField from '../../../../components/atoms/changePasswordField';
const ChangePassword = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <GlobalHeader label={"Change Password"} navigation={navigation} />
            <ScrollView style={styles.fieldsHolder}>
                <Formik
                    validationSchema={changePasswordValidation}
                    initialValues={{ currentPassword: "", newPassword: "", confirmPassword: "" }}
                >
                    {
                        ({ values, errors, handleBlur, handleChange, handleSubmit, touched, setFieldTouched }) => (
                            <>
                                <ChanePasswordField label={"Current password"} icon='lock-closed' name="currentPassword"
                                    errors={errors} values={values.currentPassword} touched={touched} setFieldTouched={setFieldTouched}
                                    handleBlur={handleBlur} handleChange={handleChange} />
                                <ChanePasswordField label={"New password"} icon='key' name="newPassword"
                                    errors={errors} values={values.newPassword} touched={touched} setFieldTouched={setFieldTouched}
                                    handleBlur={handleBlur} handleChange={handleChange} />
                                <ChanePasswordField label={"Re-type password"} icon='key' name="confirmPassword"
                                    errors={errors} values={values.confirmPassword} touched={touched} setFieldTouched={setFieldTouched}
                                    handleBlur={handleBlur} handleChange={handleChange} />


                                <View style={styles.buttonsHolder}>
                                    <TouchableOpacity style={styles.updateButton} onPress={handleSubmit}>
                                        <Text style={styles.updateButtonText}>Update Password</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cancelButton} onPress={handleSubmit}>
                                        <Text style={styles.cancelButtonText}>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.forgotPasswordHolder}>
                                        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                                    </TouchableOpacity>
                                </View>

                            </>
                        )
                    }
                </Formik>

            </ScrollView>
        </SafeAreaView>
    )
}

export default ChangePassword