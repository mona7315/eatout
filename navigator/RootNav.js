import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import springScreen from "../screens/springScreen";
import parallelScreen from "../screens/parallelScreen";
import sequenceScreen from "../screens/sequence";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { createStackNavigator } from "react-navigation-stack"
import DetailImageScreen from "../screens/detailImageScreen"
import ProfileScreen from '../screens/profile'
import { Image } from 'react-native';


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
  Home: {
    screen: Stack,
    navigationOptions: {
      tabBarIcon: () => {
        // <AntDesign name="shake" size={24} color={"black"} />
        return  <Image
                  style={{ width: 35, height:35 }}
                  source={{
                    uri:
                      'https://sv1.picz.in.th/images/2020/11/19/bGf3Yz.png'
                  }}
                />;
      },
      tabBarOptions:{
        //other properties
        pressColor: 'red',//for click (ripple) effect color
        style: {
          backgroundColor: '#FDD37A',//color you want to change
        }
    }
    },
  },
  NewsFeed: {
    screen: sequenceScreen,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
        style={{ width: 25, height:25 }}
        source={{
          uri:
            'https://sv1.picz.in.th/images/2020/11/19/bGh3bS.png'
        }}
        />;
      },
      tabBarOptions:{
        //other properties
        pressColor: 'red',//for click (ripple) effect color
        style: {
          backgroundColor: '#FDD37A',//color you want to change
        }
    }
    },
  },
  Chat: {
    screen: parallelScreen,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
        style={{ width: 25, height:25 }}
        source={{
          uri:
            'https://sv1.picz.in.th/images/2020/11/19/bGhZd1.png'
        }}
        />;
      },
      tabBarOptions:{
        //other properties
        pressColor: 'red',//for click (ripple) effect color
        style: {
          backgroundColor: '#FDD37A',//color you want to change
        }
    }
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
        style={{ width: 30, height:30 }}
        source={{
          uri:
            'https://sv1.picz.in.th/images/2020/11/19/bGk3F0.png'
        }}
        />;
      },
      tabBarOptions:{
        //other properties
        pressColor: 'red',//for click (ripple) effect color
        style: {
          backgroundColor: '#FDD37A',//color you want to change
        }
    }
    },
  }
});

export default createAppContainer(TabNavigator);
