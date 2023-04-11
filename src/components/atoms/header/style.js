import { StyleSheet } from "react-native";
export default StyleSheet.create({
    headerHolder: {
        height: "10%",
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        borderBottomColor: "#dedcdc",
        borderBottomWidth: 1,
        justifyContent: "space-between"

    },
    menuWrapper: {
    },
    logoImage: {
        width: 200,
        height: "100%",
        resizeMode: 'cover',
        marginLeft: '30%',
        alignSelf: "center",
    },
    logoImageHolder: {
        alignSelf: "center",
    },
    iconLogoHolder: {
        flexDirection: "row",
        alignItems: "center",
        width: "63%",
        justifyContent: "space-between",
        flex: 1,
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
        padding: "1%"
    }
})
