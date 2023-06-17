import { StyleSheet } from "react-native";
import { HeightDimension, globalStyles } from "../../../../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: HeightDimension
    },
    textNoData: {
        fontWeight: globalStyles.fontWeights.secondary,
        fontSize: 16,
    },
    contentWrapper: {
        marginBottom: 300,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    seeAllBtn: {
        backgroundColor: globalStyles.colors.logoColor,
        width: 90,
        height: 40,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    seeAllTxt: {
        color: globalStyles.colors.miniPrimary,
        fontWeight: globalStyles.fontWeights.secondary
    }
})