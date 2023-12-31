import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
import { globalStyles } from "../../../globalConstants/styles";
export default StyleSheet.create({
    reportContainer: {
        // width,
        zIndex: -2,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6
    },
    dropdownWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
        width: "100%",
        paddingHorizontal: "2%",
        height: height / 13,
        paddingVertical: "3%",
    },
    dropDownButton: {
        backgroundColor: "#fff",
        borderRadius: 5,
        // width: width / 3,
        paddingHorizontal: "4%",
        height: 30,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: "#dedede",
        zIndex: 1


    },
    chartWrapper: {
        zIndex: -1
    },
    salesTextTitle: {
        fontWeight: globalStyles.fontWeights.secondary,
        fontSize: globalStyles.fontSizes.primary2,
        textTransform: "uppercase",
        color: globalStyles.colors.secondaryGray
    },
    valueText: {
        color: globalStyles.colors.secondaryGray
    },
    listHolder: {
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#dedede",
        marginVertical: "12%",
        paddingVertical: "5%",
        position: "absolute",
        zIndex: 10,
        top: 20,
        right: 2,
        width: width / 3,
        borderColor: "#dedede",
        borderWidth: 2,
        borderRadius: 5,
    },
    singleListItem: {
        borderRadius: 4,
        padding: "2%",
        width: "95%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: "4%"
    },
    selectedListItem: {
        borderColor: "#dedede",
        borderRadius: 4,
        padding: "2%",
        borderWidth: 1,
        width: "95%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: "4%"
    },
    listItemText: {
        color: globalStyles.colors.secondaryGray,
        fontSize: globalStyles.fontSizes.primary2
    }
})