import { View, Text, ScrollView, StatusBar, FlatList } from 'react-native'
import React from 'react'
import styles from './style'
import ProductSalesCard from '../../../../components/molecules/salesProductCard'

import ProductCard from '../../../../components/molecules/productCard'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppHeader from '../../../../components/molecules/header'
import Filter from '../../../../components/molecules/filter'
const TopSales = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      {/* <AppHeader showAddButton={true} navigation={navigation} menu={true} addproductButton={true} /> */}
      {/*filter  */}

      {/* <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ rowGap: 10, }}
        data={data}
        renderItem={({ item }) => (
          <ProductCard key={item.id} item={item} navigation={navigation} />
        )}
      /> */}

    </SafeAreaView>
  )
}

export default TopSales