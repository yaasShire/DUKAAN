import { Dimensions, StyleSheet } from "react-native";
import { HeightDimension, screenPadding } from "../../../../globalConstants/styles";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        flex: 1,
    },
    productCardsHolder: {
        justifyContent: "space-between",
        // paddingHorizontal: "3.5%",
    },
    cardsHolder: {
    },
    productListsWrapper: {
        rowGap: 10,
        padding: screenPadding,
        // flex: 1,
    }

})