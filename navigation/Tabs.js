import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import FilmTab from "../screens/TabScreens/FilmTab";
import TVTab from "../screens/TabScreens/TVTab";

const Tab = createBottomTabNavigator();

export default function () {
  return (
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
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#979797",
        tabBarLabelPosition: "beside-icon",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#0f0f0f",
          borderTopColor: "#000",
        },
        headerStyle: {
          backgroundColor: "#0f0f0f",
        },
      })}
    >
      <Tab.Screen
        name="Film"
        component={FilmTab}
        options={{
          headerTitle: () => (
            <Text
              style={{
                fontSize: 25,

                color: "#fff",
                fontFamily: "Quicksand-Bold",
              }}
            >
              Film
            </Text>
          ),
        }}
      />

      <Tab.Screen name="TV" component={TVTab} />
    </Tab.Navigator>
  );
}
