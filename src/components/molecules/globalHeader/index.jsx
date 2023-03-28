import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './style'
import AntiDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const GlobalHeader = ({ label }) => {
    return (
        <View style={styles.topHeader}>
            <View style={styles.topActionsHolder}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <MaterialIcons name='keyboard-backspace' size={30} color="#c4cadb" />
                </TouchableWithoutFeedback>
                <View>
                    <Text style={styles.updateText}>{label}</Text>
                </View>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <Text style={styles.saveText}>Save</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default GlobalHeader