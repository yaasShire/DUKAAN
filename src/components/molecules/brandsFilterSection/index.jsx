import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import BrandCard from '../brandCard'
import lambo from '../../../assets/lambo.png'
import toyota from '../../../assets/toyota.png'
import ferrari from '../../../assets/ferrari.png'
import buggati from '../../../assets/buggati.png'
import bmw from '../../../assets/bmw.png'
import honda from '../../../assets/honda.png'
const BrandsFilterSection = () => {
    const brands = [
        {
            id: 1,
            name: "Honda",
            image: honda
        },
        {
            id: 2,
            name: "Ferrari",
            image: ferrari
        },
        {
            id: 3,
            name: "Buggati",
            image: buggati
        },
        {
            id: 4,
            name: "Lambo",
            image: lambo
        },
        {
            id: 5,
            name: "Toyota",
            image: lambo
        },
        {
            id: 6,
            name: "BMW",
            image: bmw
        }
    ]
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Choose brand</Text>
            </View>
            <View style={styles.cardsHolder}>
                {
                    brands.map(brand => (
                        <BrandCard key={brand.id} brand={brand} />
                    ))
                }

            </View>
        </View>
    )
}

export default BrandsFilterSection