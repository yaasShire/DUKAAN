import { View, Text } from 'react-native'
import React from 'react'
import { Button, Modal, Portal } from 'react-native-paper'
import styles from './style'
const MessageModal = ({ navigation, message, setShowMessage, showMessage }) => {
    const containerStyle = { padding: 20, };
    return (
        <Portal>
            <Modal style={{}} visible={showMessage} onDismiss={() => setShowMessage(false)} contentContainerStyle={containerStyle}>
                <View style={styles.modelCard}>
                    <Text style={styles.messageText}>{message}</Text>
                    <Button style={styles.modalBtn} mode="contained" onPress={() => navigation.goBack()}>
                        Go Back
                    </Button>
                </View>
            </Modal>
        </Portal>
    )
}

export default MessageModal