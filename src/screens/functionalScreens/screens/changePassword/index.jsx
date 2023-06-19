import { View, Text, StatusBar, TextInput, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Button, Modal, Portal } from 'react-native-paper'
import styles from './style'
import GlobalHeader from '../../../../components/molecules/globalHeader'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik';
import { changePasswordValidation } from '../../../../utils/validationSchema/changePasswordValidation'
import ChanePasswordField from '../../../../components/atoms/changePasswordField';
import AppHeader from '../../../../components/molecules/header';
import { postData } from '../../../../hooks/usePost';
import { formdataProducer } from '../../../../utils/utilityFunctions';
import ResetButton from './components/button';
import { globalStyles } from '../../../../globalConstants/styles';
import AppLoader from '../../../../components/molecules/AppLoader';
import MessageModal from './components/messageModal'
const ChangePassword = ({ navigation }) => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    const [messageText, setMessageText] = useState("")
    const changeUserPassword = async (values) => {
        setIsLoading(true)
        const passwordData = formdataProducer(values)
        const response = await postData('seller/user/changepassword', passwordData, setError, setIsLoading)
        if (response.result.status == 1) {
            setMessageText(response.result.message)
            setShowMessage(true)
        }
        if (response.result.status == -1) {
            setError(response.result.message)
            setTimeout(() => {
                setError(null)
            }, 3000)
        }
        const hideModal = () => setShowMessage(false);
    }
    const containerStyle = { padding: 20, };
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <StatusBar barStyle={'light-content'} />
            <AppHeader title={"Change Password"} navigation={navigation} backButton={true} />
            <ScrollView style={styles.fieldsHolder} contentContainerStyle={styles.scrollWrapper}>
                {
                    error && (
                        <Text style={styles.errorText}>{error}</Text>
                    )
                }
                <Formik
                    validationSchema={changePasswordValidation}
                    initialValues={{ old_password: "", new_password: "" }}
                    onSubmit={(values) => {
                        changeUserPassword(values)
                    }}
                >
                    {
                        ({ values, errors, handleBlur, handleChange, handleSubmit, touched, setFieldTouched }) => (
                            <>
                                <ChanePasswordField label={"Current password"} icon='lock-closed' name="old_password"
                                    errors={errors} values={values.old_password} touched={touched} setFieldTouched={setFieldTouched}
                                    handleBlur={handleBlur} handleChange={handleChange} />
                                <ChanePasswordField label={"New password"} icon='key' name="new_password"
                                    errors={errors} values={values.new_password} touched={touched} setFieldTouched={setFieldTouched}
                                    handleBlur={handleBlur} handleChange={handleChange} />
                                <View style={styles.buttonsHolder}>
                                    <ResetButton bgColor={globalStyles.colors.logoColor} handleSubmit={(values) => handleSubmit(values)} title={"Update Password"} />
                                    <ResetButton bgColor={globalStyles.colors.primaryGray} title={"Cancel"} navigation={navigation} />

                                    <TouchableOpacity style={styles.forgotPasswordHolder} onPress={() => navigation.replace("forgetPassword")}>
                                        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                                    </TouchableOpacity>
                                </View>

                            </>
                        )
                    }
                </Formik>

            </ScrollView>
            {
                isLoading && (
                    <AppLoader />
                )
            }
            <MessageModal navigation={navigation} setShowMessage={setShowMessage} showMessage={showMessage} message={messageText} />

        </View>
    )
}

export default ChangePassword