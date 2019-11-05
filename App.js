import React, { Component } from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import AuthLoadingScreen from "./src/screens/AuthLoadingScreen";
import ChatScreen from "./src/screens/ChatScreen";
import Profile from "./src/screens/Profile";

const AppStack = createStackNavigator({
  Home: Home,
  Chat: ChatScreen,
  Profile: Profile
});
const AuthStack = createStackNavigator({ Login: Login });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
