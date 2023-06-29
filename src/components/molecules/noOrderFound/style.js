import { StyleSheet } from "react-native";
import { globalStyles, screenPadding } from "../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: screenPadding,
        backgroundColor: globalStyles.colors.miniPrimary,
    },
    image: {
        height: 200,
        width: 200,
        resizeMode: "cover"
    }
})