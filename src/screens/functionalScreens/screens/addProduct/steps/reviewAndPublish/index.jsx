import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import sProduct1 from '../../../../../../assets/sProduct1.png'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AddProductActionButton from '../../../../../../components/atoms/addProductActionButton';
const ReviewAndPublish = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Review And Publish</Text>
            </View>
            <View style={styles.mainImageWrapper}>
                <View style={styles.imageWrapper}>
                    <Image source={sProduct1} style={styles.image} />
                </View>
            </View>
            <ScrollView style={styles.completedSectionsWrapper} showsVerticalScrollIndicator={false}>
                <View style={styles.validationWrapper}>
                    <Text style={styles.completedSectionText}>Shop</Text>
                    <FontAwesome5 name='check-circle' size={25} color={"green"} />
                </View>
                <View style={styles.validationWrapper}>
                    <Text style={styles.completedSectionText}>Main category</Text>
                    <FontAwesome5 name='check-circle' size={25} color={"green"} />
                </View>
                <View style={styles.validationWrapper}>
                    <Text style={styles.completedSectionText}>Product category</Text>
                    <FontAwesome5 name='check-circle' size={25} color={"green"} />
                </View>
                <View style={styles.validationWrapper}>
                    <Text style={styles.completedSectionText}>Sub category</Text>
                    <FontAwesome5 name='check-circle' size={25} color={"green"} />
                </View>
                <View style={styles.validationWrapper}>
                    <Text style={styles.completedSectionText}>Images</Text>
                    <FontAwesome5 name='check-circle' size={25} color={"green"} />
                </View>
                <View style={styles.validationWrapper}>
                    <Text style={styles.completedSectionText}>Required info</Text>
                    <FontAwesome5 name='check-circle' size={25} color={"green"} />
                </View>
                <View style={styles.validationWrapper}>
                    <Text style={styles.completedSectionText}>Offers</Text>
                    <FontAwesome5 name='check-circle' size={25} color={"green"} />
                </View>
                <View style={styles.buttonWrapper}>
                    <AddProductActionButton label={"Finish"} navigation={navigation} />
                </View>
            </ScrollView>
        </View>
    )
}

export default ReviewAndPublish