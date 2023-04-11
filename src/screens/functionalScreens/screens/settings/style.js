import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: "#fff"
    },
    header: {
        flexDirection: 'row',
        alignItems: "center",
        margin: 0,
        height: height / 16,
        justifyContent: "center"

    },
    settingText: {
        fontSize: 19,
        fontWeight: "500",

    },
    iconBack: {
        flex: .4
    },
    profileCardWrapper: {
        backgroundColor: "#fff",
        height: height / 7,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: "2%",
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#dedede",
        borderRadius: 5,
        marginTop: "4%"
    },
    imageWrapper: {
        borderWidth: 2,
        padding: "1%",
        borderRadius: 50,
        borderColor: "#dedede",
        width: width / 5.1,
        height: height / 10,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: width / 5.9,
        height: height / 12,
        // resizeMode: "cover",
        borderRadius: 50,

    },
    imageNameNumberWrapper: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        justifyContent: "space-around",
    },

    nameNumberWrapper: {
        width: "70%",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    name: {
        fontWeight: "400",
        fontSize: 16
    },
    phoneNumber: {
        fontSize: 14,
        opacity: .8
    },
    actionCardsWrapper: {
        backgroundColor: "#fff",
        padding: "2%",
        marginTop: "5%"
    },
    singleAction: {
        borderColor: "#dedede",
        borderWidth: 1,
        height: height / 13,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "3%",
        borderRadius: 5,
        paddingHorizontal: "1%"
    },
    nameIconWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        flex: 1,
        height: "55%"
    },
    actionName: {
        fontWeight: "400",
        fontSize: 15,
        marginLeft: "3%"
    },
    modalHolder: {
        alignItems: "center",
        justifyContent: "center",
    },
    logoutButton: {
        backgroundColor: "pink",
        width: width / 5,
        height: height / 19,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center"
    },
    logoutButton: {
        borderRadius: 5,
    },
    cacenlButton: {
        borderRadius: 5,
    },
    buttonsHolder: {
        flexDirection: "row",
        width: "90%",
        height: "30%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: "10%"
    },
    logOutModalText: {
        fontSize: 19,
        fontWeight: "500"
    },
    cancelText: {
        color: "green"
    },
    logoutText: {
        color: "red"
    },

})