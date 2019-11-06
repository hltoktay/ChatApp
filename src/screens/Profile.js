import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from "react-native";
import User from "../config/User";
import styles from "../constants/styles";
import firebase from "firebase";

export default class Profile extends Component {
  static navigationOptions = {
    title: "Profile",
    headerStyle: {
      backgroundColor: "#f4511e"
    }
  };

  state = {
    name: User.name
  };

  handleChange = key => val => {
    this.setState({ [key]: val });
  };

  _logOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  changeName = async () => {
    if (this.state.name.length < 3) {
      Alert.alert("Error", "Please enter valid name");
    } else if (User.name !== this.state.name) {
      firebase
        .database()
        .ref("users")
        .child(User.phone)
        .set({ name: this.state.name });
      User.name = this.state.name;
      Alert.alert("Success", "Name change successfully.");
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ fontSize: 20 }}>{User.phone} </Text>

        <TextInput
          style={{
            justifyContent: "center",
            alignItems: "center",
            fontSize: 20,
            marginBottom: 50
          }}
          value={this.state.name}
          onChangeText={this.handleChange("name")}
        />

        <TouchableOpacity style={styles.btn} onPress={this.changeName}>
          <Text style={styles.btnSubmit}>Change Name</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={this._logOut}>
          <Text style={styles.btnSubmit}>Logout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
