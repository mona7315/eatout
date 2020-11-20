import React, { useRef } from "react";
import { Animated, StyleSheet, Text, View, Button, Easing } from "react-native";

const parallelScreen = () => {
  const springVal = useRef(new Animated.Value(0.3)).current;
  const parallel = () => {
    Animated.parallel([
      Animated.spring(springVal, {
        toValue: 1,
        friction: 1,
      }),
    ]).start(() => {
      springVal.setValue(0.3);
    });
  };
  return (
    <View style={styles.container}>
      <Animated.Image
        style={{ width: 300, height: 250, transform: [{ scale: springVal }] }}
        source={require("../assets/1.jpg")}
      />
      <Button style={styles.botton} title="Spring" onPress={parallel} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  botton: {
    justifyContent: "flex-end",
  },
});
export default parallelScreen;
