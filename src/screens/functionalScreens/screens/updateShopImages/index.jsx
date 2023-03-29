import { View, Text, TouchableWithoutFeedback, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import UpdateShopImage from '../../../../components/atoms/updateShopImage'
import AntiDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './style'
const ShopImagesUpdate = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar barStyle={'light-content'} />
            <View style={styles.topHeader}>
                <View style={styles.topActionsHolder}>
                    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                        <MaterialIcons name='keyboard-backspace' size={30} color="#c4cadb" />
                    </TouchableWithoutFeedback>
                    <View >
                        <Text style={styles.updateText}>Update  Shop Images</Text>
                    </View>
                    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                        <Text style={styles.saveText}>Save</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <View style={styles.shopImagesHolder}>
                <UpdateShopImage main={true} />
                <UpdateShopImage />
                <UpdateShopImage />
                <UpdateShopImage />
                <UpdateShopImage />
                <UpdateShopImage />
            </View>
        </SafeAreaView>
    )
}

export default ShopImagesUpdate