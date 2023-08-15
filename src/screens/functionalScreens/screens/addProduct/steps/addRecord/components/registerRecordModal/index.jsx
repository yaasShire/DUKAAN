import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { globalStyles, screenPadding } from '../../../../../../../../globalConstants/styles';
import { TextInput } from 'react-native-paper';
import { Formik } from 'formik'
import * as Yup from 'yup';
import { EvilIcons, Feather } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setProductRecord } from '../../../../../../../../redux/products';
const RegisterRecordModal = ({ show = false, setShow = () => { }, setIsEmpty = () => { } }) => {
    const dispatch = useDispatch()
    const [size, setSize] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0)
    const records = useSelector(state => state.productRegistration.productRecord)
    const addRecordValidationSchema = Yup.object().shape({
        size: Yup.string().required('Size is required'),
        quantity: Yup.string().required('Quantity is required'),
        price: Yup.string().required('Price is required'),
    });
    const handleAddRecord = async (values) => {
        dispatch(setProductRecord({
            size: Number(values?.size),
            quantity: Number(values.quantity),
            price: Number(values?.price)
        }))
        // setIsEmpty(false)
        setShow(false)
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={show}
            onRequestClose={() => {
                setShow(!show);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.titleText}>Add Record</Text>
                        <Pressable onPress={() => {
                            setShow(false)
                        }} style={{ width: 30, height: 30, backgroundColor: "red", justifyContent: "center", alignItems: "center", borderRadius: 5 }}>
                            <EvilIcons name="close" size={25} color="#fff" />
                        </Pressable>
                    </View>
                    <Formik
                        validationSchema={addRecordValidationSchema}
                        initialValues={{ size: "", quantity: "", price: "" }}
                        onSubmit={(values) => handleAddRecord(values)}
                    >
                        {
                            ({ values, errors, handleChange, handleBlur, handleSubmit, touched, setFieldTouched }) => (
                                <KeyboardAvoidingView
                                    enabled
                                    style={{ flex: 1, rowGap: 15, width: "100%" }}
                                    keyboardVerticalOffset={15}
                                    behavior={Platform.OS == 'ios' ? 'padding' : null}>
                                    {touched.size && errors.size && <Text style={{ color: "red" }}>{errors.size}</Text>}
                                    <TextInput
                                        placeholder='Size'
                                        label="Size"
                                        onChangeText={handleChange('size')}
                                        onBlur={handleBlur('size')}
                                        value={values.size}
                                        style={styles.input}
                                        keyboardType='number-pad'

                                    />
                                    {touched.quantity && errors.quantity && <Text style={{ color: "red" }}>{errors.quantity}</Text>}
                                    <TextInput style={styles.input}
                                        placeholder='Quantity'
                                        keyboardType='number-pad'
                                        label="Quantity"
                                        onChangeText={handleChange('quantity')}
                                        onBlur={handleBlur('quantity')}
                                        value={values.quantity}
                                    />
                                    {touched.price && errors.price && <Text style={{ color: "red" }}>{errors.price}</Text>}
                                    <TextInput style={styles.input}
                                        placeholder='Price'
                                        keyboardType='number-pad'
                                        label="Price"
                                        onChangeText={handleChange('price')}
                                        onBlur={handleBlur('price')}
                                        value={values.price}
                                    />
                                    <View style={styles.btnWrapper}>
                                        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                                            <Text style={styles.btnText}>Add</Text>
                                        </TouchableOpacity>
                                    </View>
                                </KeyboardAvoidingView>
                            )
                        }
                    </Formik>

                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    titleText: {
        fontSize: 17,
        fontWeight: "500",
        color: globalStyles.colors.tertiary,
        flex: 1,
        textAlign: "center"
    },
    input: {
        width: "100%",
        // backgroundColor: 'gray',
    },
    titleWrapper: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%"
    },
    btnWrapper: {
        alignItems: "center"
    },
    btn: {
        backgroundColor: globalStyles.colors.logoColor,
        width: "100%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    btnText: {
        fontWeight: "500",
        fontSize: 18,
        color: globalStyles.colors.miniPrimary
    },
    modalView: {
        backgroundColor: globalStyles.colors.miniPrimary,
        borderRadius: 20,
        padding: screenPadding,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "90%",
        height: "50%",
        rowGap: 30
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default RegisterRecordModal;