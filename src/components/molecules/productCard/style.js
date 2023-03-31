import { Dimensions, StyleSheet } from "react-native";
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
        opacity: 0.6
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
        fontSize: 13
    },
    availableQunatity: {
        fontSize: 12,
        fontWeight: "400",
    },
    salesQuantity: {
        fontSize: 12,
        fontWeight: "400"

    },
    updateIcon: {
        borderColor: "#30bfbf",
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
        color: "#10e0e0"
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