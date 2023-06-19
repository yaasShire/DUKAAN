import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import Label from '../label'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import ProductSmallCard from '../../../../../../components/molecules/productSmallCard'
const OtherProducts = ({ products }) => {
    return (
        <View style={styles.container}>
            <Label label={'Other Products'} />
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={products}
                contentContainerStyle={styles.productsListWrapper}
                keyExtractor={(item) => item?.UPID}
                renderItem={({ item }) => (
                    <ProductSmallCard product={item} />
                )}
            />
        </View>
    )
}

export default OtherProducts