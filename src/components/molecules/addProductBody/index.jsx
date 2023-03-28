import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import styles from './style'
import SingleCategoryCard from '../../atoms/singCategoryCard';




const AddProductBody = ({ category, title, index }) => {
    const [selectedIndex, setSelectedIndex] = useState(-1)

    useEffect(() => {
        setSelectedIndex(-1)
    }, [index])


    return (
        <ScrollView style={styles.container}>
            <Text style={styles.textTitle}>{title}</Text>
            <View style={styles.categoriesHolder}>
                <View>
                    <ScrollView style={{}}>
                        {
                            category.map((category, index) => (
                                <SingleCategoryCard key={category.id} category={category}
                                    isShown={selectedIndex == index}
                                    index={index}
                                    onPress={(item) => setSelectedIndex(item)}
                                />
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}

export default AddProductBody