import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import FilmTab from "../screens/TabScreens/FilmTab";
import TVTab from "../screens/TabScreens/TVTab";

const Tab = createBottomTabNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Film"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Film") {
              iconName = focused ? "film" : "film-outline";
              size = focused ? 26 : 25;
            } else if (route.name === "TV") {
              iconName = focused ? "tv" : "tv-outline";
              size = focused ? 26 : 25;
            }

            // You can return the Icon component here
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "#979797",
          tabBarLabelPosition: "beside-icon",
          tabBarLabelStyle: {
            fontSize: 14,
          },
        })}
      >
        <Tab.Screen
          name="Film"
          component={FilmTab}
          options={{
            tabBarLabel: "Films",
          }}
        />

        <Tab.Screen
          name="TV"
          component={TVTab}
          options={{
            tabBarLabel: "TV Shows",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
