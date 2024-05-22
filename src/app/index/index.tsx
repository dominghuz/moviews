import { Image, Text, View } from "react-native";
import { styles } from "./style";
import { Button } from "@/src/components/Button";
import { Input } from "@/src/components/Input";

export default function Login(){
    return(
        <View style={styles.container}>

            <Image 
                style={styles.image} 
                source={require('../../../assets/images/logo1.png')}
                resizeMode="contain"
            />

            <Text style={styles.loginText}>Login</Text>

            <View style={styles.wFull}>
                <Input>
                    <Input.Field
                        placeholder="Email"
                        keyboardType="email-address"
                    />
                </Input>
                <Input>
                    <Input.Field
                        placeholder="Password"
                        keyboardType="email-address"
                    />
                </Input>
                <Button />
            </View>
        </View>
    )
}