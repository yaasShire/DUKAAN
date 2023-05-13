import { View, Text, StatusBar, Platform, TextInput, TouchableOpacity, ScrollView, Dimensions, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from 'react-native-vector-icons/Feather';
import React, { useState } from 'react'
import styles from './syle'
import { Chart, VerticalAxis, HorizontalAxis, Line } from 'react-native-responsive-linechart'
import AppHeader from '../../../../components/molecules/header';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
} from 'react-native-chart-kit';
import { globalStyles } from '../../../../globalConstants/styles';
const Reports = ({ navigation }) => {
    const [selectedReport, setSelectedReport] = useState({
        id: 1,
        name: "Monthly Income"
    })
    const [selectedShop, setSelectedShop] = useState({
        id: 3,
        name: "Juba"
    })
    const [showReport, setShowReport] = useState(false)
    const [showShops, setShowShops] = useState(false)
    const insightResports = [
        {
            id: 1,
            name: "Monthly Income"
        },
        {
            id: 2,
            name: "Weekly Income"
        },
        {
            id: 3,
            name: "Yearly Income"
        },
    ]
    // shop data
    const shops = [
        {
            id: 1,
            name: "Hayat"
        },
        {
            id: 2,
            name: "Dalab"
        },
        {
            id: 3,
            name: "Juba"
        },
    ]
    // shop data ends here
    const data1 = [
        { x: -2, y: 1 },
        { x: -1, y: 0 },
        { x: 8, y: 13 },
        { x: 9, y: 11.5 },
        { x: 10, y: 12 }
    ]
    const data2 = [
        { x: -2, y: 15 },
        { x: -1, y: 10 },
        { x: 0, y: 12 },
        { x: 1, y: 7 },
        { x: 8, y: 12 },
        { x: 9, y: 13.5 },
        { x: 10, y: 18 }
    ]
    const chartConfig = {
        backgroundGradientFrom: "red",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={Platform.OS == 'android' ? 'light-content' : 'dark-content'} />
            <AppHeader title="Reports" navigation={navigation} color="#000" backButton={true} />
            <ScrollView showsVerticalScrollIndicator={false} style={{ height: Dimensions.get("window").height }}>

                <View style={styles.insightTextHolder}>
                    <Text style={styles.insightText}>Insight Reports</Text>
                </View>
                <View style={styles.chooseShopWrapper}>
                    <Text style={styles.choseShopText}>*Choose Shop</Text>
                    <TouchableOpacity style={styles.reportHolder} onPress={() => setShowShops(prev => !prev)}>
                        <View style={styles.reportInput}>
                            <Text style={styles.reportText}>{selectedShop.name}</Text>
                            <TouchableWithoutFeedback onPress={() => setShowShops(prev => !prev)}>
                                <Feather name={showReport ? 'chevron-up' : 'chevron-down'} size={23} color='gray' />
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.chooseReportText}>*Choose Plan</Text>
                    <TouchableOpacity style={styles.reportHolder} onPress={() => setShowReport(prev => !prev)}>
                        <View style={styles.reportInput}>
                            <Text style={styles.reportText}>{selectedReport.name}</Text>
                            <TouchableWithoutFeedback onPress={() => setShowReport(prev => !prev)}>
                                <Feather name={showReport ? 'chevron-up' : 'chevron-down'} size={23} color='gray' />
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableOpacity>
                </View>
                {
                    showReport && (
                        <View style={styles.reportsListHolder}>
                            <View style={styles.reportCardHolder}>

                                {insightResports.map(report => (
                                    <TouchableOpacity onPress={() => {
                                        setSelectedReport(report)
                                        setShowReport(false)
                                    }
                                    } key={report.id} style={[styles.normalReportMode, (report.id == selectedReport.id && report.name == selectedReport.name) ? styles.selectedReportMode : ""]}>
                                        <Text style={[styles.reportListText]}>{report.name}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    )
                }
                {
                    showShops && (
                        <View style={styles.shopsListHolder}>
                            <View style={styles.reportCardHolder}>

                                {shops.map(shop => (
                                    <TouchableOpacity onPress={() => {
                                        setSelectedShop(shop)
                                        setShowShops(false)
                                    }
                                    } key={shop.id} style={[styles.normalReportMode, (shop.id == selectedShop.id && shop.name == selectedShop.name) ? styles.selectedShopMode : ""]}>
                                        <Text style={[styles.shopListText]}>{shop.name}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    )
                }
                <View style={styles.descriptionsHolder}>
                    <Text style={styles.description1}>Monthly income >  200</Text>
                    <Text style={styles.description2}>This month's income is greater than last month</Text>
                </View>
                <View style={styles.chartHolder}>
                    {/* chart starts here */}
                    <LineChart
                        chartConfig={chartConfig}

                        data={{
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                    ],
                                },
                            ],
                        }}
                        width={Dimensions.get('window').width - 30} // from react-native
                        height={290}
                        yAxisLabel={'$'}
                        chartConfig={{
                            backgroundColor: "#e26a00",
                            backgroundGradientFrom: "#120f57",
                            backgroundGradientTo: "#057df5",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                        }}
                    />
                    {/* chart ends here */}
                </View>
                <View style={styles.buttonHolder}>
                    <TouchableOpacity style={styles.downloadButton}>
                        <Feather name='download' size={25} color={globalStyles.colors.miniPrimary} />
                        <Text style={styles.downloadText}>Download Report</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Reports