import { View, StatusBar, Image, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import styles from './style'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import sProduct1 from '../../../../assets/sProduct1.png'
import PricingSectionCard from '../../../../components/molecules/productInformationSectionCard';
import InventorySectionCard from '../../../../components/molecules/inventorySectionCard';
import AppHeader from '../../../../components/molecules/header';
import { Tab, Text, TabView } from '@rneui/themed';
import { globalStyles } from '../../../../globalConstants/styles';
import SalesSectionCard from '../../../../components/molecules/categorySectionCard';
import ProductInformationSectionCard from '../../../../components/molecules/productInformationSectionCard';
import CategorySectionCard from '../../../../components/molecules/categorySectionCard';
const UpdateProduct = ({ navigation, route }) => {
    const [index, setIndex] = React.useState(0);
    const [productDetail, setProductDetail] = useState(route.params?.data)
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
    updateSections.set(1, <PricingSectionCard navigation={navigation} />)
    updateSections.set(2, <InventorySectionCard navigation={navigation} />)
    updateSections.set(3, <PricingSectionCard navigation={navigation} />)

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <AppHeader title={"Mange Inventory"} navigation={navigation} color={"#000"} backButton={true} />
            <View style={styles.productHolder}>
                <Image source={{ uri: `https://sweyn.co.uk/storage/images/${productDetail?.photo}` }} style={styles.image} />
                <View style={{ flex: 1, alignItems: "flex-start", justifyContent: "space-around", paddingVertical: "3%" }}>
                    <Text style={styles.productName}>{productDetail?.name}</Text>
                    <View style={styles.holder}>
                        <Text style={styles.textTitle}>Status:</Text>
                        <Text style={[styles.valueText, styles.statusText]}>Active</Text>
                    </View>
                    <View style={styles.holder}>
                        <Text style={styles.textTitle}>Available:</Text>
                        <Text style={styles.valueText}>{productDetail?.quantity_avaliable}</Text>
                    </View>
                    <View style={styles.holder}>
                        <Text style={styles.textTitle}>Price:</Text>
                        <Text style={styles.valueText}>${productDetail?.price}</Text>
                    </View>
                    <View style={styles.holder}>
                        <Text style={styles.textTitle}>Number of sales:</Text>
                        <Text style={styles.valueText}>0</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, marginTop: "5%" }}>
                <Tab
                    value={index}
                    onChange={(e) => setIndex(e)}
                    indicatorStyle={{
                        backgroundColor: 'white',
                        height: 3,
                    }}
                    variant="primary"
                    buttonStyle={{ backgroundColor: globalStyles.colors.logoColor }}
                >
                    <Tab.Item
                        title="Info"
                        titleStyle={{ fontSize: 12 }}
                        icon={{ name: 'price-tag', type: 'foundation', color: 'white' }}
                    />
                    <Tab.Item
                        title="Inventory"
                        titleStyle={{ fontSize: 12 }}
                        icon={{ name: 'inventory', type: 'materialIcons', color: 'white' }}
                    />
                    {/* <Tab.Item
                        title="Categories"
                        titleStyle={{ fontSize: 12 }}
                        icon={{ name: 'burst-sale', type: 'foundation', color: 'white' }}
                    /> */}
                </Tab>
                <TabView value={index} onChange={setIndex} animationType="spring">
                    <TabView.Item style={{ width: "100%" }}>
                        <ProductInformationSectionCard productDetail={productDetail} navigation={navigation} />
                    </TabView.Item>
                    <TabView.Item style={{ width: "100%" }}>
                        <InventorySectionCard productDetail={productDetail} navigation={navigation} />
                    </TabView.Item>
                    {/* <TabView.Item style={{ width: "100%" }}>
                        <CategorySectionCard productDetail={productDetail} navigation={navigation} />
                    </TabView.Item> */}
                </TabView>
            </View>
        </SafeAreaView>
    )
}

export default UpdateProduct