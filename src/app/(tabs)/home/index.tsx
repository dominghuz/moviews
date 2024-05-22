import { Link, router } from "expo-router";
import { Button, Text, View } from "react-native";
import { styles } from "./style";

export default function Home(){
    function login(){
        router.push("/login")
    }
    return(
        <View style={styles.container}>
            <Text>Hello World</Text>
            <Button title="Login" onPress={login}/>
        </View>
    )
}