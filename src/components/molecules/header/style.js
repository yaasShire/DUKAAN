import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: "pink"
    },
    logoImage: {
        width: 150,
        height: 40,
        resizeMode: 'contain',
    },
    logoImageHolder: {
        alignSelf: "center",
        alignSelf: "center",
    },
    addText: {
        fontSize: 11,
        fontWeight: "500",
        color: "#FFF"
    },
    addHolder: {
        backgroundColor: "#11bda0",
        width: 35,
        height: 35,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    mainButtonHolder: {
        borderColor: "#00ffd5",
        borderWidth: 2,
        borderRadius: 50,
        padding: "1%",
        flexDirection: "row",

    }
})