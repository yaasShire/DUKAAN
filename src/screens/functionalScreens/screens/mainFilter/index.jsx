import { View, Text, StatusBar, ScrollView, FlatList, TouchableWithoutFeedback, TextInput, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FilterHeader from '../../../../components/atoms/filterHeader';
import MeasurementCategoryItem from './measurementItem';
import SearchSelecDropDownCard from '../../../../components/atoms/searchSelectCard';
import CategoriesFilterSectionContent from '../../../../components/molecules/categoriesFilterSection';
import BrandsFilterSection from '../../../../components/molecules/subCategorySection';
import CarModelFilterSection from '../../../../components/molecules/productCategorySection';
import SubCategorySection from '../../../../components/molecules/subCategorySection';
import ProductCategorySection from '../../../../components/molecules/productCategorySection';
import ApplyButton from './components/applyButton';
import SelectedFilterDataRow from './components/selectedFilterDataRow';
import { useSelector } from 'react-redux';
import ShopSectionCard from '../../../../components/molecules/shopSectionCard';
import AppLoader from '../../../../components/molecules/AppLoader';
const MainFilter = ({ navigation, route }) => {
    const [selectedItem, setSelectedItem] = useState(true)
    const [selectedId, setSelectedId] = useState(1)
    const [currentContent, setCurrentContent] = useState("Main category")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const data = [
        {
            id: 1,
            name: "Main category"
        },
        {
            id: 2,
            name: "Sub category"
        },
        {
            id: 3,
            name: "Product category"
        },
        {
            id: 4,
            name: "Shop"
        },



    ]
    const stateData = useSelector(state => state.productsFilter)

    const contents = new Map()
    contents.set("Main category", <CategoriesFilterSectionContent />)
    contents.set("Sub category", <SubCategorySection />)
    contents.set("Product category", <ProductCategorySection />)
    contents.set("Shop", <ShopSectionCard />)
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <StatusBar barStyle={'light-content'} />
            <FilterHeader navigation={navigation} />
            <SelectedFilterDataRow stateData={stateData} data={data} />
            <View style={styles.others}>
                <View style={styles.filters}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={data}
                        renderItem={({ item, index }) => (
                            <MeasurementCategoryItem setCurrentContent={setCurrentContent} targetTab={route.params.target} key={item.id} id={item.id} selectedId={selectedId} setSelectedId={setSelectedId} item={item} />
                        )}
                    />
                </View>
                <View style={styles.sideContent}>
                    {/* <CategoriesFilterSectionContent categories={categories} /> */}
                    {
                        contents.get(currentContent)
                    }
                </View>
            </View>
            <View style={styles.bottomSection}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("productList")}>
                    <Text style={styles.clearAllText}>Clear all</Text>
                </TouchableWithoutFeedback>
                <ApplyButton setIsLoading={setIsLoading} setError={setError} navigation={navigation} />
            </View>
            {
                isLoading && (
                    <AppLoader />
                )
            }
        </View>
    )
}

export default MainFilter