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
import AppHeader from '../../../../components/molecules/appHeader';
import { globalStyles } from '../../../../globalConstants/styles';
const EditProfile = ({ navigation }) => {
    const [image, setImage] = useState(null)
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }

    };
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <View>
                <AppHeader title={"Edit Profile"} navigation={navigation} screen="Edit Profile" />
            </View>
            <View style={styles.imageAndButtonWrapper}>
                <View style={styles.imageWrapper}>
                    {image ? <Image source={{ uri: image }} style={styles.image} /> : <Image source={Profile} style={styles.image} />}
                </View>
                <View style={styles.cameraIconWrapper}>
                    <AntDesign name='camera' size={22} color={globalStyles.colors.white} onPress={pickImage} />
                </View>
            </View>
            <ScrollView style={{ flex: 1, }}>
                <Formik
                    initialValues={{ fullName: "", email: "", phoneNumber: "", city: "" }}
                    validationSchema={editProfileValidation}
                >
                    {
                        ({ errors, handleBlur, handleChange, handleSubmit, touched, setFieldTouched, values }) => (
                            <View style={styles.inputHolder}>
                                <EditProfileField label="Full Name" name="fullName" values={values.fullName} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                <EditProfileField label="Email" name="email" values={values.fullName} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                <EditProfileField label="Phone Number" name="phoneNumber" values={values.fullName} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                <EditProfileField label="City" name="city" values={values.fullName} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                            </View>
                        )
                    }
                </Formik>

            </ScrollView>
        </SafeAreaView>
    )
}

export default EditProfile