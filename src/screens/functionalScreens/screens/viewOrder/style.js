import { Dimensions, StyleSheet } from "react-native";
import { globalStyles, screenPadding } from "../../../../globalConstants/styles";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.style.whiteMode.primarybgColor
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
        // alignItems: 'center',
        // width: "100%",
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
        borderRadius: 6,
        borderColor: "#dedede",
        borderWidth: 1,
        elevation: 1
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
        height: height / 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: "3%"
    },
    locationTextTitle: {
        fontSize: 16,
        fontWeight: "600",
        fontStyle: "normal",
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
        marginTop: '1%',
        justifyContent: 'space-between'
    },
    locationText: {
        fontSize: 15,
        opacity: .7,
    },
    locationIconNameHolder: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flex: 1
    },
    countryCityHolder: {
        flexDirection: 'row',
        flex: .5,
        alignItems: "center",
        justifyContent: "space-around",
        // width: width / 2.7
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
        padding: screenPadding,
        borderWidth: 1,
        borderColor: '#dedede',
        borderRadius: 6,
        elevation: 1

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
        paddingHorizontal: screenPadding,
        height: height / 10,
        borderRadius: 6,
        borderColor: '#dedede',
        borderWidth: 1,
        elevation: 1
    },
    completedHolder: {
        backgroundColor: globalStyles.colors.logoColor,
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
        alignItems: "center",
        marginTop: "3%"
    },
    dateText: {
        fontWeight: "400",
        color: globalStyles.colors.miniPrimary
    },
    decisionButtonHolder: {
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: 'row',
        flex: 1,

    },
    dateWrapper: {
        backgroundColor: globalStyles.colors.logoColor,
        borderRadius: 10,
        paddingHorizontal: "3%",
        paddingVertical: "1%"
    },
    acionButtonsWrapper: {
        flex: 1,
        rowGap: 30,
        padding: screenPadding
    },
    locationTitleWrapper: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    acceptedTextWrapper: {
        backgroundColor: globalStyles.colors.blue,
        height: 70,
        borderRadius: 50,
        padding: screenPadding,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    acceptedText: {
        fontSize: 18,
        fontWeight: globalStyles.fontWeights.tertiary,
        color: globalStyles.colors.miniPrimary
    },
    statusText: {
        fontSize: 18,
        fontWeight: globalStyles.fontWeights.tertiary,
        color: globalStyles.colors.miniPrimary,
        marginRight: 10
    }

})
