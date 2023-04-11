import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        height

    },
    productCardsHolder: {
        justifyContent: "space-between",
        paddingHorizontal: "3.5%",
    },
    cardsHolder: {
    }
})