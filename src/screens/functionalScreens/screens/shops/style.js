import { Dimensions, StyleSheet, Platform } from "react-native";
const { width, height } = new Dimensions.get('screen')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EDEFF1",
        // paddingBottom: "20%"
    },
    curve: {
        backgroundColor: "white",
        // height: height / (Platform.),

        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        borderBottomWidth: 0.5,
        borderBottomColor: "#d2d6d3",
        borderBottomColor: "#d9dedb",
        borderBottomWidth: 1
    },
    header: {
        flexDirection: "row",
        paddingVertical: "5%",
        paddingHorizontal: "5%",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FFF",
        // marginTop: "5%",
        height: 100,


    },
    headerText: {
        fontSize: 25,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#000"
    },
    addButtonHolder: {
        backgroundColor: "#fd6846",
        // padding: "3%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        width: 60,
        height: 60
    },
    image: {
        width: "40%",
        height: "97%",
        resizeMode: "stretch",
        borderRadius: 5,
        // borderTopLeftRadius: 10,
        // borderBottomLeftRadius: 10,
    },
    cardsScrollView: {
        flex: 1
    },
    cards: {
        // backgroundColor: "green",
        flex: 1,
        paddingTop: "5%",
        marginTop: "2%",
        // alignItems: "center",
        paddingHorizontal: "4.5%",
        // marginBottom: "20%"
        paddingBottom: "10%",
        height: height
    },
    shopCard: {
        backgroundColor: "#FFF",
        height: height / 6,
        borderWidth: 1,
        width: width / 1.1,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "flex-start",
        // paddingHorizontal: "2%"
        justifyContent: "flex-start",
        borderColor: "gray",
        marginBottom: "3%",
        padding: "1%"

    },
    shopName: {
        fontSize: 20,
        fontWeight: "500"
    },
    products: {
        fontSize: 17,
        opacity: 0.6
    },
    infoHolder: {
        alignSelf: "flex-start",
        marginTop: "2%",
        marginLeft: "3%",
        height: "45%",
        justifyContent: "space-around"
    },
    productsHolder: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
    },
    stockText: {
        fontWeight: "500",
        marginLeft: "1%"
    },
    dotIcon: {
        marginLeft: "11%",
        marginTop: "4%"

    },
})