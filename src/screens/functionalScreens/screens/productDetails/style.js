import { Dimensions, StyleSheet } from "react-native";
import { globalStyles } from "../../../../globalConstants/styles";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: globalStyles.colors.miniPrimary
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    miniScrollHolder: {
        flex: 1,

    },
    headerText: {
        fontSize: 17,
        fontWeight: "500",
        flex: 1,
        textAlign: "center"
    },
    divider: {
        borderBottomColor: "#e3e5e8",
        opacity: .5,
        borderWidth: .4,
        marginTop: "2%"
    },
    mainImageHolder: {
        alignItems: "center",
        marginTop: "2%",
        height: "25%",
        justifyContent: "center"
    },
    imageHolder: {
        backgroundColor: "#e3e1de",
        borderWidth: .5,
        borderColor: "#adaba8",
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        height: "90%",

    },
    backIconHolder: {
        // backgroundColor: "gray",
        padding: "2%"
    },
    image: {
        width: 150,
        height: 150
    },
    mainSubImagesHolder: {
        marginTop: "5%",
        paddingHorizontal: "1%",
        paddingVertical: "3%"

    },
    productSubImage: {
        backgroundColor: "#e3e1de",
        width: "25%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6
    },
    active: {
        borderColor: "green",
        borderWidth: 1
    },
    subImage: {
        width: 100,
        height: 100
    },
    productScrollHolder: {
    },
    contentHolder: {
        marginTop: "3%"
    },
    productName: {
        fontWeight: "500",
        fontSize: 18
    },
    stockHolder: {
        flexDirection: "row",
        alignItems: "center"
    },
    stockText: {
        fontWeight: "400",
        opacity: .7,
        fontSize: 15,
        fontWeight: "400"
    },
    stockQuantity: {
        fontSize: 15,
        fontWeight: "500",
        marginRight: "2%",
    },
    salesText: {
        fontWeight: "400",
        opacity: .7,
        fontSize: 15,
        fontWeight: "400"
    },
    salesQuantity: {
        marginRight: "2%",
        fontSize: 15,
        fontWeight: "500"
    },
    salesHolder: {
        flexDirection: "row",
        alignItems: "center"
    },
    featuresDetailsHolder: {
        paddingHorizontal: "3%",
        paddingVertical: "4%",
    },
    featureDetailsText: {
        fontWeight: "500",
        fontSize: 16
    },
    featureText: {
        fontWeight: "500",
        fontSize: 14,
        opacity: .6
    },
    singleFeatureHolder: {
        flexDirection: "row",
        alignItems: "center",
    },
    dotCircle: {
        width: 6,
        height: 6,
        backgroundColor: "purple",
        borderRadius: 100,
        marginRight: "2%"
    },
    features: {
        marginTop: "2%",
        marginLeft: "2%"
    },
    moneyTitle: {
        fontWeight: "500",
        fontSize: 16
    },
    moneyTitleHolder: {
        fontWeight: "500",
        marginTop: "3%"
    },
    moneySection: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginTop: "5%",
        // borderBottomColor: "#f2f4f7",
        borderBottomWidth: .5,
        paddingVertical: "2%"
    },
    moneyTitleWrapper: {
        alignItems: "center",
        justifyContent: "center"
    },
    moneyQuantity: {
        fontWeight: "600",
        fontSize: 17,
    },
    moneyText: {
        opacity: .6,
        fontSize: 11,
        width: 70,
        textAlign: "center"
    },
    operator: {
        fontWeight: "700",
        fontSize: 20
    },
    buttonsHolder: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "1%"
    },
    updateProductButton: {
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        width: 130,
        height: 50,
        borderColor: "#ebedeb",
        borderWidth: 3
    },
    cancelButton: {
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        width: 130,
        height: 50,
        borderColor: "#ebedeb",
        borderWidth: 3
    },
    updateText: {
        fontWeight: "500",
        fontSize: 17,
        color: "#000"
    }


})