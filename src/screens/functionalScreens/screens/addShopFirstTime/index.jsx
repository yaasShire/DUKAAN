import { View, Text, StatusBar, Platform, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import styles from './style'
import mechanicLogo from '../../../../assets/macanicLogo.png'
import accountCreationImage from '../../../../assets/accountCreation.png'
const AddShopFirstTime = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={Platform.OS == 'android' ? 'light-content' : 'dark-content'} />
            <View style={styles.upperContent}>
                <View style={styles.logoBrandNameWrapper}>
                    <View style={styles.logoWrapper}>
                        <Image source={mechanicLogo} style={styles.logo} />
                    </View>
                    <View style={styles.companyNameWrapper}>
                        <Text style={styles.companyName}>Mechanic Seller</Text>
                    </View>
                </View>
            </View>
            {/* card */}
            <View style={styles.cardWrapper}>
                <View style={styles.card}>
                    <View>
                        <Text style={styles.welcomeText}>Welcome to Mechanic Seller.</Text>
                    </View>
                    <View style={styles.imageDescriptionWrapper}>
                        <Image source={accountCreationImage} style={styles.accountCreationImage} />
                        <Text style={styles.descriptionText}>This is your first time of the application, you need to create shop to add products to.</Text>
                    </View>
                    <TouchableOpacity style={styles.addShopButton} onPress={() => navigation.navigate("addShop")}>
                        <Text style={styles.buttonText}>Add Shop</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AddShopFirstTime