import { View, Text, StatusBar, ScrollView, FlatList, TouchableWithoutFeedback, TextInput, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FilterHeader from '../../../../components/atoms/filterHeader';
import MeasurementCategoryItem from './measurementItem';
import SearchSelecDropDownCard from '../../../../components/atoms/searchSelectCard';

const MainFilter = ({ navigation }) => {
    const [selectedItem, setSelectedItem] = useState(true)
    const [sIndex, setSIndex] = useState(0)
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
            name: "Car"
        },
        {
            id: 2,
            name: "Brands"
        },
        {
            id: 3,
            name: "Car"
        },
        {
            id: 2,
            name: "Brands"
        },
        {
            id: 3,
            name: "Car"
        }


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
                <View style={styles.categoriesSection}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={data}
                        renderItem={({ item, index }) => (
                            <MeasurementCategoryItem key={item.id} sIndex={sIndex} index={index} setSIndex={setSIndex} item={item} selectedItem={selectedItem} />
                        )}
                    />
                </View>
                <View style={styles.searchSection}>
                    <View style={styles.searchHolder}>
                        <Ionicons name='ios-search-outline' size={15} color={'gray'} />
                        <TextInput placeholder='search' style={styles.input} />
                    </View>
                    <ScrollView>
                        {
                            categories.map(item => (
                                <SearchSelecDropDownCard item={item} />
                            ))
                        }
                        {/* <SearchSelecDropDownCard /> */}
                    </ScrollView>
                </View>
            </View>
            <View style={styles.bottomSection}>
                <Text style={styles.clearAllText}>Clear all</Text>
                <TouchableWithoutFeedback>
                    <View style={styles.applyButton}>
                        <Text style={styles.applyText}>Apply</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>


        </SafeAreaView>
    )
}

export default MainFilter