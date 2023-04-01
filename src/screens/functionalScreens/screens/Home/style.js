import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EDEFF1",


    },
    miniHolder: {
        padding: 18,
        flex: 1
    },
    infoCardsHolder: {
        paddingVertical: '4%',
    },
    mainCardsHolder: {

    },
    sellerActionCardHolder: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    ordersHolder: {
        backgroundColor: "#FFFFFF",
        borderRadius: 7,
        padding: '2%',
        marginTop: 10,
        paddingVertical: 10
    },
    orderCardsHolder: {
        marginBottom: '2%'
    },
    newOrdersText: {
        fontSize: 19,
        fontWeight: "600",
        marginTop: '6%',
        marginBottom: '5%'
    },
    actionCards: {
        backgroundColor: "#fff",
        paddingVertical: "3%",
        borderRadius: 5,
    },
    cardAction: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: "2%",
        paddingHorizontal: "2%",
        marginTop: "1%",
        height: 50
    },
    divider: {
        borderBottomColor: "#e6ebe7",
        borderBottomWidth: 1,
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
    }


})