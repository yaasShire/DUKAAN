import { View, Text, Image } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import logo from '../../../assets/macanicLogo.png'
import styles from './style'
const Header = ({ paddingP = 0 }) => {
    return (
        <View style={[styles.headerHolder]}>
            <FontAwesome5 name="bars" size={25} color="#000" />
            <Image source={logo} style={styles.logoImage} />
        </View>
    )
}

export default Header