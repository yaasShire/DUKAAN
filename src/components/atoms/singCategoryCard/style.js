import { Dimensions, StyleSheet } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    categoryButtonHolder: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: "3%",
        height: height / 14,
        borderBottomColor: "#dedede",
        borderBottomWidth: 1,
        width: "100%",
    },

    categoryName: {
        fontWeight: "500",
        fontSize: 15,
        color: globalStyles.colors.tertiary
    }
})