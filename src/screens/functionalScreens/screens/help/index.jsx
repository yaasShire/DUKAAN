import { View, Text, StatusBar, ScrollView, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppHeader from '../../../../components/molecules/header'
import HelpImage from '../../../../assets/images/help.png'
import HelpCard from './components/helpCard'
import WhatsAppImage from '../../../../assets/images/whatsapp.png'
import PhoneImage from '../../../../assets/images/phone.png'
import { Linking } from 'react-native'
const Help = ({ navigation }) => {
    const openWhatsApp = () => {
        let msg = "Hello Yusuf";
        let mobile = "612518368";
        if (mobile) {
            if (msg) {
                let url =
                    "whatsapp://send?text=" +
                    "Hello World hello" +
                    "&phone=91" +
                    "612518368";
                Linking.openURL(url)
                    .then(data => {
                        console.log("WhatsApp Opened successfully " + data);
                    })
                    .catch(() => {
                        alert("Make sure WhatsApp installed on your device");
                    });
            } else {
                alert("Please enter message to send");
            }
        } else {
            alert("Please enter mobile no");
        }
    };
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <SafeAreaView />
            <AppHeader title='Help' backButton navigation={navigation} />
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Image source={HelpImage} style={styles.image} />
                <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nisi.</Text>
                <View style={styles.helpCardsWrapper}>
                    <HelpCard image={WhatsAppImage} title="Chat" onPress={() => {
                        Linking.openURL(
                            'http://api.whatsapp.com/send?phone=252' + "612518368"
                        )
                    }} />
                    <HelpCard image={PhoneImage} title="Call" onPress={() => {
                        Linking.openURL(`tel:612518368`)
                    }} />
                </View>
            </ScrollView>
        </View>
    )
}

export default Help