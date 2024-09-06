import { StyleSheet } from "react-native";
import { theme } from "@/theme/index";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colors.gray_200,
    },
    header: {
        width: "100%",
        height: 132,
        backgroundColor: theme.colors.blue,
        justifyContent: "flex-end",
    },
    input: {
        marginBottom: -27,
    },
})