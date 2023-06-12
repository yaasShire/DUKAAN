import { StyleSheet } from "react-native";
import { HeightDimension, WindowDimension } from "../../../../../../../utils/utilityFunctions";
import { globalStyles } from "../../../../../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        height: HeightDimension / 14,
        width: WindowDimension / 1.13,
        backgroundColor: "#e9f8ee",
        justifyContent: "flex-start",
        paddingHorizontal: "3%",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 10
    },
    pickText: {
        fontSize: 18,
        fontWeight: "500",
        color: globalStyles.colors.tertiary,
        marginLeft: 10
    }
})