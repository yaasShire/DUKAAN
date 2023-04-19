import { Dimensions, StyleSheet } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
const { width, height } = new Dimensions.get('screen')
export default StyleSheet.create({
    mainHolder: {
        width: "100%",
        // paddingVertical: "3%"
    },
    image: {
        width: 70,
        height: 70,
        marginRight: "3%"
    },
    contentHolder: {
        borderBottomColor: "#dce0e0",
        borderTopColor: "#dce0e0",
        borderBottomWidth: 1,
        borderTopWidth: 1,
        width: "100%",
        paddingVertical: "2%",
        flexDirection: "row"
    },
    productName: {
        fontWeight: "500"
    },
    numberOfSales: {
        color: globalStyles.colors.secondaryGray,
        fontSize: globalStyles.fontSizes.primary2
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
        opacity: .6,
        fontSize: globalStyles.fontSizes.primary2
    },
    availableQunatity: {
        fontSize: globalStyles.fontSizes.primary2,
        fontWeight: globalStyles.fontWeights.secondary,
    },
    salesQuantity: {
        fontSize: globalStyles.fontSizes.primary2,
        fontWeight: globalStyles.fontWeights.secondary,
        color: globalStyles.colors.black

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