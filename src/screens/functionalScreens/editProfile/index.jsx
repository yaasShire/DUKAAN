import { View, Text, StatusBar, Image, TouchableWithoutFeedback, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import styles from './style'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Profile from '../../../assets/person2.jpg'
import EditProfileField from '../../../components/atoms/editProfileField';
import * as ImagePicker from 'expo-image-picker';
import { Formik } from 'formik';
import { editProfileValidation } from '../../../utils/validationSchema/ediProfileValidation';
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
            <View style={styles.topHeader}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <MaterialIcons name='keyboard-backspace' size={30} color="#c4cadb" />
                </TouchableWithoutFeedback>
                <View style={styles.imageTextHolder}>
                    <Text style={styles.editText}>Edit profile</Text>
                    <View style={styles.imageCameraIconHolder}>
                        {image ? <Image source={{ uri: image }} style={styles.image} /> : <Image source={Profile} style={styles.image} />}
                        <TouchableOpacity style={styles.cameraButton} onPress={pickImage}>
                            <View style={styles.cameraIconHolder}>
                                <MaterialIcons name='camera-alt' size={28} color="white" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("settings")}>
                    <Text style={styles.saveText}>SAVE</Text>
                </TouchableWithoutFeedback>
            </View>
            <ScrollView style={{ flex: 1 }}>
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