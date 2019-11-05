import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View
} from "react-native";

import User from "../config/User";
import firebase from "firebase";

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  componentWillMount() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyBBPrVjqUl-LQzEtTC3VsML4lGmLD_jKVc",
      authDomain: "chatapp-b40f2.firebaseapp.com",
      databaseURL: "https://chatapp-b40f2.firebaseio.com",
      projectId: "chatapp-b40f2",
      storageBucket: "chatapp-b40f2.appspot.com",
      messagingSenderId: "242824847880",
      appId: "1:242824847880:web:02319cf2fb0b0db8e927bd"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    Userphone = await AsyncStorage.getItem("userPhone");

    this.props.navigation.navigate(User.phone ? "App" : "Auth");
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;
