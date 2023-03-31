import { View, Text, TouchableWithoutFeedback, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Checkbox } from 'react-native-paper';
const SearchSelecDropDownCard = ({ item }) => {
    const [showSubCategory, setShowSubCategory] = useState(false);
    const [showProductCategory, setShowProductCategory] = useState(false);
    const [checked, setChecked] = React.useState(false);
    const [subCategoryId, setSubCategoryId] = useState(null)
    return (
        <View style={[styles.wholeCard, { backgroundColor: showSubCategory ? "#e1e6e2" : "#FFF" }]}>
            <TouchableWithoutFeedback onPress={() => {
                setShowSubCategory(prev => !prev)
                setShowProductCategory(false)
            }}>
                <View style={[styles.card, { backgroundColor: showSubCategory ? "#e1e6e2" : "#FFF" }]}>
                    <Text style={[styles.text, { color: showSubCategory ? 'red' : "black" }]}>{item.name}</Text>
                    <Ionicons style={styles.dropdownIcon} name={showSubCategory ? 'md-chevron-up' : 'md-chevron-down'} size={19} />
                </View>
            </TouchableWithoutFeedback>
            {
                (showSubCategory) && (
                    <ScrollView>
                        {
                            item.subCategory.map(item => (
                                <View key={item.id}>
                                    <TouchableWithoutFeedback onPress={() => {
                                        setSubCategoryId(item.id)
                                        setShowProductCategory(prev => !prev)
                                        // setShowSubCategory(prev => !prev)
                                    }}>
                                        <View style={[styles.subCategoryCard, { backgroundColor: showSubCategory ? "#e1e6e2" : "#FFF" }]}>
                                            <Text style={[styles.subCategoryText, { color: showProductCategory ? 'red' : "black" }]}>{item.name}</Text>
                                            <Ionicons style={styles.dropdownIcon} name={showProductCategory ? 'md-chevron-up' : 'md-chevron-down'} size={19} />
                                        </View>
                                    </TouchableWithoutFeedback>
                                    {
                                        (showProductCategory && showSubCategory) && (
                                            <ScrollView>
                                                {
                                                    item.productCategories.map(item => (
                                                        <View style={styles.productCategory} key={item.id}>
                                                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                                                <Checkbox
                                                                    uncheckedColor='green'
                                                                    color='yellow'
                                                                    status={checked ? 'checked' : 'unchecked'}
                                                                    onPress={() => {
                                                                        setChecked(!checked);
                                                                    }}
                                                                />
                                                                <Text>{item.name}</Text>
                                                            </View>

                                                        </View>
                                                    ))

                                                }
                                            </ScrollView>
                                        )
                                    }
                                </View>
                            ))
                        }
                    </ScrollView>

                )

            }
            {/* {
                (showProductCategory && showSubCategory) && (
                    <ScrollView>
                        {
                            item.subCategory.productCategories.map(item => (
                                <View style={styles.productCategory}>
                                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                        <Checkbox
                                            uncheckedColor='green'
                                            color='yellow'
                                            status={checked ? 'checked' : 'unchecked'}
                                            onPress={() => {
                                                setChecked(!checked);
                                            }}
                                        />
                                        <Text>{item.name}</Text>
                                    </View>

                                </View>
                            ))

                        }
                    </ScrollView>
                )
            } */}
        </View>
    )
}

export default SearchSelecDropDownCard