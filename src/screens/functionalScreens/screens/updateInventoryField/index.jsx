import { View, Text, StatusBar, TextInput, Platform, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import AppHeader from '../../../../components/molecules/appHeader';
import styles from './style'
const UpdateInventoryField = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={Platform.OS == 'ios' ? 'dark-content' : 'light-content'} />
            <AppHeader title={"Update Product Details"} navigation={navigation} color={"#000"} />
            <View style={styles.contentHolder}>
                <View style={styles.inputLableHolder}>
                    <Text style={styles.label}>Price</Text>
                    <TextInput placeholder='$20' style={styles.input} />
                </View>
                <View style={styles.buttonHolder}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonText}>Update</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}
export default UpdateInventoryField