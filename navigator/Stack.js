import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import Index from "../screens/index"
import Login from "../screens/login"
import Register from "../screens/register"
import RootNav from "./RootNav"
import DetailImageScreen from "../screens/detailImageScreen"

const Stack = createStackNavigator ({
    Screen1: {
        screen: Login,
        navigationOptions: {
            title: "Login"
        }
    },
    Screen2: {
        screen: RootNav,
  
    },
    Screen3: {
        screen: Register,
        navigationOptions: {
            title: "Register"
        },
    DetailImage: {
        screen: DetailImageScreen,
        navigationOptions:{
            title: "Detail"
        }
    }
    }
})
export default createAppContainer(Stack)