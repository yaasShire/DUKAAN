import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Image, Text, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import logo from '../../../assets/macanicLogo.png'
import { View } from 'react-native';
import styles from './style'
import darawalLogo from '../../../assets/darawalLogo.png'
import AnimatedButton from '../../../components/atoms/animatedButton'
const AppHeader = ({ title = "", backButton = false, menu = false, navigation, addproductButton = false, showLogo = false }) => {
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    return (
        <Appbar.Header mode='center-aligned' style={{ justifyContent: "space-between", top: Platform.OS == 'ios' ? -50 : 0 }} >
            {menu ? <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} /> : backButton ? <Appbar.BackAction onPress={() => navigation.goBack()} /> : ""}


            {
                title ? <Appbar.Content title={title} /> : showLogo ? <View style={styles.logoImageHolder}>
                    <Image source={darawalLogo} style={styles.logoImage} />
                </View> : ""
            }
            {
                addproductButton &&
                <TouchableOpacity style={styles.mainButtonHolder} onPress={() => navigation.navigate('addProduct')}>
                    <View style={styles.addHolder}>
                        <Text style={styles.addText}>ADD</Text>
                    </View>
                </TouchableOpacity>
                // <AnimatedButton />
            }

        </Appbar.Header>
    );
};

export default AppHeader;