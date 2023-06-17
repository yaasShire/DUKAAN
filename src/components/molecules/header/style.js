import { StyleSheet } from "react-native";
import { globalStyles, screenPadding } from "../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 55,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(184, 191, 189, .3)',
        paddingHorizontal: screenPadding,
        backgroundColor: globalStyles.colors.miniPrimary
    },
    logoImageHolder: {
        width: 400,
        alignItems: "center"
    },
    logoImage: {
        width: 120,
        height: 40,
        resizeMode: "contain",
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
        justifyContent: "center",
        flex: 1,
        textAlign: "center"
    },
    addHolder: {
        backgroundColor: "#11bda0",
        width: 35,
        height: 35,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    mainButtonHolder: {
        borderColor: "#00ffd5",
        borderWidth: 2,
        borderRadius: 50,
        flexDirection: "row",
        justifyContent: "flex-end",
        width: 45,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
    },
    addText: {
        fontSize: 11,
        fontWeight: "500",
        color: "#FFF"
    },
    backButton: {
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