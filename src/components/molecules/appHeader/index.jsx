import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import styles from './style'
import { globalStyles } from '../../../globalConstants/styles';
const AppHeader = ({ title, navigation, color, screen = "" }) => {
    return (
        <View style={styles.header}>
            {
                screen == 'Add Product' ? (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                ) : <Feather name='chevron-left' size={28} onPress={() => navigation.goBack()} style={{ padding: "1%" }} />
            }
            <View style={styles.headerTitleWrapper}>
                <Text style={[styles.headerTitle, { color }]}>{title}</Text>
            </View>
            {
                screen == 'Shops' ? (

                    <TouchableWithoutFeedback onPress={() => navigation.navigate("addShop")}>
                        <View style={styles.buttonHolder}>
                            <View style={styles.addButtonHolder}>
                                <FontAwesome name='plus' size={20} color={globalStyles.colors.miniPrimary} />
                            </View>

                        </View>
                    </TouchableWithoutFeedback>
                ) : screen == "Edit Profile" ? (
                    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                        <Text style={styles.saveText}>Save</Text>
                    </TouchableWithoutFeedback>
                ) : ""
            }
        </View>
    )
}

export default AppHeader