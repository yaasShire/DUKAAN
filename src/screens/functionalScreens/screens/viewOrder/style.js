import { StyleSheet } from "react-native";
export default StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingHorizontal: '2%',
        paddingVertical: '3%',
        alignItems: 'center'
    },
    mainHolder: {
        alignItems: 'center',
        width: "100%",
        // backgroundColor: 'pink',

    },
    orderDetailsText: {
        marginLeft: '25%',
        fontSize: 17,
        fontWeight: "600"
    },

    orderNameIdHolder: {
        backgroundColor: "#FFFFFF",
        padding: '3%',
        width: '95%',
        paddingVertical: '8%',
        borderRadius: 5,
        // shadowOffset: {
        //     width: 10,
        //     height: 10
        // },
        // shadowColor: "#000",
        // shadowOpacity: 1
    },
    orderNumber: {
        fontSize: 18,
        fontWeight: "500",
    },
    customerName: {
        fontSize: 13,
        fontWeight: "400",
        marginTop: '2%',
        color: 'black'
    },
    nameHolder: {
        backgroundColor: "pink",
        paddingHorizontal: '4%',
        paddingVertical: '0.5%',
        width: '48%',
        borderRadius: 20,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    locationText: {
        fontSize: 20,
        fontWeight: "500",
        fontStyle: "normal"
    },
    locationSection: {
        marginTop: '5%'
    },
    divider: {
        borderBottomWidth: 0.5,
        borderColor: 'gray',
        opacity: 0.5,
        width: "100%",
        marginTop: '10%'
    },
    locationInfoHolder: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '5%',
        justifyContent: 'space-around'
    },
    locationText: {
        fontSize: 16,
        opacity: .7,
    },
    locationIconNameHolder: {
        flexDirection: "row",
        alignItems: "center",

    },
    countryCityHolder: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-around",
        width: '40%'
    },
    product: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        marginBottom: '5%'
    },
    productImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'pink'
    },
    productHolder: {

        backgroundColor: '#ffffff',
        width: "100%",
        // shadowOffset: {
        //     width: 10,
        //     height: 10
        // },
        // shadowColor: "#000",
        // shadowOpacity: 1,
        // shadowRadius: 7,
        elevation: 5,
        marginTop: '10%',
        paddingVertical: '5%',
        paddingHorizontal: '4%'
    },
    productImageNameHolder: {
        flexDirection: 'row',
        alignItems: "center"
    },
    productName: {
        fontSize: 17,
        fontWeight: "500",
        marginLeft: '7%',
        marginBottom: '15%'
    },
    qtyHolder: {
        alignItems: 'center',
    },
    ammountHolder: {

        alignItems: 'center'
    },
    qtyText: {
        fontWeight: "700"
    },
    ammountText: {
        fontWeight: "700"
    },
    totalAmmount: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff",
        width: "100%",
        paddingHorizontal: "5%",
        paddingVertical: "4%",
        marginTop: "5%",
        // shadowOffset: {
        //     width: 10,
        //     height: 10
        // },
        // shadowColor: "#000",
        // shadowOpacity: 1,
        // shadowRadius: 7,
        // elevation: 5,

    },
    totalAmmountText: {
        fontWeight: "600",
        fontSize: 17
    },
    totalMoney: {
        fontWeight: "700",
        fontSize: 15
    },
    decisionButtonHolder: {
        width: "100%",
        height: 80,
        paddingVertical: "5%",
        marginTop: '15%',
        justifyContent: "space-around",
        paddingHorizontal: '10%',
        alignItems: "center",
        flexDirection: 'row'

    }

})
