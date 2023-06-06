import { StyleSheet } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        height: 55,
        marginBottom: 10,
        paddingHorizontal: 15,
    },
    logoImageHolder: {
        position: "absolute",
        right: "36%"
    },
    logoImage: {
        width: 120,
        height: 40,
        resizeMode: "contain",
    },
    title: {
        position: "absolute",
        right: 120,
        fontWeight: "500",
        fontSize: 19
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
        padding: "1%",
        flexDirection: "row",
    },
    addText: {
        fontSize: 11,
        fontWeight: "500",
        color: "#FFF"
    },
    backButton: {
        position: "absolute",
        right: 15
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
})