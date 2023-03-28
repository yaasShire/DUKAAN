import { View, Text, StatusBar, Image, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import styles from './style'
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProfileImage from '../../../assets/person2.jpg'

const Settings = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <View style={styles.topBoxHolder}>
                <Text style={styles.textHeader}>Settings</Text>
            </View>
            <View style={styles.card}>
                <View style={styles.imageNameHolder}>
                    <Image source={ProfileImage} style={styles.image} />
                    <View>
                        <Text style={styles.name}>Nuur Xasan Ali</Text>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("editProfile")} >
                    <Feather name='edit' size={25} color="#a6bffa" />
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.bottomActionsHolder}>
                <TouchableWithoutFeedback>
                    <View style={styles.actionButtonHolder}>
                        <Text style={styles.actionText}>Dashboard</Text>
                        <Feather name='chevron-right' size={23} color={"#3475f5"} />
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.divider} />
                <TouchableWithoutFeedback>
                    <View style={styles.actionButtonHolder}>
                        <Text style={styles.actionText}>Reports</Text>
                        <Feather name='chevron-right' size={23} color={"#3475f5"} />
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.divider} />
                <TouchableWithoutFeedback onPress={() => navigation.navigate('updateShopDetails')}>
                    <View style={styles.actionButtonHolder} >
                        <Text style={styles.actionText}>Update Shop Information</Text>
                        <Feather name='chevron-right' size={23} color={"#3475f5"} />
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.divider} />
                <TouchableWithoutFeedback onPress={() => navigation.navigate('changePassword')}>
                    <View style={styles.actionButtonHolder}>
                        <Text style={styles.actionText}>Change password</Text>
                        <Feather name='chevron-right' size={23} color={"#3475f5"} />
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.divider} />
                <TouchableWithoutFeedback>
                    <View style={styles.actionButtonHolder}>
                        <Text style={styles.logOutText}>Sign out</Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        </SafeAreaView>
    )
}

export default Settings