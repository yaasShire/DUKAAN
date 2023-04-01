import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: "5%",
        alignItems: "center",
        paddingRight: "40%"
    },
    titleText: {
        fontSize: 18,
        fontWeight: "500"
    },
    insightText: {
        backgroundColor: "pink"
    },
    insightText: {
        fontSize: 20,
        fontWeight: "500"
    },
    insightTextHolder: {
        marginTop: "8%",
    },
    reportHolder: {
        marginTop: "10%",
        alignItems: "center",
        paddingVertical: "3%"
    },
    reportInput: {
        // borderWidth: 1,
        backgroundColor: "#fff",
        elevation: 3,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: "5%",
        width: "100%",
        height: 60,
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
        width: "85%",
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
        marginBottom: "5%",
        opacity: .5
    }
})