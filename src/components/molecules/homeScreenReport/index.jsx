import { View, Text, Dimensions, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Feather from 'react-native-vector-icons/Feather';
import DropDown from "react-native-paper-dropdown";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
} from 'react-native-chart-kit';
const HomeScreenReport = () => {
    const [showDropDownList, setShowDropDownList] = useState(false)
    const [selectedSearchItem, setSelectedSearchItem] = useState({
        id: 1,
        name: "Last Week"
    })
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
    const colorList = [
        {
            label: "White",
            value: "white",
        },
        {
            label: "Red",
            value: "red",
        },
        {
            label: "Blue",
            value: "blue",
        },
        {
            label: "Green",
            value: "green",
        },
        {
            label: "Orange",
            value: "orange",
        },
    ];
    const reportSearches = [
        {
            id: 1,
            name: "Last week"
        },
        {
            id: 2,
            name: "Last Month"
        },
        {
            id: 3,
            name: "Last Two Months"
        },
    ]
    return (
        <View style={styles.reportContainer}>
            <View style={styles.dropdownWrapper}>
                <View>
                    <Text style={styles.salesTextTitle}>Sales statistics</Text>
                </View>
                <View>
                    <TouchableWithoutFeedback onPress={() => {
                        setShowDropDownList(prev => !prev)
                    }}>
                        <View style={styles.dropDownButton}>
                            <Text style={styles.valueText}>{selectedSearchItem?.name}</Text>
                            <Feather name='chevron-down' size={18} color={'gray'} />
                        </View>
                    </TouchableWithoutFeedback>
                    {
                        showDropDownList && (
                            <View style={styles.listHolder}>
                                {
                                    reportSearches.map(searchItem => (
                                        <TouchableOpacity key={searchItem.id} style={[selectedSearchItem?.id == searchItem.id ? styles.selectedListItem : styles.singleListItem]} onPress={() => {
                                            setSelectedSearchItem(searchItem)
                                            setShowDropDownList(false)
                                        }}>
                                            <Text style={styles.listItemText}>{searchItem.name}</Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                        )
                    }
                </View>

            </View>
            <View style={styles.chartWrapper}>
                <BarChart
                    chartConfig={chartConfig}

                    data={{
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
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
                    width={Dimensions.get('window').width - 43} // from react-native
                    height={260}
                    yAxisLabel={'$'}
                    chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#076c73",
                        backgroundGradientTo: "#13afba",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(2555, 2555, 2555, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        // fillShadowGradientFrom: "red",
                        // fillShadowGradientTo: "orange",
                        style: {
                            borderRadius: 16,
                            padding: 30,


                        },
                        propsForLabels: {
                            fontSize: 13,
                            fontWeight: "500"
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
            </View>
        </View>
    )
}

export default HomeScreenReport