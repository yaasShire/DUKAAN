import { View, Text, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Product3 from '../../../../assets/product3.jpg'
import Product from '../../../../components/atoms/product';
import DecisionButton from '../../../../components/atoms/add';
const ViewOrder = ({ navigation }) => {
    return (
        <SafeAreaView>
            <StatusBar barStyle={'light-content'} />
            <ScrollView >
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name='chevron-back' size={33} color="blue" />
                    </TouchableOpacity>
                    <Text style={styles.orderDetailsText}>Order Details</Text>
                </View>
                <View style={styles.mainHolder}>
                    <View style={styles.orderNameIdHolder}>
                        <Text style={styles.orderNumber}>Order No : 19495944</Text>
                        <View style={styles.nameHolder}>
                            <Text style={styles.customerName}> Yusuf Ahmed Shire</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.locationSection}>
                            <View>
                                <Text style={styles.locationText}>Location</Text>
                            </View>
                            <View style={styles.locationInfoHolder}>
                                <View style={styles.locationIconNameHolder}>
                                    <Ionicons name='ios-location' size={25} color="red" />
                                    <Text style={styles.locationText}>Hodan, KPP KM4</Text>
                                </View>
                                <View style={styles.countryCityHolder}>
                                    <Text>Mogadishu,</Text>
                                    <Text>Somalia</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* product items */}
                    <View style={styles.productHolder}>
                        <Product />
                        <Product />


                    </View>
                    {/* product items ends here */}
                    <View style={styles.totalAmmount}>
                        <Text style={styles.totalAmmountText}>Total Ammount</Text>
                        <Text style={styles.totalMoney}>$500</Text>
                    </View>
                    <View style={styles.decisionButtonHolder}>
                        <DecisionButton title="REJECT" />
                        <DecisionButton title="ACCEPT" />
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default ViewOrder