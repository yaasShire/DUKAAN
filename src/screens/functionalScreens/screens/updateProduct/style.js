import { StyleSheet } from "react-native";
import { globalStyles } from "../../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: globalStyles.colors.miniPrimary
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
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
        borderBottomColor: "#b6baba",
        borderBottomWidth: .5,
        paddingVertical: "3%",
        height: "30%",
        backgroundColor: globalStyles.style.whiteMode.secondaryColor,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: globalStyles.colors.miniPrimary,
        elevation: 5,
        paddingHorizontal: "2%",
        alignItems: 'flex-start'

    },
    image: {
        width: 130,
        height: 150,
        marginRight: "2%",
        borderRadius: 5,
        resizeMode: "center",
        borderRadius: 5,
        borderColor: globalStyles.colors.logoColor,
        borderWidth: 1
    },
    holder: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "2%"
    },
    textTitle: {
        opacity: 0.8,
        fontSize: 16,
        marginRight: "1%",
        fontWeight: "600"
    },
    valueText: {
        fontWeight: "700",
        fontSize: 16,
    },
    statusText: {
        color: "green"
    },
    tabsHolder: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: "5%",
        alignItems: "center",
        borderBottomColor: "#c4c3c0",
    },
    singleTab: {
        marginRight: "5%",
    },
    selectedTab: {
        borderBottomColor: "#ebbb0e",
        borderBottomWidth: 3,
        paddingVertical: "1%",
    },
    tabText: {
        fontWeight: "400",
        color: "#14bae3",
        fontSize: 15,
        marginBottom: "13%",
        textAlign: "center"
    },
    productName: {
        fontSize: 20,
        fontWeight: "700",
        color: globalStyles.colors.tertiary
    }

})