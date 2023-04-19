import { Dimensions, StyleSheet } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
const { width, height } = new Dimensions.get('screen')
export default StyleSheet.create({
    mainHolder: {
        width: "100%",
    },
    image: {
        width: 70,
        height: 70,
        marginRight: "3%"
    },
    contentHolder: {
        borderBottomColor: globalStyles.colors.primaryGray,
        borderTopColor: globalStyles.colors.primaryGray,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        width: "100%",
        paddingVertical: "2%",
        flexDirection: "row"
    },
    productName: {
        fontWeight: globalStyles.fontWeights.tertiary
    },
    numberOfSales: {
        color: globalStyles.colors.secondaryGray,
        fontSize: globalStyles.fontSizes.primary2,

    },
    salesHolder: {
        flexDirection: "row",
        alignItems: "center"
    },
    availabelHolder: {
        flexDirection: "row",
        alignItems: "center"
    },
    availableText: {
        color: globalStyles.colors.secondaryGray,
        fontSize: globalStyles.fontSizes.primary2,
    },
    availableQunatity: {
        fontSize: 12,
        fontWeight: "400",
    },
    salesQuantity: {
        fontSize: globalStyles.fontSizes.primary2,
        fontWeight: globalStyles.fontWeights.secondary

    },
    updateIcon: {
        borderColor: globalStyles.colors.blue,
        borderWidth: 2,
        width: 23,
        height: 23,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: "center"
    },
    buttonIconTextHolder: {
        alignItems: "center",
        alignSelf: "flex-end",
        marginTop: "1%",
        marginBottom: "1%",
        marginRight: "4%"
    },
    textAction: {
        fontSize: 13,
        color: globalStyles.colors.blue
    },
    actionsHolder: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    deleteTextHolder: {
        alignItems: "center",
        alignSelf: "flex-end",
        marginTop: "1%",
        marginBottom: "1%",
        marginRight: "4%"
    }
})