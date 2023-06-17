import { StyleSheet } from "react-native";
import { HeightDimension, globalStyles } from "../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        height: 40,
        justifyContent: "flex-start",
        paddingHorizontal: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    categoryText: {
        fontSize: 15,
        fontWeight: globalStyles.fontWeights.primary,
        textTransform: "capitalize"
    }
})