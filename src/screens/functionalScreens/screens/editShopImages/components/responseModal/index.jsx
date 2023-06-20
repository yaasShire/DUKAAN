import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { globalStyles } from '../../../../../../globalConstants/styles';
import { Button, Divider } from 'react-native-paper';
import styles from './style'
const ResponseModal = ({ modalVisible, setModalVisible, responseMessage }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onDismiss={() => setModalVisible(false)}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.checK_Message}>
                        <Octicons name="check-circle" size={50} color={globalStyles.colors.logoColor} />
                        <Text style={styles.modalText}>Image {responseMessage} successfully</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.btnWrapper}>
                        <Button style={styles.btnOk} mode="outlined" onPress={() => setModalVisible(false)}>
                            Ok
                        </Button>
                    </View>
                </View>
            </View>
        </Modal>
    );
};



export default ResponseModal;