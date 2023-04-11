import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        padding: 15,
        height,
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: '2%',
        paddingVertical: '3%',
        alignItems: 'center',
        borderBottomColor: "#dee0e3",
        borderBottomWidth: 1,
        marginBottom: "5%",
        justifyContent: "space-between",
        paddingRight: "38%"
    },
    divider: {
        borderBottomColor: "#dee0e3",
        borderBottomWidth: .5,
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

    orderDetailCard: {
        backgroundColor: "#FFFFFF",
        padding: '3%',
        width: width - 30,
        paddingVertical: '5%',
        borderRadius: 6,
        borderColor: "#dedede",
        borderWidth: 1
    },
    orderNumber: {
        fontSize: 16,
        fontWeight: "500",
    },
    customerName: {
        fontSize: 14,
        fontWeight: "400",
        opacity: .7
    },
    nameHolder: {
        borderColor: "#dedede",
        borderWidth: 1,
        width: '60%',
        height: height / 30,
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    locationTextTitle: {
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        opacity: .7
    },
    locationSection: {
        marginTop: '5%'
    },
    divider: {
        borderBottomWidth: 1,
        borderColor: '#dedede',
        opacity: 1,
        width: "100%",
        marginTop: '5%'
    },
    locationInfoHolder: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '5%',
        justifyContent: 'space-between'
    },
    locationText: {
        fontSize: 16,
        opacity: .7,
    },
    locationIconNameHolder: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",

    },
    countryCityHolder: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-around",
        width: width / 2.7
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
        width: width - 30,
        marginTop: '3%',
        paddingVertical: '5%',
        paddingHorizontal: '4%',
        borderWidth: 1,
        borderColor: '#dedede',
        borderRadius: 6
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
        fontWeight: "500"
    },
    totalAmmountWapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff",
        width: width - 30,
        paddingHorizontal: "5%",
        marginTop: "5%",
        height: height / 10,
        borderRadius: 6,
        borderColor: '#dedede',
        borderWidth: 1


    },
    completedHolder: {
        backgroundColor: "#37997f",
        padding: "3%",
        borderRadius: 50,
        paddingHorizontal: "5%"
    },
    completedText: {
        color: "#fff",
        fontWeight: "500"
    },
    totalAmmountText: {
        fontWeight: "500",
        fontSize: 14,
        opacity: .5
    },
    titleMoneyWrapper: {
        flex: 1,
    },
    totalMoney: {
        fontWeight: "700",
        fontSize: 19
    },
    nameDateWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    dateText: {
        opacity: .5,
        fontWeight: "400"
    },
    decisionButtonHolder: {
        width: width - 35,
        height: 80,
        marginTop: '8%',
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: 'row',

    }

})
