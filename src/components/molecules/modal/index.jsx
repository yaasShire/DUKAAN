import React from 'react';
import {
    View,
    StyleSheet,
    Button,
    Modal,
    Image,
    Text,
    TouchableOpacity,
    Animated,
} from 'react-native';
import AntiDesign from 'react-native-vector-icons/AntDesign';

import check from '../../../assets/check.png'
const ModalPoup = ({ visible, showModal, setShowModal, children }) => {
    // const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
        toggleModal();
    }, [visible]);
    const toggleModal = () => {
        if (visible) {
            setShowModal(true);
            Animated.spring(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            setTimeout(() => setShowModal(false), 200);
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };
    return (
        <Modal transparent visible={showModal}>
            <View style={styles.modalBackGround}>
                <Animated.View
                    style={[styles.modalContainer, { transform: [{ scale: scaleValue }] }]}>
                    {children}
                </Animated.View>
            </View>
        </Modal>
    );
};

const ModalComponent = ({ visible, setVisible, showModal, setShowModal, status }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ModalPoup visible={visible} showModal={showModal} setShowModal={setShowModal}>
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => setVisible(false)}>
                            <AntiDesign name='close' size={30} color="#000" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <AntiDesign name={status.state == 'ACCEPTED' ? 'check' : 'close'} size={100} color={status.state == 'ACCEPTED' ? 'green' : 'red'} />
                </View>

                <Text style={{ marginVertical: 30, fontSize: 20, textAlign: 'center' }}>
                    {status.description}
                </Text>
            </ModalPoup>
        </View>
    );
};

const styles = StyleSheet.create({
    modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    },
    header: {
        width: '100%',
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
});

export default ModalComponent;