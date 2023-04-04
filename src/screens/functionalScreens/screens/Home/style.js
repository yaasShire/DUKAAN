import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    miniHolder: {
        padding: 15,
        height: height,
    },
    infoCardsHolder: {
        marginBottom: "4%",

    },
    mainCardsHolder: {

    },
    sellerActionCardHolder: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    newOrdersText: {
        fontSize: 19,
        fontWeight: "600",
        marginTop: '6%',
        marginBottom: '5%'
    },
    actionCards: {
        backgroundColor: "#fff",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#dedede"
    },
    cardAction: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: "2%",
        height: height / 14,
        borderBottomColor: "#dedede",
        borderBottomWidth: .5
    },

    actionName: {
        fontSize: 16,
        fontWeight: "600",
        marginLeft: "4%",
        opacity: .7
    },
    iconActionNameWrapper: {
        flexDirection: 'row',
        alignItems: "center"
    },
    messagCountWrapper: {
        backgroundColor: "red",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: "5%",
    },
    CardRightSection: {
        flexDirection: 'row',
        width: "40%",
        justifyContent: "flex-end"
    },
    messageNumber: {
        fontWeight: "500",
        color: "#fff"
    }


})