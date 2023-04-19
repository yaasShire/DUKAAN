import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import ProductSalesCard from '../../../../components/molecules/salesProductCard'
import sProduct1 from '../../../../assets/sProduct1.png'
import sProduct2 from '../../../../assets/sProduct2.png'
import sProduct3 from '../../../../assets/sProduct3.png'
import sProduct4 from '../../../../assets/sProduct4.png'
import sProduct5 from '../../../../assets/sProduct5.png'
import sProduct6 from '../../../../assets/sProduct6.png'
import ProductCard from '../../../../components/molecules/productCard'
const TopSales = ({ navigation }) => {
  const data = [
    {
      id: 1,
      name: "Motor cleaner",
      image: sProduct1,
      price: 18,
      totalSales: 40,
      totalSalesAmmount: 600,
      inStock: 1000,
      inSales: 600,
      shipping: 8
    },
    {
      id: 2,
      name: "Gasoline",
      image: sProduct2,
      price: 20,
      totalSales: 50,
      totalSalesAmmount: 700,
      inStock: 2000,
      inSales: 900,
      shipping: 5
    },
    {
      id: 3,
      name: "Jumber",
      image: sProduct3,
      price: 28,
      totalSales: 80,
      totalSalesAmmount: 900,
      inStock: 2000,
      inSales: 700,
      shipping: 3
    },
    {
      id: 4,
      name: "Air conditioner",
      image: sProduct4,
      price: 13,
      totalSales: 60,
      totalSalesAmmount: 800,
      inStock: 1500,
      inSales: 900,
      shipping: 2
    },
    {
      id: 5,
      name: "Mirror",
      image: sProduct5,
      price: 9,
      totalSales: 300,
      totalSalesAmmount: 790,
      inStock: 500,
      inSales: 300,
      shipping: 7
    },
    {
      id: 6,
      name: "Side mirror",
      image: sProduct6,
      price: 12,
      totalSales: 600,
      totalSalesAmmount: 590,
      inStock: 2500,
      inSales: 900,
      shipping: 4
    },
  ]
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ rowGap: 0 }} showsVerticalScrollIndicator={false} >
      {
        data.map(item => (
          <ProductSalesCard item={item} navigation={navigation} key={item.id} />
        )
        )}
    </ScrollView>
  )
}

export default TopSales