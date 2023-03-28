import { View, Text, StatusBar, TouchableWithoutFeedback, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntiDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Product1 from '../../../../assets/product1.jpg'
import Product2 from '../../../../assets/product2.jpg'
import Product3 from '../../../../assets/product3.jpg'
import Product4 from '../../../../assets/product4.jpg'
import Product5 from '../../../../assets/product7.jpg'
import Product6 from '../../../../assets/product9.jpg'
const Shops = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <View style={styles.curve} />
            <View style={styles.header}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <Ionicons name='arrow-back' size={30} color="#000" />
                </TouchableWithoutFeedback>
                <Text style={styles.headerText}>Shops</Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("addShop")}>
                    <View style={styles.addButtonHolder}>
                        <FontAwesome name='plus' size={25} color="#fff" />
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <ScrollView style={styles.cards}>
                <View style={styles.shopCard}>

                    <Image source={Product1} style={styles.image} />
                    <View style={styles.infoHolder}>
                        <Text style={styles.shopName}>Xiin Faniin</Text>
                        <View style={styles.productsHolder}>
                            <AntiDesign name='CodeSandbox' size={19} />
                            <Text style={styles.stockText}>1000 products</Text>
                        </View>
                    </View>
                    <MaterialCommunityIcons name='dots-vertical' size={30} style={styles.dotIcon} />
                </View>
                <View style={styles.shopCard}>

                    <Image source={Product2} style={styles.image} />
                    <View style={styles.infoHolder}>
                        <Text style={styles.shopName}>Diamond</Text>
                        <View style={styles.productsHolder}>
                            <AntiDesign name='CodeSandbox' size={19} />
                            <Text style={styles.stockText}>8000 products</Text>
                        </View>
                    </View>
                    <MaterialCommunityIcons name='dots-vertical' size={30} style={styles.dotIcon} />
                </View>
                <View style={styles.shopCard}>

                    <Image source={Product3} style={styles.image} />
                    <View style={styles.infoHolder}>
                        <Text style={styles.shopName}>VIP CENTER</Text>
                        <View style={styles.productsHolder}>
                            <AntiDesign name='CodeSandbox' size={19} />
                            <Text style={styles.stockText}>7000 products</Text>
                        </View>
                    </View>
                    <MaterialCommunityIcons name='dots-vertical' size={30} style={styles.dotIcon} />
                </View>
                <View style={styles.shopCard}>

                    <Image source={Product4} style={styles.image} />
                    <View style={styles.infoHolder}>
                        <Text style={styles.shopName}>GUULEED</Text>
                        <View style={styles.productsHolder}>
                            <AntiDesign name='CodeSandbox' size={19} />
                            <Text style={styles.stockText}>5000 products</Text>
                        </View>
                    </View>
                    <MaterialCommunityIcons name='dots-vertical' size={30} style={styles.dotIcon} />
                </View>
                <View style={styles.shopCard}>

                    <Image source={Product6} style={styles.image} />
                    <View style={styles.infoHolder}>
                        <Text style={styles.shopName}>DAGAB</Text>
                        <View style={styles.productsHolder}>
                            <AntiDesign name='CodeSandbox' size={19} />
                            <Text style={styles.stockText}>9000 products</Text>
                        </View>
                    </View>
                    <MaterialCommunityIcons name='dots-vertical' size={30} style={styles.dotIcon} />
                </View>
            </ScrollView>
        </ScrollView>
    )
}

export default Shops