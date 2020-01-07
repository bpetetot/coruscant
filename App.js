import React from "react";
import { Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import firebase from "firebase";

import { AuthProvider } from "./features/auth/context";
import DashboardScreen from "./features/dashboard/DashboardScreen";
import ProfileScreen from "./features/profile/ProfileScreen";
import SettingsScreen from "./features/settings/SettingsScreen";
import { Feather } from "@expo/vector-icons";

import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);

// Tabs documentation: https://reactnavigation.org/docs/en/tab-based-navigation.html
const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let iconName;
  if (routeName === "Dashboard") {
    iconName = "home";
  } else if (routeName === "Profile") {
    iconName = "user";
  } else if (routeName === "Settings") {
    iconName = "settings";
  }
  return <Feather name={iconName} size={25} color={tintColor} />;
};

const AppNavigation = createAppContainer(
  createBottomTabNavigator(
    {
      Dashboard: DashboardScreen,
      Profile: ProfileScreen,
      Settings: SettingsScreen
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor)
      }),
      tabBarOptions: {
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        showLabel: false
      }
    }
  )
);

const App = () => {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
};

export default App;
