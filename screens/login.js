import React, { useRef } from "react";
import {  StyleSheet, Text, View, Button } from "react-native";

const Login = (props) => {
    return (
        <View>
            <Text> LOgin </Text>
            <Button
            title = "Login"
            onPress = {() => {props.navigation.replace("Screen2")}}
            />

        
        </View>
    )
}

export default Login;