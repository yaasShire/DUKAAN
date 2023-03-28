import { StyleSheet } from "react-native";
export default StyleSheet.create({
    categoriesItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: "3%",
        alignItems: "center",
        marginBottom: "5%",
        paddingVertical: "7%"
    },
    filterMeasurementText: {
        fontWeight: "500",
        fontSize: 14,
        opacity: 0.5
    },
    selectedCount: {
        color: "red",
        fontSize: 14,
    }
})