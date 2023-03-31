import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "yellow",
        // paddingHorizontal: 20
    },
    filterHolder: {
        // flex: 0.5,
        backgroundColor: "blue"
    },

    selectedListHolder: {
        // backgroundColor: "green",
        width: width,
        paddingVertical: "4%",
        // paddingRight: 10,
        borderBottomColor: "#bec4c0",
        borderBottomWidth: 1,
        paddingRight: 30,
        marginRight: 100,
        paddingLeft: 10

    },
    selectedItem: {
        backgroundColor: "#b0d1bb",
        paddingHorizontal: 10,
        marginRight: 10,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: 'center',
        height: 30,
        justifyContent: "flex-start"
        // width: "0%"
        // width:100
    },
    textSelectedItem: {
        fontSize: 14,
        fontWeight: "500",
        marginRight: 6
    },
    others: {
        flex: 5,
        flexDirection: 'row',
        borderBottomColor: "#dedcdc",
        borderBottomWidth: 1
    },
    filters: {
        // backgroundColor: "purple",
        flex: .9,
        borderRightWidth: 1,
        borderRightColor: "#bec4c0",
        backgroundColor: "#e1e6e2",
        paddingLeft: "2%"
    },
    sideContent: {
        // backgroundColor: "gold",
        flex: 2,

        shadowColor: "gray",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 6

    },
    categoriesItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: "3%",
        alignItems: "center",
        marginBottom: "8%"
    },
    filterMeasurementText: {
        fontWeight: "500",
        fontSize: 15,
        opacity: 0.5
    },
    selectedCount: {
        color: "red"
    },

    bottomSection: {
        flex: 0.7,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: "5%"
    },
    applyButton: {
        width: 120,
        height: 50,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6
    },
    applyText: {
        color: "white",
        fontWeight: "700"
    },
    clearAllText: {
        color: 'red',
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        fontSize: 18
    }

})