import { View, Text, StatusBar, Platform, TextInput, TouchableOpacity, ScrollView, Dimensions, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from 'react-native-vector-icons/Feather';
import React, { useState } from 'react'
import styles from './syle'
import { LineChart } from 'react-native-charts-wrapper';

const Reports = () => {
    const [selectedReport, setSelectedReport] = useState({
        id: 1,
        name: "Monthly Income"
    })
    const [showReport, setShowReport] = useState(false)
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
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={Platform.OS == 'android' ? 'light-content' : 'dark-content'} />
            <View style={[styles.header]}>
                <Feather name='chevron-left' size={28} color='gray' />
                <Text style={styles.titleText}>Reports</Text>
            </View>
            <View style={styles.insightTextHolder}>
                <Text style={styles.insightText}>Insight Reports</Text>
            </View>
            <View style={styles.reportHolder}>
                <View style={styles.reportInput}>
                    <Text style={styles.reportText}>{selectedReport.name}</Text>
                    <TouchableWithoutFeedback onPress={() => setShowReport(prev => !prev)}>
                        <Feather name={showReport ? 'chevron-up' : 'chevron-down'} size={23} color='gray' />
                    </TouchableWithoutFeedback>
                </View>
            </View>
            {
                showReport && (
                    <View style={styles.reportsListHolder}>
                        <View style={styles.reportCardHolder}>
                            {insightResports.map(report => (
                                <TouchableOpacity onPress={() => setSelectedReport(report)} key={report.id} style={[styles.normalReportMode, (report.id == selectedReport.id && report.name == selectedReport.name) ? styles.selectedReportMode : ""]}>
                                    <Text style={[styles.reportListText]}>{report.name}</Text>
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
            <View>
                <LineChart style={styles.chart}
                    style={{ flex: 1 }}
                    data={{ dataSets: [{ label: "demo", values: [{ y: 1 }, { y: 2 }, { y: 1 }] }] }}
                />
            </View>

        </SafeAreaView>
    )
}

export default Reports