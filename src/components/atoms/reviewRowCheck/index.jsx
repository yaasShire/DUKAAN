import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ReviewRowCheck = ({ label }) => {
    return (
        <View style={styles.validationWrapper}>
            <Text style={styles.completedSectionText}>{label}</Text>
            <FontAwesome5 name='check-circle' size={25} color={"green"} />
        </View>
    )
}

export default ReviewRowCheck