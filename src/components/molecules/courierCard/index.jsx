import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import person1 from '../../../assets/person2.jpg'
import Entypo from 'react-native-vector-icons/Entypo';
import startIcon from '../../../assets/startIcon.png'
const CourierCard = ({ person, navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContentWrapper}>
                <View>
                    <Image source={person.image} style={styles.image} />
                </View>
                <View style={styles.contentWrapper}>
                    <View>
                        <Text style={styles.courierName}>{person.name}</Text>
                    </View>
                    <View style={styles.distanceAnIconWrapper}>

                        <Entypo name='location-pin' size={20} color={"red"} />
                        <Text style={styles.distanceAmmount}>{person.distance} km away</Text>
                    </View>
                    <View style={styles.stausWrapper}>
                        <Text style={styles.statusTitle}>status:</Text>
                        <Text style={styles.statusText}>active</Text>
                    </View>
                    <View style={styles.raingWraper}>
                        <Image source={startIcon} style={styles.startIcon} />
                        <View style={styles.ratingValues}>
                            <Text style={styles.ratingNumber}>{person.rating1}</Text>
                            <Text style={styles.numberOfPeopleRated}>({person.rating2}k)</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.assignButton}>
                    <Text style={styles.assignText}>Assign</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CourierCard