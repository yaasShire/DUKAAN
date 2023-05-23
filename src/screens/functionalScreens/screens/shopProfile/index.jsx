import { View, Text, StatusBar, Platform, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import styles from './style'
import mechanicBanner from '../../../../assets/mechanicB.jpg'
import profile from '../../../../assets/justin.jpg'
import product1 from '../../../../assets/sProduct1.png'
import product2 from '../../../../assets/sProduct2.png'
import product3 from '../../../../assets/sProduct3.png'
import product4 from '../../../../assets/sProduct4.png'
import product5 from '../../../../assets/sProduct5.png'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import DecisionButton from '../../../../components/atoms/decisionButton'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppHeader from '../../../../components/molecules/appHeader'
import { GridList, GridListItem, GridView } from 'react-native-ui-lib'
import { Feather } from '@expo/vector-icons'
import { globalStyles } from '../../../../globalConstants/styles'
const ShopProfile = ({ navigation, route }) => {
    const data = [
        {
            id: 1,
            name: "Moto Cleaner",
            image: product1,
            stock: 500
        },
        {
            id: 2,
            name: "Gasoline",
            image: product2,
            stock: 700
        },
        {
            id: 3,
            name: "Engine Oil",
            image: product3,
            stock: 900
        },
        {
            id: 4,
            name: "Jumper",
            image: product4,
            stock: 300
        },
        {
            id: 5,
            name: "Side Mirror",
            image: product5,
            stock: 850
        },
    ]
    const ShopHeader = () => (
        <View>
            <Text>Products</Text>
        </View>
    )
    // defaultSource={product1}
    // blurRadius={15}
    // loadingIndicatorSource
    // onError
    // onLoadStart
    // onLoadEnd
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={Platform.OS == 'android' ? 'light-content' : 'dark-content'} />
            <ImageBackground onLoadEnd={() => console.warn('load end')} onLoadStart={() => console.warn('load started')} fadeDuration={2000} blurRadius={15} style={styles.bannerWrapper} source={mechanicBanner}>
                <AppHeader title={"Shop Profile"} navigation={navigation} color={"#fff"} />
            </ImageBackground>
            <View style={styles.miniWrapper}>
                <View style={styles.cardWrapper}>
                    <View style={styles.profileCard}>
                        <View style={styles.profileImageWrapper}>
                            <Image accessible={false} source={route.params.data.image} style={styles.image} />
                        </View>
                        <View style={styles.shopNameLocationWrapper}>
                            <Text style={styles.shopName}>{route.params.data.name}</Text>
                            <Text style={styles.locationText}>Muqdisho, Benadir</Text>
                        </View>
                        <View style={styles.infoWrapper}>
                            <View style={styles.singleInfoWrapper}>
                                <Text style={styles.singleInfoWrapperTitle}>Purchased</Text>
                                <Text style={styles.singleInfoWrapperValue}>{route.params.data.purchased}</Text>
                            </View>
                            <View style={styles.singleInfoWrapper}>
                                <Text style={styles.singleInfoWrapperTitle}>Wished</Text>
                                <Text style={styles.singleInfoWrapperValue}>{route.params.data.wished}</Text>
                            </View>
                            <View style={styles.singleInfoWrapper}>
                                <Text style={styles.singleInfoWrapperTitle}>Liked</Text>
                                <Text style={styles.singleInfoWrapperValue}>{route.params.data.liked}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomContentWrapper}>
                    <View style={styles.productsWrapperTitle}>
                        <Text style={styles.productsWrapperTitleText}>Products</Text>
                        <View style={styles.sellAllWrapper}>
                            <Text>See all</Text>
                            <TouchableOpacity>
                                <Feather size={23} color={globalStyles.colors.secondaryGray} name='chevron-right' />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <FlatList
                        horizontal={true}
                        contentContainerStyle={{ columnGap: 10 }}
                        showsHorizontalScrollIndicator={false}
                        data={route.params.data.images}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.singleProductWrapper}>
                                <View style={styles.productImageWrapper}>
                                    <Image source={item.image} style={styles.productImage} />
                                </View>
                                <View style={styles.productNameStockWrapper}>
                                    <Text style={styles.productName}>{item.name}</Text>
                                    <Text style={styles.availableStock}>{item.stock}pieces</Text>
                                </View>
                            </View>
                        )}
                    />
                    <View style={styles.buttonsHolder}>
                        <DecisionButton title="Cancel" navigation={navigation} />
                        <DecisionButton title="Update Shop" navigation={navigation} />

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ShopProfile 