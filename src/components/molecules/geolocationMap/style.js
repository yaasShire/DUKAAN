import { StyleSheet } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
import { WidthDimension, HeightDimension } from "../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: HeightDimension,
        width: WidthDimension
    },
    mapStyle: {
        height: HeightDimension,
        width: WidthDimension
    },
    fabWrapper: {
        margin: 16,
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: globalStyles.colors.logoColor
    },
    fab: {
        margin: 16,
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: globalStyles.colors.logoColor
    },
})