import { Dimensions, StyleSheet } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
const { width, height } = new Dimensions.get('screen')
export default StyleSheet.create({
    mainHolder: {
        width: "100%",
    },
    image: {
        width: 60,
        height: 60,
        marginRight: "3%",
        borderRadius: 5
    },
    contentHolder: {
        borderBottomColor: globalStyles.colors.green,
        borderTopColor: globalStyles.colors.primaryGray,
        borderBottomWidth: .5,
        borderTopWidth: 1,
        width: "100%",
        paddingVertical: "2%",
        flexDirection: "row",
        // marginVertical: "1%"
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
        justifyContent: "flex-end",
        flex: 1,

    },
    deleteTextHolder: {
        alignItems: "center",
        alignSelf: "flex-end",
        marginTop: "1%",
        marginBottom: "1%",
        marginRight: "4%"
    },
    fab: {

        margin: 4,
        marginHorizontal: 6

    },
})