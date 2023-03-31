import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    container: {
        flex: 1
    },
    topBoxHolder: {
        backgroundColor: "#684970",
        height: height / 4.3,
        alignItems: "flex-start",
        paddingHorizontal: "5%"
    },
    textHeader: {
        fontWeight: "400",
        fontSize: 18,
        color: "#fff",
        marginTop: "10%",
        opacity: 0.9,
        textAlign: "left"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
        resizeMode: "cover",
        borderWidth: 3,
        borderColor: "pink"
    },
    card: {
        backgroundColor: "#FFF",
        paddingVertical: "5%",
        alignItems: "flex-start",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: "5%",
        width: width / 1.2,
        borderRadius: 10,
        marginTop: "-25%",
        marginLeft: 35,
        height: height / 5,
        marginBottom: 30,
        borderWidth: 1,
        borderColor: "#dbd7d7"
    },
    imageNameHolder: {
        marginLeft: "28%",
        alignItems: "center"
    },
    name: {
        fontSize: 18,
        fontWeight: "600"
    },
    bottomActionsHolder: {
        // paddingHorizontal: "5%",
        backgroundColor: "#FFF",
        paddingTop: "3%"
    },
    actionButtonHolder: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "",
        justifyContent: "space-between",

        paddingHorizontal: "5%",
        paddingVertical: "3%",
        marginBottom: 10
    },
    iconHolder: {
        backgroundColor: "#266bf6",
        padding: "3%",
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    actionText: {
        fontSize: 17,
        fontWeight: "400",
        opacity: .8
    },
    divider: {
        borderBottomColor: "#e8e3e3",
        borderBottomWidth: 1,
    },
    logOutText: {
        color: "red",
        fontSize: 17,
        fontWeight: "400",
        opacity: .8
    }

})