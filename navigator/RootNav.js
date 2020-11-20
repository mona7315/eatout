import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import springScreen from "../screens/springScreen";
import parallelScreen from "../screens/parallelScreen";
import sequenceScreen from "../screens/sequence";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { createStackNavigator } from "react-navigation-stack"
import DetailImageScreen from "../screens/detailImageScreen"



const Stack = createStackNavigator ({
  Screen1: {
      screen: springScreen,
      
  },
 
  DetailImage: {
      screen: DetailImageScreen,
      navigationOptions:{
          title: "Detail"
      }
  }
  
}, {defaultNavigationOptions: {
  headerShown : false
}})



const TabNavigator = createBottomTabNavigator({
  Spring: {
    screen: Stack,
    navigationOptions: {
      tabBarIcon: () => {
        return <AntDesign name="shake" size={24} color={"black"} />;
      },
    },
  },
  Sequence: {
    screen: sequenceScreen,
    navigationOptions: {
      tabBarIcon: () => {
        return <AntDesign name="retweet" size={24} color={"black"} />;
      },
    },
  },
  parallel: {
    screen: parallelScreen,
    navigationOptions: {
      tabBarIcon: () => {
        return <AntDesign name="swap" size={24} color={"black"} />;
      },
    },
  },
});

export default createAppContainer(TabNavigator);
