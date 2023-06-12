import { Dimensions, StyleSheet } from "react-native";
import { globalStyles } from "../../../../globalConstants/styles";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        flex: 1,
        // padding: 15,
        zIndex: -1,
        backgroundColor: globalStyles.colors.miniPrimary
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
        fontSize: 22,
        fontWeight: "600",
        color: globalStyles.colors.tertiary
    },
    insightTextHolder: {
        marginTop: "3%",
    },
    reportHolder: {
        // marginTop: "2%",
        alignItems: "center",
        paddingVertical: "3%",
    },
    chooseShopWrapper: {
        marginTop: "3%"
    },
    choseShopText: {
        fontSize: 13,
        fontWeight: "500",
        color: globalStyles.colors.tertiary
    },
    chooseReportText: {
        fontSize: 13,
        fontWeight: "500"
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
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,.2)"
    },
    reportText: {
        fontWeight: "500",
        fontSize: 16
    },
    reportsListHolder: {
        alignItems: "center",
        position: "absolute",
        top: 260,
        zIndex: 10,
        width: "100%"
    },
    shopsListHolder: {
        alignItems: "center",
        position: "absolute",
        top: 170,
        zIndex: 10,
        width: "100%"
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
        textAlign: "center",
        color: globalStyles.colors.tertiary
    },
    shopListText: {
        fontWeight: "500",
        fontSize: 16,
        textAlign: "center",
        color: globalStyles.colors.tertiary
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
    selectedShopMode: {
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
        color: globalStyles.colors.blue,
        fontSize: 19,
        marginBottom: "1%"
    },
    description2: {
        fontWeight: "500",
        fontSize: 15,
        marginVertical: "3%",
        // opacity: .5,
        color: globalStyles.colors.secondaryGray
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
        marginTop: "5%",
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
        color: globalStyles.colors.miniPrimary,
        fontSize: 19,
        fontWeight: "500",
        marginLeft: "5%"
    }
})