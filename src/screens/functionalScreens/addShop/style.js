import { Dimensions, StyleSheet } from "react-native";
import { globalStyles, screenPadding } from "../../../globalConstants/styles";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.colors.miniPrimary
    },
    contentHolder: {
        flex: 1,
        padding: screenPadding
    },
    subWrapper: {
        flex: 1,
        marginTop: 10
    }
})