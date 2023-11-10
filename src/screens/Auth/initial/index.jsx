import { View, Text, ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import styles from './style'
import AuthButton from '../../../components/atoms/button'
import InitialButton from './components/intialButton'
import { globalStyles, screenPadding } from '../../../globalConstants/styles'
import { Image } from 'react-native'
import style from './style'
import logoImage from '../../../assets/images/dukaanLogo.jpeg'
import logoImage2 from '../../../../assets/logo.png'
const Initial = ({ navigation }) => {
    return (
        <View style={styles.backgroundImage} >
            <StatusBar backgroundColor={"#143d57"} barStyle={'default'} />
            <View style={styles.logoWrapper}>
                <Image source={logoImage2} style={style.logoImage} />
                <Text style={styles.appName}>Dukaan</Text>
            </View>
            <View style={styles.wrapper}>
                <View style={styles.txtsWrapper}>
                    <Text style={styles.title}>Welcome To Dukaan</Text>
                    <Text style={styles.description}>Build your dream business with us by starting here.</Text>
                </View>
                <View style={styles.buttonsHolder}>
                    <InitialButton label='Login' bgColor={globalStyles.colors.logoColor} color={globalStyles.colors.miniPrimary} onPress={() => navigation.navigate('login')} />
                    <InitialButton label='Sign up' bgColor={globalStyles.colors.tertiary} color={globalStyles.colors.miniPrimary} onPress={() => navigation.navigate('signup')} />
                </View>
            </View>
        </View>
    )
}

export default Initial
