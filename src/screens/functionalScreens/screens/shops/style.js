import { Dimensions, StyleSheet, Platform } from "react-native";
const { width, height } = new Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        height
    },
    curve: {
        backgroundColor: "white",
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
        paddingVertical: "2%",
        paddingHorizontal: "2%",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FFF",
        height: 80,


    },
    headerText: {
        fontSize: 25,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#000"
    },
    addButtonHolder: {
        backgroundColor: "#fd6846",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        width: 40,
        height: 40
    },
    image: {
        width: "40%",
        height: "97%",
        resizeMode: "stretch",
        borderRadius: 5,

    },

    cards: {
        flex: 1,
        marginTop: "2%",
        height: height,



    },
    shopCard: {
        backgroundColor: "#FFF",
        height: height / 6,
        borderWidth: 1,
        width: width / 1.1,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "flex-start",
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
    buttonHolder: {
        borderColor: "pink",
        borderRadius: 50,
        borderWidth: 3,
        padding: "1%",
        justifyContent: "center",
        alignItems: "center"
    }
})