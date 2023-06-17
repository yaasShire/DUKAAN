import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './style'
const NoDataFiltered = ({ setProducts = () => { }, onPress = () => { }, setIsFilterEmpty = () => { }, route = {} }) => {
    return (
        <View style={styles.container}>
            <View style={styles.contentWrapper}>
                <Text style={styles.textNoData}>No product found</Text>
                <Pressable style={styles.seeAllBtn} onPress={() => {
                    onPress()
                    setIsFilterEmpty(false)
                    console.log(route)
                }}>
                    <Text style={styles.seeAllTxt}>See all</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default NoDataFiltered