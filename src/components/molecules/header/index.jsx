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
const AppHeader = ({ title = "", backButton = false, menu = false, navigation, addproductButton = false, showLogo = false, screen = "", color = "", showFilter = false, addShopButton = false, cancelButton = false }) => {
    return (
        <View style={styles.container}>
            {
                backButton && (
                    <View style={styles.backButton}>
                        <Feather name='chevron-left' size={35} onPress={() => navigation.goBack()} />
                    </View>
                )
            }
            {
                cancelButton && (
                    <View >
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                )
            }

            {
                addproductButton &&
                <Pressable style={styles.mainButtonHolder} onPress={() => navigation.navigate('addProduct')}>
                    <View style={styles.addHolder}>
                        <FontAwesome name='plus' size={20} color={globalStyles.colors.miniPrimary} />
                    </View>
                </Pressable>
            }
            {
                title ? <Text style={styles.title}>{title}</Text> : showLogo ? <View style={styles.logoImageHolder}>
                    <Image source={darawalLogo} style={styles.logoImage} />
                </View> : ""
            }
            {
                addShopButton && (
                    <Pressable style={styles.mainButtonHolder} onPress={() => navigation.navigate("addShop")}>
                        <View style={styles.addHolder}>
                            <FontAwesome name='plus' size={20} color={globalStyles.colors.miniPrimary} />
                        </View>

                    </Pressable>
                )
            }

            {
                showFilter && (
                    <Pressable style={styles.filterBtn} onPress={() => navigation.navigate("mainFilter", { target: "" })}>
                        <Feather name='sliders' size={30} color={globalStyles.colors.logoColor} />
                        {/* <FontAwesome name='sliders' size={30} color={globalStyles.colors.logoColor} /> */}
                    </Pressable>
                )
            }


            {/* {
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
            } */}
        </View>
    );
};

export default AppHeader;