import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Image, Pressable, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import logo from '../../../assets/macanicLogo.png'
import { View } from 'react-native';
import styles from './style'
import darawalLogo from '../../../assets/darawalLogo.png'
import AnimatedButton from '../../../components/atoms/animatedButton'
import { FontAwesome } from '@expo/vector-icons';
import { globalStyles } from '../../../globalConstants/styles';
const AppHeader = ({ title = "", backButton = false, menu = false, navigation, addproductButton = false, showLogo = false, screen = "", color = "", showFilter = true }) => {
    return (
        <View style={styles.container}>
            {
                backButton && (
                    <View style={styles.backButton}>
                        <Feather name='chevron-left' size={30} onPress={() => navigation.goBack()} />
                    </View>
                )
            }
            {
                addproductButton &&
                <View style={styles.addButtonWrapper}>
                    <TouchableOpacity style={styles.mainButtonHolder} onPress={() => navigation.navigate('addProduct')}>
                        <View style={styles.addHolder}>
                            <Text style={styles.addText}>ADD</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            }
            {
                title ? <Text style={styles.title}>{title}</Text> : showLogo ? <View style={styles.logoImageHolder}>
                    <Image source={darawalLogo} style={styles.logoImage} />
                </View> : ""
            }

            {
                showFilter && (
                    <Pressable style={styles.filterBtn} onPress={() => navigation.navigate("mainFilter", { target: "" })}>
                        <Feather name='filter' size={30} color={globalStyles.colors.logoColor} />
                    </Pressable>
                )
            }

            {
                screen == 'Add Product' && (
                    <View >
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
            {
                screen == 'Shops' ? (
                    <TouchableOpacity style={styles.mainButtonHolder} onPress={() => navigation.navigate('addProduct')}>
                        <View style={styles.addHolder}>
                            <Text style={styles.addText}>ADD</Text>
                        </View>
                    </TouchableOpacity>
                ) : screen == "Edit Profile" ? (
                    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                        <Text style={styles.saveText}>Save</Text>
                    </TouchableWithoutFeedback>
                ) : ""
            }
        </View>
    );
};

export default AppHeader;