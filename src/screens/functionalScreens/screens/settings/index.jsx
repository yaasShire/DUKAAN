import { View, StatusBar, Image, TouchableWithoutFeedback, Platform, ScrollView, Dimensions, RefreshControl } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import styles from './style'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';
import { Modal, Portal, Text, Button, Provider, Switch, } from 'react-native-paper';
import ProfileCard from './components/profileCard';
import SingleCardAction from './components/singleCardAction';
// import AppHeader from '../../../../components/molecules/header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { fetchData } from '../../../../hooks/useFetch';
import AppHeader from '../../../../components/molecules/header';
const Settings = ({ navigation, route }) => {
    const { width, height } = new Dimensions.get("window")
    const [visible, setVisible] = React.useState(false);
    const [user, setUser] = useState({})
    const [imageURL, setImageURL] = useState(route?.params?.image)
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [refreshing, setRefreshing] = useState(false)


    const getUserData = async () => {
        const { data: userData } = await fetchData('seller/user/view', setError, setIsLoading)
        setUser(userData?.data[0])
        setRefreshing(false)
    }
    useFocusEffect(
        React.useCallback(() => {
            getUserData()
        }, [])
    );

    useEffect(() => {
        const getUserData = async () => {
            const result = await AsyncStorage.getItem('user')
            const { data: userData } = await fetchData('seller/user/view', setError, setIsLoading)
            const data = JSON.parse(result)
        }
        getUserData()
        navigation.addListener('focus', () => {
            setImageURL(route?.params?.image)
            getUserData()
        });
    }, [navigation])
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <StatusBar barStyle={Platform.OS == 'android' ? 'light-content' : 'dark-content'} />
            <AppHeader title='Settings' />
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={getUserData} />} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollStyle} >
                <ProfileCard user={user} navigation={navigation} />
                <SingleCardAction navigation={navigation} name='Reset Password' icon='lock-reset' color='green' screen='changePassword' />
                <SingleCardAction navigation={navigation} name='Reports' icon='google-analytics' color='#3430f2' screen='reports' />
                <SingleCardAction navigation={navigation} name='Add Product' icon='shopping' color='#1da1ab' screen='addProduct' />
                <SingleCardAction navigation={navigation} name='Add Shop' icon='store-check' color='#1da1ab' screen='addShop' />
                <SingleCardAction navigation={navigation} name='Privacy & Policy' icon='door-closed-lock' color='#f29e0c' screen='privacy' />
                <SingleCardAction navigation={navigation} name='Help' icon='help-circle-outline' color='#7d1a7a' screen='help' />
                <SingleCardAction navigation={navigation} showModal={showModal} name='Log out' icon='logout' color='#ed1909' screen='' />
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalContainerStyle}>
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
                            navigation.replace("login")
                        }}>
                            <Text style={styles.logoutText}>Log out</Text>
                        </Button>
                    </View>
                </Modal>
            </ScrollView>
        </View>
    )
}

export default Settings