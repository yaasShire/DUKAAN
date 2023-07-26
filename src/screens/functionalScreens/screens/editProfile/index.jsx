import { View, Text, StatusBar, Image, TouchableWithoutFeedback, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useState } from 'react'
import styles from './style'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntiDesign from 'react-native-vector-icons/AntDesign';
import EditProfileField from '../../../../components/atoms/editProfileField';
import * as ImagePicker from 'expo-image-picker';
import { Formik } from 'formik';
import { editProfileValidation } from '../../../../utils/validationSchema/ediProfileValidation';
import GlobalHeader from '../../../../components/molecules/globalHeader';
import { AntDesign } from '@expo/vector-icons';
import { globalStyles } from '../../../../globalConstants/styles';
import { formValues } from '../../../../utils/utilityFunctions';
import { postData } from '../../../../hooks/usePost'
import profilePlaceholder from '../../../../assets/images/profilePlaceholder.jpg'
import AppLoader from '../../../../components/molecules/AppLoader';
import UploadingAnimation from '../../../../components/molecules/uploadingAnimation';
import AppHeader from '../../../../components/molecules/header';
import { fetchData } from '../../../../hooks/useFetch';
const EditProfile = ({ navigation, route }) => {
    console.log(route.params.userData)
    const [image, setImage] = useState()
    const [prevImage, setPrevImage] = useState(route?.params?.userData?.profile_picture)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [imageName, setImageName] = useState(null)
    const [user, setUser] = useState(route?.params?.userData)
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
        if (response?.result?.status) {
            navigation.navigate('settings')
        }
    }
    useEffect(() => {
        const fetchUserData = async () => {
            const data = await fetchData('seller/user/view', setError, setIsLoading)
            // console.warn(data.data.data[0])
            setUser(data?.data?.data[0])
        }
        fetchUserData()
    }, [])
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <SafeAreaView />
            <StatusBar barStyle={'light-content'} />
            <AppHeader title={"Edit Profile"} navigation={navigation} backButton={true} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.profileCardWrapper}>
                    <View style={styles.imageAndButtonWrapper}>
                        <View style={styles.imageWrapper}>
                            <Image style={styles.image} source={image ? { uri: image } : prevImage ? { uri: `https://sweyn.co.uk/storage/images/avatar/${prevImage}` } : profilePlaceholder} />
                        </View>
                        <View style={styles.cameraIconWrapper}>
                            <AntDesign name='camera' size={22} color={globalStyles.colors.miniPrimary} onPress={pickImage} />
                        </View>
                    </View>
                </View>
                <View style={styles.txtWrapper}>
                    <Formik
                        initialValues={{ name: user?.name, email: user?.email, phone_number: user?.phone_number }}
                        validationSchema={editProfileValidation}
                        onSubmit={(values) => handleSaveProfile(values)}
                    >
                        {
                            ({ errors, handleBlur, handleChange, handleSubmit, touched, setFieldTouched, values }) => (
                                <View style={styles.inputHolder}>
                                    <EditProfileField user={user} label="Name" name="name" values={values.name} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                    <EditProfileField user={user} label="Email" name="email" values={values.email} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                    <EditProfileField user={user} label="Phone Number" name="phone_number" values={values.phone_number} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                    {/* <EditProfileField label="City" name="city" values={values.fullName} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} /> */}
                                    <TouchableOpacity style={styles.saveButton} onPress={() => handleSubmit(values)} >
                                        <Text style={styles.buttonText}>Save</Text>
                                    </TouchableOpacity>

                                </View>
                            )
                        }
                    </Formik>
                </View>
            </ScrollView>
            {
                isLoading && (
                    <UploadingAnimation />
                )
            }
        </ScrollView>
    )
}

export default EditProfile