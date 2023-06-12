import { StyleSheet } from "react-native"
import { globalStyles } from "../../../globalConstants/styles"
export default StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: "4%",
        paddingHorizontal: 15,
        marginTop: "2%"
    },
    headerTitleWrapper: {
        flex: 1,
        alignItems: "center"
    },
    headerTitle: {
        fontSize: globalStyles.fontSizes.secondary,
        fontWeight: globalStyles.fontWeights.secondary,
        color: globalStyles.colors.tertiary

    },
    cancelText: {
        color: globalStyles.colors.blue
    },
    buttonHolder: {
        borderColor: globalStyles.colors.logoColor,
        borderRadius: 50,
        borderWidth: 3,
        padding: "1%",
        justifyContent: "center",
        alignItems: "center"
    },
    addButtonHolder: {
        backgroundColor: globalStyles.colors.logoColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        width: 40,
        height: 40
    },
    saveText: {
        color: globalStyles.colors.black,
        fontSize: globalStyles.fontSizes.secondary,
        fontWeight: globalStyles.fontWeights.secondary
    },
})