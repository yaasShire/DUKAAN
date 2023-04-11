import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    titleText: {
        fontSize: 18,
        fontWeight: "500"
    },
    insightText: {
        backgroundColor: "pink"
    },
    reportsTestHolder: {
        flex: 1,
        alignItems: "center"
    },
    insightText: {
        fontSize: 20,
        fontWeight: "500"
    },
    insightTextHolder: {
        marginTop: "5%",
    },
    reportHolder: {
        marginTop: "5%",
        alignItems: "center",
        paddingVertical: "3%"
    },
    reportInput: {
        backgroundColor: "#fff",
        elevation: 3,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: "3%",
        width: "100%",
        height: height / 12,
        borderRadius: 6
    },
    reportText: {
        fontWeight: "500",
        fontSize: 16
    },
    reportsListHolder: {
        alignItems: "center"
    },
    reportCardHolder: {
        backgroundColor: "#fff",
        width: "100%",
        // height: height / 4,
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 8,
        paddingVertical: "5%"
    },
    reportListText: {
        fontWeight: "500",
        fontSize: 16,
        textAlign: "center"
    },
    selectedReportMode: {
        borderColor: "#c5c7c7",
        borderWidth: 2,
        width: "90%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        borderRadius: 6

    },
    normalReportMode: {
        width: "90%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10

    },
    descriptionsHolder: {
        marginTop: "5%"
    },
    description1: {
        fontWeight: "500",
        color: "blue",
        fontSize: 19,
        marginBottom: "1%"
    },
    description2: {
        fontWeight: "500",
        fontSize: 15,
        marginVertical: "3%",
        opacity: .5
    },
    chartHolder: {
        marginTop: "5%",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: height / 3,
        padding: "1%"
    },
    buttonHolder: {
        justifyContent: "center",
        alignItems: "center",
        height: height / 7,
        marginTop: "20%",
    },
    downloadButton: {
        backgroundColor: "#0f7ff7",
        width: width / 1.1,
        height: height / 11,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 6,
    },
    downloadText: {
        color: "#fff",
        fontSize: 19,
        fontWeight: "500",
        marginLeft: "5%"
    }
})