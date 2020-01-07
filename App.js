import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import DashboardScreen from './screens/DashboardScreen'

import firebase from 'firebase'
import { firebaseConfig } from './config'

firebase.initializeApp(firebaseConfig)

const AppNavigation = createAppContainer(createSwitchNavigator(
  {
    LoadingScreen,
    LoginScreen,
    DashboardScreen,
  }
));

const App = () => {
  return <AppNavigation />
}

export default App