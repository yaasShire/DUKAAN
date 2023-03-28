import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get('screen')
export default StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        height: height / 3.1,
        width: width / 2.2,
        borderRadius: 8,
        justifyContent: "flex-start",
        paddingVertical: "2%",
        paddingHorizontal: "2%",
        alignItems: "flex-start",
        marginBottom: 8,

    },
    image: {
        width: 170,
        height: height / 5.3,
    },
    productName: {
        fontSize: 17,
        opacity: 0.5,
        fontWeight: "400",
        textAlign: "left"
        // backgroundColor: "blue"
    },
    price: {
        fontWeight: "500",
        fontSize: 16,
        marginTop: 5
    },
    qtyText: {
        opacity: 0.5,
        fontSize: 13,
        marginTop: 3
    },
    divider: {
        borderBottomColor: "#f2eeed",
        borderBottomWidth: 1,
        marginTop: "3%",
        marginBottom: "3%"
    }
})