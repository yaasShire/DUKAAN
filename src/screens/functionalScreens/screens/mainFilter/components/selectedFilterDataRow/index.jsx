import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './style'
import { Chip } from 'react-native-paper';
import { filterData } from '../../../../../../utils/utilityFunctions';
import FilterChip from '../chip';
const SelectedFilterDataRow = ({ data, stateData }) => {
    const dataFilterParameters = filterData(stateData)
    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.flatListStyle}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={dataFilterParameters}
                keyExtractor={(item) => item?.name}
                renderItem={({ item }) => (
                    <FilterChip data={item} />
                )}
            />
        </View>
    )
}

export default SelectedFilterDataRow