import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import ModalComponent from '../../molecules/modal'
import check from '../../../assets/check.png'
const DecisionButton = ({ title, navigation }) => {
    const [visible, setVisible] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [show, setShow] = useState(true)
    const [status, setstatus] = useState({})
    return (
        <>
            <TouchableOpacity style={styles.buttonHolder} onPress={() => {
                if (title == 'ACCEPT' || title == 'REJECT') {
                    setShowModal(true)
                    setVisible(true)
                    setstatus(title == 'ACCEPT' ?
                        { state: "ACCEPTED", description: "Order is accepted" }
                        : title == 'REJECT'
                            ? { state: "Rejected", description: "Order is rejected" }
                            : ""
                    )
                }
                // navigation.goBack()
            }}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
            {
                show && (
                    <View style={{ padding: 20, position: "absolute", top: 100 }}>
                        <ModalComponent status={status} setVisible={setVisible} visible={visible} showModal={showModal} setShowModal={setShowModal} />
                    </View>
                )
            }
        </>
    )
}

export default DecisionButton