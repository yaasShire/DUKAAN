import { StyleSheet } from "react-native";
import { HeightDimension, WindowDimension } from "../../../utils/utilityFunctions";
export default StyleSheet.create({
    container: {
        width: "99.9%",
        minHeight: 55,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderColor: "gray",
    },
    listWrapper: {
        // height: HeightDimension,
        // rowGap: 10,
        // padding: 10
    },
    labelStyle: {
        opacity: .4,
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 6,
    },
    dataRow: {
        borderWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 5,
        borderRadius: 5,
        height: 60,
        justifyContent: "center"
    },
    errorHolder: {
        backgroundColor: "#e8c3cd",
        paddingHorizontal: "3%",
        minWidth: WindowDimension / 1.8,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    errorText: {
        color: "red"
    },
    mainErrorHolder: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "3%"
    }
})