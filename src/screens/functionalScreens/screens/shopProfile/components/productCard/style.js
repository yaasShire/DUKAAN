import { StyleSheet } from "react-native";
import { globalStyles } from "../../../../../../globalConstants/styles";
export default StyleSheet.create({
    card: {
        // backgroundColor: "pink",
        width: "60%",
        height: "100%",
        borderRadius: 5,
        paddingVertical: "2%",
        borderWidth: 1,
        borderColor: globalStyles.colors.logoColor,
        paddingHorizontal: "1%",

    },
    producImageWrapper: {
        width: "100%",
        height: "80%",
        justifyContent: "flex-start",
        alignItems: "center",
        // backgroundColor: "blue"

    },
    image: {
        width: "90%",
        height: "80%",
        borderRadius: 5,
        resizeMode: "contain",
        borderRadius: 5

    },
    dataWrapper: {
        flex: 1,
        justifyContent: "center",
    },
    productName: {
        fontSize: 16,
        fontWeight: "500"
    },
    qty: {
        fontSize: 14,
        fontWeight: "400",
        opacity: .5,
        marginVertical: "2%"
    }
})