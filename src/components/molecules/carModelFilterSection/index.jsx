import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import ModelSelectionCard from '../modelSelectionCard'
import superCar1 from '../../../assets/supercar1.png'
import superCar2 from '../../../assets/supercar2.png'
import superCar3 from '../../../assets/supercar3.png'
import superCar4 from '../../../assets/supercar4.png'
import superCar5 from '../../../assets/supercar5.png'
import CarModelFilterDropdown from '../../atoms/carModelFilterDropdown'
import CarModelCard from '../../atoms/carModelCard'
const CarModelFilterSection = () => {
    const [selectedBrand, setSelectedBrand] = useState({
        id: 1,
        name: "Ferrari"
    })
    const [selectedCarModel, setSelectedCarModel] = useState({
        id: 1,
        name: "Corrola"
    })
    const [selectedYearOfMake, setSelectedYearOfMake] = useState({
        id: 1,
        name: 2000
    })
    const [selectedCar, setSelectedCar] = useState({
        id: 1,
        name: "Lamborghini",
        image: superCar1
    })
    const cars = [
        {
            id: 1,
            name: "Lamborghini",
            image: superCar1
        },
        {
            id: 2,
            name: "Bughatti",
            image: superCar2
        },
        {
            id: 3,
            name: "Ferrari",
            image: superCar3
        },
        {
            id: 4,
            name: "Mercedes",
            image: superCar4
        },
        {
            id: 5,
            name: "BMW",
            image: superCar5
        },
    ]
    const brandDropdown = [

        {
            id: 1,
            name: "Ferrari"
        },
        {
            id: 2,
            name: "Buggati"
        },
        {
            id: 3,
            name: "Lamborghini"
        },
        {
            id: 4,
            name: "Mercedes"
        },
        {
            id: 5,
            name: "Toyota"
        },
    ]
    const carModelDropdown = [

        {
            id: 1,
            name: "Camry"
        },
        {
            id: 2,
            name: "Etios"
        },
        {
            id: 3,
            name: "Yaris"
        },
        {
            id: 4,
            name: "Qualis"
        },
        {
            id: 5,
            name: "Innova"
        },
    ]
    const yearOfMake = [
        {
            id: 1,
            name: 2000
        },
        {
            id: 2,
            name: 2030
        },
        {
            id: 3,
            name: 2050
        },
        {
            id: 4,
            name: 2010
        },
        {
            id: 5,
            name: 2020
        },
    ]
    return (
        <ScrollView style={styles.container}>
            <View>
                <ScrollView style={styles.cardsHolder} horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ columnGap: 10 }}>
                    {
                        cars.map(car => (
                            <CarModelCard key={car.id} car={car} selectedCar={selectedCar} setSelectedCar={setSelectedCar} />
                        ))
                    }
                </ScrollView>
            </View>
            <View style={{ height: "100%", }}>
                <CarModelFilterDropdown dropDown={brandDropdown} selected={selectedBrand} set={setSelectedBrand} />
                <CarModelFilterDropdown dropDown={carModelDropdown} selected={selectedCarModel} set={setSelectedCarModel} />
                <CarModelFilterDropdown dropDown={yearOfMake} selected={selectedYearOfMake} set={setSelectedYearOfMake} />
            </View>
        </ScrollView>
    )
}

export default CarModelFilterSection