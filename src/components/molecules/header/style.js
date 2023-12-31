import { StyleSheet } from "react-native";
import { globalStyles, screenPadding } from "../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 70,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(184, 191, 189, .3)',
        paddingHorizontal: screenPadding,
        backgroundColor: "#f8f9fb",
    },
    logoImageHolder: {
        width: "100%",
        alignItems: "center"
    },
    btnTextWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    logoImage: {
        width: 180,
        height: 40,
        resizeMode: "cover",
    },
    titleBackButtonWrapper: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontWeight: "500",
        fontSize: 19,
        alignSelf: "center",
        textAlign: "center",
        flex: 1,

    },
    addHolder: {
        backgroundColor: globalStyles.colors.logoColor,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    mainButtonHolder: {
        borderColor: globalStyles.colors.logoColor,
        borderWidth: 2,
        borderRadius: 25,
        flexDirection: "row",
        justifyContent: "flex-end",
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    addText: {
        fontSize: 11,
        fontWeight: "500",
        color: "#FFF"
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
        color: globalStyles.colors.logoColor
    },
    buttonHolder: {
        borderColor: "#00ffd5",
        borderWidth: 2,
        borderRadius: 50,
        padding: "1%",
        flexDirection: "row",
    },
    addButtonHolder: {
        backgroundColor: "#11bda0",
        width: 35,
        height: 35,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    saveText: {
        color: globalStyles.colors.black,
        fontSize: globalStyles.fontSizes.secondary,
        fontWeight: globalStyles.fontWeights.secondary
    },
    addButtonWrapper: {
    },
    filterBtn: {

    }
})