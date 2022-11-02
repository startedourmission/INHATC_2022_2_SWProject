import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/screens/Home";
import MyCart from "./components/screens/MyCart";
import ProductInfo from "./components/screens/ProductInfo";
import Category from "./components/screens/CategoryTab";
import CategoryTab from "./components/screens/CategoryTab";
import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// function BottomTabNavigationApp() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator initialRouteName="Home">
//         <Tab.Screen
//           name="Category"
//           component={CategoryTab}
//           options={{
//             title: "카테고리",
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="menu" color={color} size={size} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Home"
//           component={Home}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="home" color={color} size={size} />
//             ),
//             headerShown: false,
//           }}
//         />
//         <Tab.Screen
//           name="Mycart"
//           component={MyCart}
//           options={{
//             title: "장바구니",
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="shopping-cart" color={color} size={size} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default BottomTabNavigationApp;
