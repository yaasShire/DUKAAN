import { Dimensions, StyleSheet } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    fieldHolder: {
        alignItems: "flex-start",
        justifyContent: "center",
        zIndex: -10
    },
    inputHolder: {
        height: height / 14,
        width: width / 1.13,
        backgroundColor: globalStyles.colors.primaryColorRGB,
        borderRadius: 10,
        marginTop: "2%",
        // zIndex: -10
    },
    input: {
        width: "100%",
        minHeight: 60,
    },
    label: {
        opacity: .4,
        fontSize: 14,
        fontWeight: "500",
    },
    errorHolder: {
        backgroundColor: "#e8c3cd",
        paddingHorizontal: "3%",
        minWidth: width / 1.8,
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