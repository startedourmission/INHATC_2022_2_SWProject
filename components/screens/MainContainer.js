import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Home from "./Home";
import MyCart from "./MyCart";
import CategoryTab from "./CategoryTab";

function MainContainer() {
  return (
    <View>
      <Text>MainContainer</Text>
    </View>
  );
}

export default MainContainer;
