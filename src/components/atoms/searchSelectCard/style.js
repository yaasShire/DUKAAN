import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: "pink"
    },
    card: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: "5%",
        paddingVertical: "4%",
        backgroundColor: "#FFFFFF",
        borderBottomColor: "#e1e6e2",
        borderBottomWidth: 1
    },
    text: {
        opacity: .8
    },
    dropdownIcon: {
        opacity: .5
    },
    subCategoryText: {
        fontSize: 13
    },
    wholeCard: {
    },
    subCategoryCard: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: "10%",
        paddingVertical: "4%",
        backgroundColor: "#FFFFFF",
        borderBottomColor: "#e1e6e2",
        borderBottomWidth: 1,

    },
    productCategory: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: "5%",
        // paddingVertical: "%",
        borderBottomColor: "#e1e6e2",
        borderBottomWidth: 1,

    },

})