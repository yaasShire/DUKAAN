import { Dimensions, StyleSheet } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
import { WindowDimension } from "../../../utils/utilityFunctions";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    container: {
        alignItems: "flex-start",
        width: "100%",
        justifyContent: "center",
    },
    label: {
        fontSize: 14,
        fontWeight: "400",
        opacity: 0.4
    },
    input: {
        width: "100%",
        fontSize: 18,
        // color: globalStyles.colors.tertiary
        // backgroundColor: "#727575",
        color: "#000"
    },
    errorText: {
        color: "red"
    },
    errorHolder: {
        marginBottom: "4%"
    }
})