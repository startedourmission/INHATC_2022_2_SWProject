import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./Home";
import MyCart from "./MyCart";
import CategoryTab from "./CategoryTab";

const homeName = "Home";
const categoryName = "CategoryTab";
const cartName = "MyCart"; //8:54까지

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === categoryName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === cartName) {
              iconName = focused ? "cart" : "cart-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={home} component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNavigation;
