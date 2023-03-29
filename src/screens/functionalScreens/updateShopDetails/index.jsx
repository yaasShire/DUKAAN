import { View, Text, ScrollView, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import ImageSlider from '../../../components/molecules/imageSlider'
import AntiDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import UpdateShopField from '../../../components/atoms/updateShopField';
import { Formik } from 'formik';
import { editProfileValidation } from '../../../utils/validationSchema/ediProfileValidation';
import { updateShopDataValidation } from '../../../utils/validationSchema/updateShopDataValidation';
import updateImage from '../../../assets/updateImages.png'
const UpdateShopDetails = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* <ImageSlider /> */}
            {/* <UpdateShopField /> */}
            <View style={styles.topHeader}>
                <View style={styles.topActionsHolder}>
                    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                        <MaterialIcons name='keyboard-backspace' size={30} color="#c4cadb" />
                    </TouchableWithoutFeedback>
                    <View>
                        <Text style={styles.updateText}>Update Shop</Text>
                    </View>
                    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                        <Text style={styles.saveText}>Save</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <View style={styles.updateImageHolder}>
                <TouchableOpacity onPress={() => navigation.navigate('updateShopImages')} >
                    <View style={styles.updateShopImagesButton}>
                        <Text style={styles.updaImagesText}>Update shop images</Text>
                    </View>
                </TouchableOpacity>
                <Image source={updateImage} style={styles.updateImage} />
            </View>
            <View style={{ alignItems: "center", marginTop: "5%" }}>
                <Text style={{ fontWeight: "500", fontSize: 19 }}>Update Shop Details</Text>
            </View>
            <ScrollView style={styles.fieldsHolder}>
                <Formik
                    initialValues={{ fullName: "", email: "", phoneNumber: "", city: "" }}
                    validationSchema={editProfileValidation}
                >
                    {
                        ({ errors, handleBlur, handleChange, handleSubmit, touched, setFieldTouched, values }) => (
                            <View style={styles.inputHolder}>
                                <UpdateShopField label="Owner name" name="fullName" values={values.fullName} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                <UpdateShopField label="Owner email" name="email" values={values.fullName} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                <UpdateShopField label="Owner phone number" name="phoneNumber" values={values.fullName} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                <UpdateShopField label="Owner address" name="city" values={values.fullName} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                <UpdateShopField label="Owner address" name="city" values={values.fullName} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                <UpdateShopField label="Shop name" name="city" values={values.fullName} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                <UpdateShopField label="Shop email" name="city" values={values.fullName} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                <UpdateShopField label="Shop address" name="city" values={values.fullName} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                <UpdateShopField label="Country" name="city" values={values.fullName} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                <UpdateShopField label="State" name="city" values={values.fullName} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                <UpdateShopField label="City" name="city" values={values.fullName} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                <UpdateShopField label="Nearest LAN Mark" name="city" values={values.fullName} errors={errors} handleBlur={handleBlur} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                            </View>
                        )
                    }
                </Formik>

            </ScrollView>

        </View>
    )
}

export default UpdateShopDetails