import React, { useRef } from "react";
import { Animated, StyleSheet, Text, View, Easing, Image } from "react-native";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const sequenceScreen = () => {

  return (
    <ScrollView>
      <View style={{ backgroundColor: "#CBCBCB" }}>
        <View style={{ justifyContent: "flex-start", flex: 1, flexDirection: "row", margin: 10, backgroundColor: "#CBCBCB" }}>

          <Image style={{ width: 60, height: 60, borderRadius: 50, overflow: "hidden",borderColor: "linear-gradient(90deg, rgba(174,30,30,1) 0%, rgba(255,0,95,1) 35%, rgba(255,204,0,1) 100%)",borderWidth:3 }}

            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Beauty_girl.jpg/499px-Beauty_girl.jpg',
            }}
          />
          <Text style={{ marginLeft: 15, marginTop: 5, fontWeight: "bold", color: "#373737", fontSize: 16, verticalAlign: "middle", fontFamily: 'Athiti' }}>
            Ploy.sucha
        </Text>
          <View style={{ flexDirection: "row", marginLeft: 15 }}>
            <AntDesign name="wechat" size={40} color="#3F9E34" />
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "column" }}>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Text style={{ marginTop: 5, fontWeight: "bold", color: "#707070", fontSize: 16, verticalAlign: "middle", fontFamily: 'Athiti' }}>Ploy.sucha Shared Total Ate 1020 Kcal</Text>
        </View>
        <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-between', marginHorizontal: 28, alignItems: "center", alignContent: "space-between" }}>
          <Text style={{ marginRight: 20, marginTop: 5, fontWeight: "bold", color: "#D7385E", fontSize: 16, verticalAlign: "middle", fontFamily: 'Athiti' }}>Breackfast</Text>
          <Text style={{ marginRight: 20, marginTop: 5, fontWeight: "bold", color: "#D7385E", fontSize: 16, verticalAlign: "middle", fontFamily: 'Athiti' }}>Lunch</Text>
          <Text style={{ marginRight: 20, marginTop: 5, fontWeight: "bold", color: "#D7385E", fontSize: 16, verticalAlign: "middle", fontFamily: 'Athiti' }}>Dinner</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around', margin: 2 }}>
          <Image style={{ width: 120, height: 90, }}

            source={{
              uri: 'https://images.squarespace-cdn.com/content/v1/5c271646f8370a65dab2c142/1575302182439-TDG6EMNNP6WS6ZH0RR9K/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/IMG_9041+copy.jpg',
            }} />
          <Image style={{ width: 120, height: 90, }}

            source={{
              uri: 'https://images.squarespace-cdn.com/content/v1/5c271646f8370a65dab2c142/1575302182439-TDG6EMNNP6WS6ZH0RR9K/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/IMG_9041+copy.jpg',
            }} />
          <Image style={{ width: 120, height: 90, }}

            source={{
              uri: 'https://images.squarespace-cdn.com/content/v1/5c271646f8370a65dab2c142/1575302182439-TDG6EMNNP6WS6ZH0RR9K/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/IMG_9041+copy.jpg',
            }} />

        </View>

        <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-around' }}>
          <TextInput style={{ width: "23%", height: 30, borderWidth: 0.5, borderColor: "#3186FF", borderRadius: 20 }}>
            <Text style={{ fontWeight: "bold", color: "gray", fontSize: 16, fontFamily: 'Athiti', textAlign: "center" }}>320 Kcal</Text>
          </TextInput>
          <TextInput style={{ width: "23%", height: 30, borderWidth: 0.5, borderColor: "#3186FF", borderRadius: 20 }}>
            <Text style={{ fontWeight: "bold", color: "gray", fontSize: 16, fontFamily: 'Athiti', textAlign: "center" }}>250 Kcal</Text>
          </TextInput>
          <TextInput style={{ width: "23%", height: 30, borderWidth: 0.5, borderColor: "#3186FF", borderRadius: 20 }}>
            <Text style={{ fontWeight: "bold", color: "gray", fontSize: 16, fontFamily: 'Athiti', textAlign: "center" }}>250 Kcal</Text>
          </TextInput>
        </View>


      </View>
    </ScrollView>


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

export default sequenceScreen;
