import { StyleSheet } from "react-native";
import { HeightDimension, globalStyles, screenPadding } from '../../../../../../globalConstants/styles/index'
export default StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: HeightDimension / 5.5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: globalStyles.colors.primaryGray,
        elevation: 2,
        padding: screenPadding
    },
    cardInfo: {
        // backgroundColor: "pink",
        height: "100%",
        justifyContent: "space-around",
        alignItems: "flex-start"
    },
    cardInfoRow: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center"

    },
    shopName: {
        marginLeft: "3%",
        fontWeight: "600",
        fontSize: 18
    },
    shopTelephone: {
        marginLeft: "3%",
        fontWeight: globalStyles.fontWeights.secondary,
        fontSize: 14,
        color: globalStyles.colors.tertiary
    },
    iconTextWrapper: {
        flexDirection: "row",
    },
    contentBetween: {
        justifyContent: "space-between"
    },
    salesWrapper: {
        alignItems: "center"
    },
    salesText: {
        fontWeight: globalStyles.fontWeights.secondary,
        fontSize: 14,
        color: globalStyles.colors.secondaryGray
    },
    salesValue: {
        fontWeight: globalStyles.fontWeights.tertiary,
        fontSize: 17
    },

})