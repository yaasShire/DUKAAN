import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    searchHolder: {
        flexDirection: "row",
        borderBottomColor: "#e1e6e2",
        borderBottomWidth: 1,
        paddingVertical: '5%',
        paddingHorizontal: "5%",
        alignItems: "center"

    },
    input: {
        marginLeft: "5%",
        fontSize: 15
    },
    categoryListWrapper: {
        rowGap: 10
    }
})