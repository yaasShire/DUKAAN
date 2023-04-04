import { View, StatusBar, Image, TouchableWithoutFeedback, Platform, ScrollView, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react'
import styles from './style'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ProfileImage from '../../../assets/person2.jpg'
import { TouchableOpacity } from 'react-native';
import { Modal, Portal, Text, Button, Provider, Switch, } from 'react-native-paper';
const Settings = ({ navigation }) => {
    const { width, height } = new Dimensions.get("window")
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {
        backgroundColor: 'white', height: height / 4, width: width / 1.2, borderRadius: 10, justifyContent: "space-around",
        alignItems: "center", alignSelf: "center"
    };
    const [isSwitchOn, setIsSwitchOn] = useState(false)
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={Platform.OS == 'android' ? 'light-content' : 'dark-content'} />
            <View style={styles.header}>
                <Text style={styles.settingText}>Settings</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                <TouchableOpacity style={styles.profileCardWrapper} onPress={() => navigation.navigate("editProfile")}>
                    <View style={styles.imageNameNumberWrapper}>
                        <View style={styles.imageWrapper}>
                            <Image source={ProfileImage} style={styles.image} />
                        </View>
                        <View style={styles.nameNumberWrapper}>
                            <Text style={styles.name}>Yusuf Ahmed Shire</Text>
                            <Text style={styles.phoneNumber}>+252 61 2518368</Text>
                        </View>
                    </View>
                    <View>
                        <Feather name='chevron-right' size={25} color="gray" />
                    </View>
                </TouchableOpacity>
                <View style={styles.actionCardsWrapper}>
                    <TouchableOpacity style={styles.singleAction} onPress={() => navigation.navigate('changePassword')}>
                        <View style={styles.nameIconWrapper}>
                            <MaterialCommunityIcons name='lock-reset' size={27} color='green' />
                            <Text style={styles.actionName}>Reset password</Text>
                        </View>
                        <Feather name='chevron-right' size={25} color="gray" />
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.singleAction} onPress={() => navigation.navigate("reports")}>
                        <View style={styles.nameIconWrapper}>
                            <MaterialCommunityIcons name='google-analytics' size={27} color="#3430f2" />
                            <Text style={styles.actionName}>Reports</Text>
                        </View>
                        <Feather name='chevron-right' size={25} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.singleAction} onPress={() => navigation.navigate("addProduct")}>
                        <View style={styles.nameIconWrapper}>
                            <FontAwesome5 name='box' size={27} color="#1da1ab" />
                            <Text style={styles.actionName}>Add Product</Text>
                        </View>
                        <Feather name='chevron-right' size={25} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.singleAction} onPress={() => navigation.navigate("addShop")}>
                        <View style={styles.nameIconWrapper}>
                            <Entypo name='shop' size={27} color="#1da1ab" />
                            <Text style={styles.actionName}>Add Shop</Text>
                        </View>
                        <Feather name='chevron-right' size={25} color="gray" />
                    </TouchableOpacity>

                </View>
                <View style={styles.actionCardsWrapper}>
                    <View style={styles.singleAction}>
                        <View style={styles.nameIconWrapper}>
                            <MaterialCommunityIcons name='theme-light-dark' size={27} color='#10002d' />
                            <Text style={styles.actionName}>Dark Mode</Text>
                        </View>
                        {/* <Feather name='chevron-right' size={25} color="gray" /> */}
                        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                    </View >
                    <TouchableOpacity style={styles.singleAction} >
                        <View style={styles.nameIconWrapper}>
                            <MaterialIcons name='privacy-tip' size={27} color="#f29e0c" />
                            <Text style={styles.actionName}>Privacy & Policy</Text>
                        </View>
                        <Feather name='chevron-right' size={25} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.singleAction}>
                        <View style={styles.nameIconWrapper}>
                            <Feather name='help-circle' size={27} color="#7d1a7a" />
                            <Text style={styles.actionName}>Help</Text>
                        </View>
                        <Feather name='chevron-right' size={25} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.singleAction} onPress={showModal}>
                        <View style={styles.nameIconWrapper}>
                            <MaterialIcons name='logout' size={27} color="red" />
                            <Text style={styles.actionName}>logout</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                {/* <View style={styles.modalHolder}> */}
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <View>
                        <Text style={styles.logOutModalText}>Are you sure to log out ?</Text>
                    </View>
                    <View style={styles.buttonsHolder}>
                        <Button style={styles.cacenlButton} mode="outlined" onPress={() => {
                            setVisible(false)
                        }}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </Button>
                        <Button style={styles.logoutButton} mode="outlined" onPress={() => {
                            setVisible(false)
                        }}>
                            <Text style={styles.logoutText}>Log out</Text>
                        </Button>
                    </View>
                </Modal>
                {/* </View> */}

            </ScrollView>
        </SafeAreaView>
    )
}

export default Settings