import { StyleSheet } from "react-native";
export default StyleSheet.create({
    salesSectionCard: {
        borderBottomColor: "#b6baba",
        borderBottomWidth: .5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: "3%",
        paddingVertical: "3%"
    },
    actionCardsHolder: {
        marginTop: "5%"
    },
    updateIcon: {
        borderColor: "#30bfbf",
        borderWidth: 2,
        width: 21,
        height: 21,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: "center"
    },

    updateText: {
        fontSize: 13,
        color: "#10e0e0"
    },
    updateIconTextHolder: {
        alignItems: "center"
    },
    actionText: {
        opacity: .5,
        fontSize: 14
    },
    actionContent: {
        alignItems: "flex-start"
    },
    priceText: {
        fontSize: 16,
        fontWeight: 500
    }
})