import { StyleSheet } from "react-native";
import { globalStyles, screenPadding } from "../../../../globalConstants/styles";
import { HeightDimension } from "../../../../utils/utilityFunctions";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.style.whiteMode.primarybgColor
    },
    bottomSection: {
        backgroundColor: "#fff",
        // height: "100%",
        padding: screenPadding,
        zIndex: 10,
        height: HeightDimension / 1.19,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    namePriceSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    upperContent: {
        height: 350,
        width: "100%",
        zIndex: 0
    },
    name: {
        fontSize: 20,
        fontWeight: "700",
        color: globalStyles.colors.tertiary,
        textTransform: "capitalize"
    },

    priceValueWrapper: {
        justifyContent: "center",
        alignItems: "center",
    },
    priceTile: {
        fontSize: 14,
        fontWeight: "400",
        color: globalStyles.colors.secondaryGray
    },
    priceValue: {
        fontWeight: "700",
        fontSize: 20,
        marginTop: "5%"
    },
    availableBrandsText: {
        fontWeight: "600",
        fontSize: 16,
        textTransform: "capitalize",


    },
    brandsWrapper: {
        // backgroundColor: "pink",
        marginTop: "3%",
        paddingVertical: "3%"
    },
    brandWrapper: {
        backgroundColor: "#f5f0f0",
        borderRadius: 30,
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        borderColor: globalStyles.colors.primaryGray,
        elevation: 2
    },
    brandImage: {
        width: 50,
        height: 50,
        resizeMode: "center"
    },
    flatListStyle: {
        // columnGap: 10,
        width: "100%",
        paddingVertical: "3%",
        columnGap: 15
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
    infoCardsWrapper: {
    },
    brandWholeWrapper: {
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: 93
    },
    brandName: {
        fontWeight: "500",
        fontSize: 14
    },
    rowContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: "2%"
    },
    textTitle: {
        fontSize: 15,
        fontWeight: "600",
        color: globalStyles.colors.tertiary
    },
    valueText: {
        fontSize: 15,
        fontWeight: "700",
    },
    totalSalesValue: {
        fontSize: 20,
        fontWeight: "700",
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: globalStyles.colors.logoColor,
        marginRight: "2%"
    },
    dotTextValueWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        minWidth: 52,
    },
    dotDetailTextValueWrapper: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        minWidth: 52,
    },
    sectionLabel: {
        fontSize: 16,
        fontWeight: "600"
    },
    detailsSection: {
        marginTop: "2%"
    },
    detaileWrapper: {
        minWidth: 52,
    },
    rowDetailContent: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: "2%"
    },
    totalSalesWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: "3%"
    },
    fab: {
        // position: 'absolute',
        // margin: 16,
        // right: 0,
        // bottom: 50,
        width: 50,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: globalStyles.colors.logoColor,
    },

})