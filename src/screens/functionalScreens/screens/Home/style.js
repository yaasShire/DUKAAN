import { StyleSheet } from "react-native";
import { globalStyles, screenPadding } from "../../../../globalConstants/styles";
import { HeightDimension, WindowDimension } from "../../../../utils/utilityFunctions";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.style.whiteMode.secondaryColor
    },
    mainScroll: {
        height: "100%"
    },
    topContent: {
        backgroundColor: globalStyles.colors.logoColor,
        height: HeightDimension / 5,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: screenPadding,
        zIndex: 0,
        top: 24

    },
    bottomContent: {
        zIndex: 10,
        backgroundColor: globalStyles.colors.logoColor,
        marginTop: -2,
        minHeight: HeightDimension / 1.4,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,

    },
    subBottomContent: {
        backgroundColor: globalStyles.style.whiteMode.primarybgColor,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: screenPadding,
        height: "100%"

    },
    infoCardsWrapper: {
        columnGap: 10,
        padding: screenPadding,
    },
    sellerActionWrapper: {
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: "space-between"
    },
    recentOrdersWrapper: {
        marginVertical: "3%"
    },
    header: {
        fontSize: 18,
        fontWeight: "500"
    }
})