import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        // width: "71%",
        alignItems: "center",
        paddingRight: "29%",
        paddingLeft: "3%",
        borderBottomColor: "#b6baba",
        borderBottomWidth: .5,
        paddingVertical: "2%"

    },

    textHeader: {
        fontSize: 19,
        fontWeight: "500"
    },
    productHolder: {
        flexDirection: "row",
        marginTop: "8%",
        paddingHorizontal: "5%",
        borderBottomColor: "#b6baba",
        borderBottomWidth: .5,
        paddingVertical: "3%"
    },
    image: {
        width: 75,
        height: 75,
        marginRight: "2%"
    },
    holder: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "2%"
    },
    textTitle: {
        opacity: 0.6,
        fontSize: 16,
        marginRight: "1%"
    },
    valueText: {
        fontWeight: "400",
        fontSize: 15.5
    },
    statusText: {
        color: "green"
    },
    tabsHolder: {
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingHorizontal: "5%",
        marginTop: "5%",
        alignItems: "center",
        borderBottomColor: "#c4c3c0",
        borderBottomWidth: 1,
        // paddingVertical: 10
    },
    singleTab: {
        marginRight: "5%",

        paddingVertical: "1%"
    },
    selectedTab: {
        marginRight: "5%",
        borderBottomColor: "#ebbb0e",
        borderBottomWidth: 3,
        paddingVertical: "1%",
        alignItems: "center",
        justifyContent: 'center'
        // marginTop: 10
    },
    tabText: {
        fontWeight: "400",
        color: "#14bae3",
        fontSize: 17,
        marginBottom: "13%"
    },
    productName: {
        fontSize: 18,
        fontWeight: "600"
    }

})