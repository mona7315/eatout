import React, { useRef } from "react";
import { Animated, StyleSheet, Text, View, Button, Easing, Image } from "react-native";

const sequenceScreen = () => {
 
  return (
    <View style={styles.layout}>

      <View>
<Image
style={styles.img}
source = {require('../assets/photo.png')}/>
      </View>
      <View>
      <Image
style={styles.img}
source = {require('../assets/photo.png')}/>
      </View>
      <View>
      <Image
style={styles.img}
source = {require('../assets/photo.png')}/>
      </View>
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
  layout:{
    flexDirection: "row",
    flex: 1
  },
  img:{
    width: 100,
    height: 100
  }
 
});

export default sequenceScreen;
