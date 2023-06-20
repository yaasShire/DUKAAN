import { StyleSheet } from "react-native";
import { globalStyles, screenPadding } from "../../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.colors.miniPrimary
    },
    imagesWrapper: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: screenPadding
    },
    description: {
        height: 150,
        justifyContent: "center",
        alignItems: 'center',
        padding: 20
    },
    descriptionText: {
        textAlign: "center",
        fontSize: 16,
        color: globalStyles.colors.secondaryGray
    }
})