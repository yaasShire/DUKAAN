import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import logo from '../../../assets/macanicLogo.png'
import styles from './style'
const Header = ({ paddingP = 0, showAddButton, navigation }) => {
    return (
        <View style={[styles.headerHolder]}>
            <View style={styles.menuWrapper}>
                <Feather name='menu' size={25} onPress={() => navigation.openDrawer()} />
            </View>
            <View style={styles.iconLogoHolder}>
                <View >
                    <Image source={logo} style={styles.logoImage} />
                </View>
            </View>
            {
                showAddButton &&
                <TouchableOpacity style={styles.mainButtonHolder} onPress={() => navigation.navigate('addProduct')}>
                    <View style={styles.addHolder}>
                        <Text style={styles.addText}>ADD</Text>
                    </View>
                </TouchableOpacity>
            }

        </View>
    )
}

export default Header