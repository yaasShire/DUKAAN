import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { Feather } from '@expo/vector-icons'
import ProfileImage from '../../../../../../assets/images/person2.jpg'
import styles from './style'
import profilePlaceholder from '../../../../../../assets/images/profilePlaceholder.jpg'
const ProfileCard = ({ user, navigation, userData = {} }) => {
    return (
        <Pressable style={styles.profileCardWrapper} onPress={() => navigation.navigate("editProfile", { image: "https://sweyn.co.uk/storage/images/avatar/" + user.profile_picture, userData })}>
            <View style={styles.imageNameNumberWrapper}>
                <View style={styles.imageWrapper}>
                    <Image source={user?.profile_picture ? { uri: "https://api.elabis.app/storage/images/avatar/" + user?.profile_picture } : profilePlaceholder} style={styles.image} />
                </View>
                <View style={styles.nameNumberWrapper}>
                    <Text style={styles.name}>{user?.name}</Text>
                    <Text style={styles.infoText}>+252 - {user?.phone_number}</Text>
                    <Text style={styles.infoText}>{user?.email}</Text>
                </View>
            </View>
            <View>
                <Feather name='chevron-right' size={25} color="gray" />
            </View>
        </Pressable>
    )
}

export default ProfileCard