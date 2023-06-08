import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
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
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowColor: "#000",
        shadowOpacity: 1
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
        marginBottom: '5%',
        borderColor: "#dee0e3",
        borderWidth: 1,
        paddingVertical: "2%",
        paddingHorizontal: "3%",
        borderRadius: 6
    },
    productImage: {
        width: 65,
        height: 65,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#dedede",
        resizeMode: "contain"
    },
    productHolder: {

        backgroundColor: '#ffffff',
        width: "100%",
        marginTop: '10%',
        paddingVertical: '5%',
        paddingHorizontal: '4%'
    },
    productImageNameHolder: {
        flexDirection: 'row',
        alignItems: "center",
        width: "55%"
    },
    productName: {
        fontSize: 13,
        fontWeight: "500",
        marginLeft: '7%',
        opacity: .8
    },
    qtyHolder: {
        alignItems: 'center',
    },
    ammountHolder: {

        alignItems: 'center'
    },
    qtyText: {
        fontWeight: "500",
        opacity: .7
    },
    ammountText: {
        fontWeight: "500",
        opacity: .7
    },
    priceText: {
        fontWeight: "600"
    },
    qtyQuantity: {
        fontWeight: "600"
    },

})
