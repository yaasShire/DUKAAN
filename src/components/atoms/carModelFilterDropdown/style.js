import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    dropDownHolder: {
        backgroundColor: "pink"
    },
    dropDownInput: {
        height: 50,
        borderColor: "gray",
        borderRadius: 7,
        padding: "3%",
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    name: {
        opacity: .7
    },
    subCategoriesWrapper: {
        // backgroundColor: "#fff",
        marginTop: "5%",
        paddingVertical: "3%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "#9ea1a3",
        borderWidth: 1,
    },
    subCategoryItem: {
        borderWidth: 1,
        height: height / 20,
        justifyContent: "center",
        alignItems: "center",
        width: "95%",
        borderRadius: 5,
        borderColor: "#d4d5d6",
        marginBottom: "3%"
    },
    selectedSubCategoryItem: {
        borderWidth: 1,
        height: height / 20,
        justifyContent: "center",
        alignItems: "center",
        width: "95%",
        borderRadius: 5,
        borderColor: "green",
        marginBottom: "3%"
    },

})