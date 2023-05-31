import { StyleSheet } from "react-native";
import { HeightDimension, WindowDimension } from "../../../utils/utilityFunctions";
export default StyleSheet.create({
    container: {
        alignItems: "center",
    },
    subWrapper: {
        height: HeightDimension / 14,
        width: WindowDimension / 1.13,
        backgroundColor: "#e9f8ee",
        borderRadius: 10,
        zIndex: -10,
    },
    label: {
        opacity: .4,
        fontSize: 14,
        fontWeight: "500"
    },
    listWrapper: {
        position: "absolute",
        top: 100,
        zIndex: 100,
        backgroundColor: "#fff",
        width: "100%",
        borderWidth: .3,
        borderRadius: 5,
        paddingVertical: "3%"
    },
    mainEroorWrapper: {
        backgroundColor: "#e8c3cd",
        paddingHorizontal: "5%",
        paddingVertical: "3%",
        width: WindowDimension / 1.5,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    errorText: {
        color: 'red'
    },
    title: {
        opacity: .4,
        fontSize: 14,
        fontWeight: "500",
    }
})