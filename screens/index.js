import React, { useRef } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Stack from "../navigator/Stack"
import Login from "../screens/login"
const Index = (props) => {
    return (
        <View>
            <Text> Hello </Text>
            <Button
                title="Login"
                onPress={() => { props.navigation.navigate("Screen2") }}
            />
            <Button
                title="Register"
                onPress={() => { props.navigation.navigate("Screen3") }}
            />

        </View>

    )
}

export default Index;