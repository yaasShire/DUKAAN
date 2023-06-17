import { StyleSheet } from "react-native";
import { globalStyles } from "../../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.colors.miniPrimary
    },
    editCardListWrapper: {
        flex: 1,
        alignItems: 'center',
        rowGap: 10
    }
})