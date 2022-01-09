import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogBox } from "react-native";

import Tabs from "./Tabs";

import NowPlayingDetailScreen from "../screens/DetailScreens/NowPlayingDetailScreen";
import PopularDetailScreen from "../screens/DetailScreens/PopularDetailScreen";
import TrendingDetailScreen from "../screens/DetailScreens/TrendingDetailScreen";

LogBox.ignoreAllLogs(true);

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function Screens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="NowPlayingDetailScreen" component={NowPlayingDetailScreen} />
      <Stack.Screen name="PopularDetailScreen" component={PopularDetailScreen} />
      <Stack.Screen name="TrendingDetailScreen" component={TrendingDetailScreen} />
    </Stack.Navigator>
  );
}
