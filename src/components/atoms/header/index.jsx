import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import logo from '../../../assets/macanicLogo.png'
import styles from './style'
const Header = ({ paddingP = 0, showAddButton, navigation }) => {
    return (
        <View style={[styles.headerHolder]}>
            <View style={styles.iconLogoHolder}>
                {/* <TouchableWithoutFeedback>
                    <FontAwesome5 name="bars" size={25} color="#000" />
                </TouchableWithoutFeedback> */}
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