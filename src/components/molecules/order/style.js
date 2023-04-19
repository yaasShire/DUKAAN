import { Dimensions, StyleSheet } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    orderCard: {
        backgroundColor: globalStyles.colors.miniPrimary,
        height: height / 4.2,
        width: "100%",
        borderRadius: 6,
        borderColor: "#c2c1bc",
        borderWidth: .5,

    },
    orderNumber: {
        fontSize: globalStyles.fontSizes.secondary,
        fontWeight: globalStyles.fontWeights.secondary,
        color: globalStyles.colors.tertiary
    },
    orderStage: {
        color: globalStyles.colors.orange,
        fontSize: 14,
        fontWeight: "500"
    },
    orderInfo1Holder: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    ammount: {
        fontSize: 18,
        fontWeight: globalStyles.fontWeights.tertiary,
        color: globalStyles.colors.orange,
        width: "30%",
        textAlign: "right"

    },
    imageOrderIdHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    orderStageHolder: {
        marginTop: '2%',
    },
    orderInfo: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: '5%',
        paddingVertical: '2%',
        marginBottom: '2%'
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: "#dee0e3",
    },
    actionButtonsHolder: {
        paddingHorizontal: '6%',
        justifyContent: 'space-between',
        alignItems: "center",
        flex: 1,
        flexDirection: "row",

    },

    nameHolder: {
        paddingHorizontal: '3%',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: globalStyles.colors.miniPrimary,
        borderWidth: 1,
        borderColor: "#dee0e3",
        paddingVertical: ".5%"
    },
    timePassedWrapper: {
        fontSize: 10,
        color: "gray",
        borderColor: "#dee0e3",
        borderWidth: 1,
        paddingHorizontal: "3%",
        borderRadius: 5,
        paddingVertical: ".5%"
    },
    timePassedText: {
        fontSize: globalStyles.fontSizes.primary2,
        color: globalStyles.colors.secondaryGray,
        borderColor: "#dee0e3",
    },
    nameMinutesHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: "6%",
        alignItems: 'center',
        paddingVertical: "3%"
    },
    textName: {
        fontSize: globalStyles.fontSizes.primary2,
        opacity: 0.7
    },
    statusHolder: {
        paddingHorizontal: '3%',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: globalStyles.colors.primaryGray,


    },
    statusText: {
        fontSize: globalStyles.fontSizes.primary2,
        color: globalStyles.colors.secondaryGray,
    },
    orderDeliveredCard: {
        backgroundColor: globalStyles.colors.blue,
        borderRadius: 5,
        justifyContent: "space-around",
        alignItems: "center",
        height: 45,
        width: 160,
        flexDirection: "row",
        paddingHorizontal: "1%"
    },
    deliveredText: {
        fontSize: 15,
        fontWeight: globalStyles.fontWeights.secondary,
        color: globalStyles.colors.miniPrimary
    }

})