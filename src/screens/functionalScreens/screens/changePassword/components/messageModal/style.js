import { StyleSheet } from "react-native";
import { globalStyles } from "../../../../../../globalConstants/styles";
export default StyleSheet.create({
    modelCard: {
        height: 250,
        backgroundColor: "#fff",
        elevation: 5,
        padding: "5%",
        paddingVertical: "15%",
        justifyContent: "space-around",
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: globalStyles.colors.logoColor
    },
    messageText: {
        fontWeight: "600",
        fontSize: 18,
        color: globalStyles.colors.tertiary
    },
    modalBtn: {
        borderRadius: 5,
        backgroundColor: globalStyles.colors.logoColor
    }
})