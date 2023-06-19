import { StyleSheet } from "react-native";
import { globalStyles } from "../../../../../../globalConstants/styles";
export default StyleSheet.create({
    card: {
        backgroundColor: "blue"
    },
    infoCard: {
        borderWidth: 1,
        borderColor: "gray",
        paddingVertical: "2%",
        marginVertical: "2%",
        borderRadius: 10,
        paddingHorizontal: "2%",
        borderColor: globalStyles.colors.primaryGray,
    },
})