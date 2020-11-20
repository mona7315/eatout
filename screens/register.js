import React, { useRef } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Stack from "../navigator/Stack"
import Login from "../screens/login"
const Register = (props) => {
    return (
        <View>
            <Text> Register </Text>
            <Button
            title = "ok"
            onPress = {() => {props.navigation.navigate("Screen2")}}
            />

        
        </View>

    )
}

export default Register;