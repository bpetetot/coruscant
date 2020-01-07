import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import firebase from "firebase";

import { AuthProvider } from "./features/auth/context";
import DashboardScreen from "./features/dashboard/DashboardScreen";

import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);

const AppNavigation = createAppContainer(
  createSwitchNavigator({
    DashboardScreen
  })
);

const App = () => {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
};

export default App;
