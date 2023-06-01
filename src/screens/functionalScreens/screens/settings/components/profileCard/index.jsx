import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import ProfileImage from '../../../../../../assets/person2.jpg'
import styles from './style'
const ProfileCard = ({ user }) => {
    return (
        <TouchableOpacity style={styles.profileCardWrapper} onPress={() => navigation.navigate("editProfile")}>
            <View style={styles.imageNameNumberWrapper}>
                <View style={styles.imageWrapper}>
                    <Image source={ProfileImage} style={styles.image} />
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
        </TouchableOpacity>
    )
}

export default ProfileCard