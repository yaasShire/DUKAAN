import { View, Text, StatusBar, Image, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import styles from './style'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import sProduct1 from '../../../assets/sProduct1.png'
import PricingSectionCard from '../../../components/molecules/pricingSectionCard';
import InventorySectionCard from '../../../components/molecules/inventorySectionCard';
const UpdateProduct = ({ navigation, route }) => {
    const [id, setId] = useState(1)
    const tabs = [
        {
            id: 1,
            name: "Pricing"
        },
        {
            id: 2,
            name: "Inventory"
        },
        {
            id: 3,
            name: "Sales"
        },

    ]
    const updateSections = new Map()
    updateSections.set(1, <PricingSectionCard />)
    updateSections.set(2, <InventorySectionCard />)
    updateSections.set(3, <PricingSectionCard />)
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <View style={styles.header}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <Feather name='chevron-left' size={30} color={"gray"} />
                </TouchableWithoutFeedback>
                <Text style={styles.textHeader}>Manage Inventory</Text>
            </View>
            <View style={styles.productHolder}>
                <Image source={route.params.data.image} style={styles.image} />
                <View>
                    <Text style={styles.productName}>{route.params.data.productName}</Text>
                    <View style={styles.holder}>
                        <Text style={styles.textTitle}>Status:</Text>
                        <Text style={[styles.valueText, styles.statusText]}>Active</Text>
                    </View>
                    <View style={styles.holder}>
                        <Text style={styles.textTitle}>Available:</Text>
                        <Text style={styles.valueText}>{route.params.data.Qty}</Text>
                    </View>
                    <View style={styles.holder}>
                        <Text style={styles.textTitle}>Price:</Text>
                        <Text style={styles.valueText}>${route.params.data.price}</Text>
                    </View>
                    <View style={styles.holder}>
                        <Text style={styles.textTitle}>Number of sales:</Text>
                        <Text style={styles.valueText}>34</Text>
                    </View>
                </View>
            </View>
            <View style={styles.tabsHolder}>
                {
                    tabs.map(tab => (
                        <TouchableWithoutFeedback key={tab.id} onPress={() => setId(tab.id)}>
                            <View style={{ height: 33 }}>
                                <View style={[styles.singleTab]}>
                                    <Text style={styles.tabText}>{tab.name}</Text>
                                </View>
                                <View style={[tab.id == id ? styles.selectedTab : ""]} />
                            </View>
                        </TouchableWithoutFeedback>
                    ))
                }
            </View>
            <View>
                {
                    updateSections.get(id)
                }
            </View>

        </SafeAreaView>
    )
}

export default UpdateProduct