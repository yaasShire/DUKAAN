import { View, Text, StatusBar, ScrollView, FlatList, TouchableWithoutFeedback, TextInput, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FilterHeader from '../../../../components/atoms/filterHeader';
import MeasurementCategoryItem from './measurementItem';
import SearchSelecDropDownCard from '../../../../components/atoms/searchSelectCard';
import CategoriesFilterSectionContent from '../../../../components/molecules/categoriesFilterSection';
import BrandsFilterSection from '../../../../components/molecules/brandsFilterSection';
import CarModelFilterSection from '../../../../components/molecules/carModelFilterSection';
const MainFilter = ({ navigation, route }) => {
    const [selectedItem, setSelectedItem] = useState(true)
    const [selectedId, setSelectedId] = useState(route.params.target.id)
    const [currentContent, setCurrentContent] = useState(route.params.target.name)
    const data = [
        {
            id: 1,
            name: "Categories"
        },
        {
            id: 2,
            name: "Brands"
        },
        {
            id: 3,
            name: "Car model"
        },



    ]
    const categories = [
        {
            id: 1,
            name: "Body parts",
            subCategory: [

                {
                    id: 1,
                    name: "Mirror",
                    productCategories: [
                        {
                            id: 1,
                            name: "Mirror"
                        },
                        {
                            id: 2,
                            name: "Side view mirror"
                        },
                        {
                            id: 3,
                            name: "Mirror trim"
                        },
                        {
                            id: 4,
                            name: "Mirror actuator"
                        },
                        {
                            id: 5,
                            name: "Inner rear"
                        },
                    ]
                },
                {
                    id: 2,
                    name: "Bumper",
                    productCategories: [
                        {
                            id: 1,
                            name: "Mirror"
                        },
                        {
                            id: 2,
                            name: "Side view mirror"
                        },
                        {
                            id: 3,
                            name: "Mirror trim"
                        },
                        {
                            id: 4,
                            name: "Mirror actuator"
                        },
                        {
                            id: 5,
                            name: "Inner rear"
                        },
                    ]
                },
                {
                    id: 3,
                    name: "Lock system",
                    productCategories: [
                        {
                            id: 1,
                            name: "Mirror"
                        },
                        {
                            id: 2,
                            name: "Side view mirror"
                        },
                        {
                            id: 3,
                            name: "Mirror trim"
                        },
                        {
                            id: 4,
                            name: "Mirror actuator"
                        },
                        {
                            id: 5,
                            name: "Inner rear"
                        },
                    ]
                },
                {
                    id: 4,
                    name: "Fender",
                    productCategories: [
                        {
                            id: 1,
                            name: "Mirror"
                        },
                        {
                            id: 2,
                            name: "Side view mirror"
                        },
                        {
                            id: 3,
                            name: "Mirror trim"
                        },
                        {
                            id: 4,
                            name: "Mirror actuator"
                        },
                        {
                            id: 5,
                            name: "Inner rear"
                        },
                    ]
                },
                {
                    id: 5,
                    name: "Bonnet",
                    productCategories: [
                        {
                            id: 1,
                            name: "Mirror"
                        },
                        {
                            id: 2,
                            name: "Side view mirror"
                        },
                        {
                            id: 3,
                            name: "Mirror trim"
                        },
                        {
                            id: 4,
                            name: "Mirror actuator"
                        },
                        {
                            id: 5,
                            name: "Inner rear"
                        },
                    ]
                },
                {
                    id: 6,
                    name: "Door components",
                    productCategories: [
                        {
                            id: 1,
                            name: "Mirror"
                        },
                        {
                            id: 2,
                            name: "Side view mirror"
                        },
                        {
                            id: 3,
                            name: "Mirror trim"
                        },
                        {
                            id: 4,
                            name: "Mirror actuator"
                        },
                        {
                            id: 5,
                            name: "Inner rear"
                        },
                    ]
                },
                {
                    id: 7,
                    name: "Boot",
                    productCategories: [
                        {
                            id: 1,
                            name: "Mirror"
                        },
                        {
                            id: 2,
                            name: "Side view mirror"
                        },
                        {
                            id: 3,
                            name: "Mirror trim"
                        },
                        {
                            id: 4,
                            name: "Mirror actuator"
                        },
                        {
                            id: 5,
                            name: "Inner rear"
                        },
                    ]
                },

            ]
        },
        {
            id: 2,
            name: "Air conditioner",
            subCategory: [

                {
                    id: 1,
                    name: "Mirror",
                    productCategories: [
                        {
                            id: 1,
                            name: "Mirror"
                        },
                        {
                            id: 2,
                            name: "Side view mirror"
                        },
                        {
                            id: 3,
                            name: "Mirror trim"
                        },
                        {
                            id: 4,
                            name: "Mirror actuator"
                        },
                        {
                            id: 5,
                            name: "Inner rear"
                        },
                    ]
                },
                {
                    id: 2,
                    name: "Bumper",
                    productCategories: [
                        {
                            id: 1,
                            name: "Mirror"
                        },
                        {
                            id: 2,
                            name: "Side view mirror"
                        },
                        {
                            id: 3,
                            name: "Mirror trim"
                        },
                        {
                            id: 4,
                            name: "Mirror actuator"
                        },
                        {
                            id: 5,
                            name: "Inner rear"
                        },
                    ]
                },
                {
                    id: 3,
                    name: "Lock system",
                    productCategories: [
                        {
                            id: 1,
                            name: "Mirror"
                        },
                        {
                            id: 2,
                            name: "Side view mirror"
                        },
                        {
                            id: 3,
                            name: "Mirror trim"
                        },
                        {
                            id: 4,
                            name: "Mirror actuator"
                        },
                        {
                            id: 5,
                            name: "Inner rear"
                        },
                    ]
                },
                {
                    id: 4,
                    name: "Fender",
                    productCategories: [
                        {
                            id: 1,
                            name: "Mirror"
                        },
                        {
                            id: 2,
                            name: "Side view mirror"
                        },
                        {
                            id: 3,
                            name: "Mirror trim"
                        },
                        {
                            id: 4,
                            name: "Mirror actuator"
                        },
                        {
                            id: 5,
                            name: "Inner rear"
                        },
                    ]
                },
                {
                    id: 5,
                    name: "Bonnet",
                    productCategories: [
                        {
                            id: 1,
                            name: "Mirror"
                        },
                        {
                            id: 2,
                            name: "Side view mirror"
                        },
                        {
                            id: 3,
                            name: "Mirror trim"
                        },
                        {
                            id: 4,
                            name: "Mirror actuator"
                        },
                        {
                            id: 5,
                            name: "Inner rear"
                        },
                    ]
                },
                {
                    id: 6,
                    name: "Door components",
                    productCategories: [
                        {
                            id: 1,
                            name: "Mirror"
                        },
                        {
                            id: 2,
                            name: "Side view mirror"
                        },
                        {
                            id: 3,
                            name: "Mirror trim"
                        },
                        {
                            id: 4,
                            name: "Mirror actuator"
                        },
                        {
                            id: 5,
                            name: "Inner rear"
                        },
                    ]
                },
                {
                    id: 7,
                    name: "Boot",
                    productCategories: [
                        {
                            id: 1,
                            name: "Mirror"
                        },
                        {
                            id: 2,
                            name: "Side view mirror"
                        },
                        {
                            id: 3,
                            name: "Mirror trim"
                        },
                        {
                            id: 4,
                            name: "Mirror actuator"
                        },
                        {
                            id: 5,
                            name: "Inner rear"
                        },
                    ]
                },

            ]
        },
        {
            id: 3,
            name: "Tires",
            subCategory: [

                {
                    id: 1,
                    name: "Mirror",
                    productCategories: [
                        {
                            id: 1,
                            name: "Mirror"
                        },
                        {
                            id: 2,
                            name: "Side view mirror"
                        },
                        {
                            id: 3,
                            name: "Mirror trim"
                        },
                        {
                            id: 4,
                            name: "Mirror actuator"
                        },
                        {
                            id: 5,
                            name: "Inner rear"
                        },
                    ]
                },
                {
                    id: 2,
                    name: "Bumper",
                    productCategories: [
                        {
                            id: 1,
                            name: "Mirror"
                        },
                        {
                            id: 2,
                            name: "Side view mirror"
                        },
                        {
                            id: 3,
                            name: "Mirror trim"
                        },
                        {
                            id: 4,
                            name: "Mirror actuator"
                        },
                        {
                            id: 5,
                            name: "Inner rear"
                        },
                    ]
                },
                {
                    id: 3,
                    name: "Lock system",
                    productCategories: [
                        {
                            id: 1,
                            name: "Mirror"
                        },
                        {
                            id: 2,
                            name: "Side view mirror"
                        },
                        {
                            id: 3,
                            name: "Mirror trim"
                        },
                        {
                            id: 4,
                            name: "Mirror actuator"
                        },
                        {
                            id: 5,
                            name: "Inner rear"
                        },
                    ]
                },
                {
                    id: 4,
                    name: "Fender",
                    productCategories: [
                        {
                            id: 1,
                            name: "Mirror"
                        },
                        {
                            id: 2,
                            name: "Side view mirror"
                        },
                        {
                            id: 3,
                            name: "Mirror trim"
                        },
                        {
                            id: 4,
                            name: "Mirror actuator"
                        },
                        {
                            id: 5,
                            name: "Inner rear"
                        },
                    ]
                },
                {
                    id: 5,
                    name: "Bonnet",
                    productCategories: [
                        {
                            id: 1,
                            name: "Mirror"
                        },
                        {
                            id: 2,
                            name: "Side view mirror"
                        },
                        {
                            id: 3,
                            name: "Mirror trim"
                        },
                        {
                            id: 4,
                            name: "Mirror actuator"
                        },
                        {
                            id: 5,
                            name: "Inner rear"
                        },
                    ]
                },
                {
                    id: 6,
                    name: "Door components",
                    productCategories: [
                        {
                            id: 1,
                            name: "Mirror"
                        },
                        {
                            id: 2,
                            name: "Side view mirror"
                        },
                        {
                            id: 3,
                            name: "Mirror trim"
                        },
                        {
                            id: 4,
                            name: "Mirror actuator"
                        },
                        {
                            id: 5,
                            name: "Inner rear"
                        },
                    ]
                },
                {
                    id: 7,
                    name: "Boot",
                    productCategories: [
                        {
                            id: 1,
                            name: "Mirror"
                        },
                        {
                            id: 2,
                            name: "Side view mirror"
                        },
                        {
                            id: 3,
                            name: "Mirror trim"
                        },
                        {
                            id: 4,
                            name: "Mirror actuator"
                        },
                        {
                            id: 5,
                            name: "Inner rear"
                        },
                    ]
                },

            ]
        },

    ]
    const contents = new Map()
    contents.set("Categories", <CategoriesFilterSectionContent categories={categories} />)
    contents.set("Brands", <BrandsFilterSection />)
    contents.set("Car model", <CarModelFilterSection />)

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <View >
                <View style={styles.filterHolder}>
                    <FilterHeader navigation={navigation} />
                </View>
                <ScrollView style={[styles.selectedListHolder]} horizontal={true} showsHorizontalScrollIndicator={false} >
                    {
                        data.map(item => (
                            <View key={item.id} style={styles.selectedItem}>
                                <Text style={styles.textSelectedItem}>{item.name}</Text>
                                <TouchableWithoutFeedback >
                                    <Ionicons name='close-outline' size={22} />
                                </TouchableWithoutFeedback>
                            </View>
                        ))
                    }
                </ScrollView>

            </View>
            <View style={styles.others}>
                <View style={styles.filters}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={data}
                        renderItem={({ item, index }) => (
                            <MeasurementCategoryItem setCurrentContent={setCurrentContent} targetTab={route.params.target} key={item.id} id={item.id} selectedId={selectedId} setSelectedId={setSelectedId} item={item} />
                        )}
                    />
                </View>
                <View style={styles.sideContent}>
                    {/* <CategoriesFilterSectionContent categories={categories} /> */}
                    {
                        contents.get(currentContent)
                    }
                </View>
            </View>
            <View style={styles.bottomSection}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("productList")}>
                    <Text style={styles.clearAllText}>Clear all</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("productList")}>
                    <View style={styles.applyButton}>
                        <Text style={styles.applyText}>Apply</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>


        </SafeAreaView>
    )
}

export default MainFilter