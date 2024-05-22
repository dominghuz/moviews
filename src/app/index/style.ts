import { theme } from "@/src/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.gray_800,
    },
    wFull:{
        width: '100%',
        gap: 3
    },
    image:{
        height: 100,
        width: 100,
        marginBottom: 20
    },
    loginText:{
        color: theme.colors.white,
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        marginLeft: 65,
        marginBottom: 5,
        fontSize: theme.fonts.size.heading.md,
        // fontWeight: theme.font
    }
})