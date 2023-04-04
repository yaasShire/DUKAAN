import { View, Text, StatusBar, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Product3 from '../../../../assets/product3.jpg'
import Product from '../../../../components/atoms/product';
import DecisionButton from '../../../../components/atoms/decisionButton';
import { nameShortner } from '../../../../utils/utilityFunctions';
const ViewOrder = ({ navigation, route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <ScrollView>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name='chevron-back' size={30} color="gray" />
                    </TouchableOpacity>
                    <Text style={styles.orderDetailsText}>Order Details</Text>
                </View>
                <View style={styles.mainHolder}>
                    <View style={styles.orderDetailCard}>
                        <Text style={styles.orderNumber}>Order No : {route.params.order.orderNo}</Text>
                        <View style={styles.nameHolder}>
                            <Text style={styles.customerName} numberOfLines={1}>{route.params.order.customerName}</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.locationSection}>
                            <View>
                                <Text style={styles.locationTextTitle}>Location :</Text>
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
                        <ScrollView>
                            {
                                route.params.order.products.map(item => (
                                    <Product key={item.id} item={item} />
                                ))
                            }
                        </ScrollView>


                    </View>
                    {/* product items ends here */}
                    <View style={styles.totalAmmountWapper}>
                        <Text style={styles.totalAmmountText}>Total Ammount</Text>
                        <Text style={styles.totalMoney}>${route.params.order.ammount}</Text>
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