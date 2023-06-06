import { View, Text, StatusBar, Image, TouchableWithoutFeedback, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import styles from './style'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntiDesign from 'react-native-vector-icons/AntDesign';
import Profile from '../../../../assets/person2.jpg'
import EditProfileField from '../../../../components/atoms/editProfileField';
import * as ImagePicker from 'expo-image-picker';
import { Formik } from 'formik';
import { editProfileValidation } from '../../../../utils/validationSchema/ediProfileValidation';
import GlobalHeader from '../../../../components/molecules/globalHeader';
import { AntDesign } from '@expo/vector-icons';
import AppHeader from '../../../../components/molecules/header';
import { globalStyles } from '../../../../globalConstants/styles';
import { formValues } from '../../../../utils/utilityFunctions';
import { postData } from '../../../../hooks/usePost'
import AppLoader from '../../../../components/molecules/AppLoader';
import UploadingAnimation from '../../../../components/molecules/uploadingAnimation';
const EditProfile = ({ navigation, route }) => {
    const [image, setImage] = useState(route.params.image)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [imageName, setImageName] = useState(null)
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri)
            const imagePath = result.assets[0].uri.split('/');
            const name = imagePath[imagePath.length - 1];
            setImageName(name);
        }
    };
    const handleSaveProfile = async (values) => {
        setIsLoading(true)
        profileData = formValues(values, image)
        const response = await postData('seller/user/update', profileData, setError, setIsLoading)
        if (response.result.status) {
            navigation.navigate('settings')
        }
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <SafeAreaView />
            <StatusBar barStyle={'light-content'} />
            <AppHeader title={"Edit Profile"} navigation={navigation} backButton={true} />
            <View style={styles.profileCardWrapper}>
                <View style={styles.imageAndButtonWrapper}>
                    <View style={styles.imageWrapper}>
                        <Image style={styles.image} source={image ? { uri: image } : Profile} />
                    </View>
                    <View style={styles.cameraIconWrapper}>
                        <AntDesign name='camera' size={22} color={globalStyles.colors.miniPrimary} onPress={pickImage} />
                    </View>
                </View>
            </View>
            <View >
                <Formik
                    initialValues={{ fullName: "", email: "", phoneNumber: "", city: "" }}
                    validationSchema={editProfileValidation}
                    onSubmit={(values) => handleSaveProfile(values)}
                >
                    {
                        ({ errors, handleBlur, handleChange, handleSubmit, touched, setFieldTouched, values }) => (
                            <ScrollView scrollEnabled={false} contentContainerStyle={styles.inputHolder}>
                                <EditProfileField label="Name" name="fullName" values={values.fullName} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                <EditProfileField label="Email" name="email" values={values.fullName} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                <EditProfileField label="Phone Number" name="phoneNumber" values={values.fullName} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                {/* <EditProfileField label="City" name="city" values={values.fullName} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} /> */}
                                <TouchableOpacity style={styles.saveButton} onPress={() => handleSubmit(values)} >
                                    <Text style={styles.buttonText}>Save</Text>
                                </TouchableOpacity>

                            </ScrollView>
                        )
                    }
                </Formik>
            </View>
            {
                isLoading && (
                    <UploadingAnimation />
                )
            }
        </ScrollView>
    )
}

export default EditProfile