import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { globalStyles } from '../../../../../../globalConstants/styles';
import fireBallImage from '../../../../../../assets/images/fireBall2.png'
import { Image } from 'react-native';
const BroadcastResponseModal = ({ setResponseModal = () => { }, responseModal = false }) => {
    return (
        <Modal
            animationType="slide"
            onDismiss={() => setResponseModal(false)}
            transparent={true}
            visible={responseModal}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setResponseModal(!responseModal);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View>
                        <Image source={fireBallImage} style={styles.image} />
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.title}>Order is broadcasted</Text>
                        <Text style={styles.description}>The order is broadcasted to all delivery agents near, broad cast again if you got no response in 15 minutes.</Text>
                    </View>
                    <View style={styles.btnsWrapper}>
                        <Pressable style={styles.btn} onPress={() => setResponseModal(false)}>
                            <Text style={styles.btnText}>Ok</Text>
                        </Pressable>
                    </View>
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
    modalView: {
        // margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        // padding: 35,
        alignItems: 'center',
        justifyContent: "space-between",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "90%",
        height: 350,
        paddingTop: 10
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
    btnsWrapper: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        height: 70,
        borderTopWidth: 1,
        borderTopColor: globalStyles.colors.primaryGray
    },
    btn1: {
        borderRightWidth: 1,
        borderRightColor: globalStyles.colors.primaryGray
    },
    btn: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    btnText: {
        color: globalStyles.colors.blue,
        fontSize: 18,
        fontWeight: globalStyles.fontWeights.primary
    },
    textWrapper: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: globalStyles.fontWeights.secondary
    },
    description: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: globalStyles.fontWeights.primary,
        opacity: .8
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "contain"
    }
});

export default BroadcastResponseModal;