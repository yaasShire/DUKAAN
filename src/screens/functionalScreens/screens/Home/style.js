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
        marginBottom: '2%',
        // paddingBottom: 200
        // paddingVertical: '5%'
    },
    newOrdersText: {
        fontSize: 19,
        fontWeight: "600",
        marginTop: '6%',
        marginBottom: '5%'
    }


})