import { StyleSheet } from "react-native";
import { globalStyles } from "../../../../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        backgroundColor: globalStyles.colors.miniPrimary,
        height: 150,
        width: 150,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: globalStyles.colors.secondaryGray
    },
    image: {
        width: 90,
        height: 90,
        resizeMode: "contain"
    }
})