import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import styles from './style'
import { Button, TextInput } from 'react-native-paper';
import { postData } from '../../../../../../hooks/usePost';
import AppLoader from '../../../../../../components/molecules/AppLoader';
const EditShopField = ({ showModal, setShowModal, title, value, field, detail, shopId, setDetail }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [fieldValue, setFieldValue] = useState(value)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const updateField = async () => {
        const shopData = new FormData()
        shopData.append('USID', shopId)
        shopData.append(field, fieldValue)
        const { result } = await postData('seller/shop/update', shopData, setError, setIsLoading)
        if (result?.status == 'changed') {
            setDetail({ ...detail, value: fieldValue })
        }
    }


    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onDismiss={() => {
                    setShowModal(false);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TextInput
                            style={styles.input}
                            mode="outlined"
                            label={detail.field}
                            placeholder="Update value"
                            value={`${fieldValue}`}
                            onChangeText={(text) => {
                                setFieldValue(text)
                            }}
                        />
                        <View style={styles.buttonsWrapper}>
                            <Button style={[styles.button, styles.canelButton]} mode="elevated" onPress={() => setShowModal(false)}>
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
        </View>
    );
};


export default EditShopField;