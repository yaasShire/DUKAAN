import { StyleSheet } from "react-native";
import { HeightDimension, WindowDimension } from "../../../../../../../utils/utilityFunctions";
import { globalStyles } from "../../../../../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        alignItems: "center",
    },
    subWrapper: {
        height: HeightDimension / 14,
        width: WindowDimension / 1.13,
        borderRadius: 10,
        zIndex: -10,
        borderWidth: 1
    },
    label: {
        fontSize: 14,
        fontWeight: "500"
    },
    listWrapper: {
        position: "absolute",
        top: 100,
        zIndex: 100,
        // backgroundColor: "#fff",
        width: "100%",
        borderWidth: .3,
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
        fontWeight: "700",
        fontSize: 15,
        marginBottom: '2%',
        marginLeft: -10
    }
})