import { View, Text, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { Button } from 'react-native-paper'
import { postData } from '../../../../../../hooks/usePost'
const UpdateProductModalField = ({ keyboardType = "default", showModal = false, setShowModal = () => { }, label = "", value = "", productId = "", fieldName = "", setShowResultModal = () => { }, setIsLoading = () => { }, setError = () => { }, fetchTargetProduct = () => { } }) => {
    const [fieldValue, setFieldValue] = useState(value)
    const updateField = async () => {
        setIsLoading(true)
        const productData = new FormData()
        productData.append('UPID', productId)
        productData.append(fieldName, fieldValue)
        const { result } = await postData('seller/products/update', productData, setError, setIsLoading)
        if (result?.status == 'changed') {
            fetchTargetProduct()
            setShowResultModal(true)
            setTimeout(() => {
                setShowResultModal(false)
            }, 2000)
        }
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onDismiss={() => {
                setShowModal(false);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.label}>{label}</Text>
                    <TextInput
                        keyboardType={keyboardType}
                        style={styles.input}
                        mode="outlined"
                        placeholder="Update value"
                        value={`${fieldValue}`}
                        onChangeText={(text) => {
                            setFieldValue(text)
                        }}
                    />
                    <View style={styles.buttonsWrapper}>
                        <Button style={[styles.button, styles.canelButton]} mode="outlined" onPress={() => setShowModal(false)}>
                            <Text style={styles.canelText}>Cancel</Text>
                        </Button>
                        <Button style={[styles.button, styles.updateBtn]} mode="elevated" onPress={() => {
                            updateField()
                            setShowModal(false)
                        }}>
                            <Text style={styles.btnText}>Update</Text>
                        </Button>

                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default UpdateProductModalField