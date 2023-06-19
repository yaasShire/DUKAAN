import { StyleSheet } from "react-native";
import { globalStyles, screenPadding } from "../../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.colors.miniPrimary,
    },
    productBodyHolder: {
        flex: 1,
        padding: screenPadding,
    },
    subWrapper: {
        flex: 1,
        marginTop: 10
    }


})