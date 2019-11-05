import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from "react-native";

import styles from "../constants/styles";
import User from "../config/User";
import firebase from "firebase";

import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Fumi } from "react-native-textinput-effects";

export default class Login extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    phone: "",
    name: ""
  };

  handleChange = key => val => {
    this.setState({ [key]: val });
  };

  //   componentWillMount() {
  //     AsyncStorage.getItem("userPhone").then(val => {
  //       if (val) {
  //         this.setState({ phone: val });
  //       }
  //     });
  //   }

  submitForm = async () => {
    if (this.state.phone.length < 10) {
      Alert.alert("Error", "Wrong phone number");
    } else if (this.state.name.length < 3) {
      Alert.alert("Error", "Wrong Name");
    } else {
      // SAVE USER DATA
      await AsyncStorage.setItem("userPhone", this.state.phone);
      User.phone = this.state.phone;
      firebase
        .database()
        .ref("users/" + User.phone)
        .set({ name: this.state.name });
      this.props.navigation.navigate("App");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Fumi
          style={styles.input}
          label={"Phone Number"}
          iconClass={FontAwesomeIcon}
          iconName={"phone"}
          iconColor={"#f95a25"}
          iconSize={20}
          iconWidth={40}
          inputPadding={22}
          onChangeText={this.handleChange("phone")}
          value={this.state.phone}
          keyboardType="number-pad"
        />
        <Fumi
          style={styles.input}
          label={"Name"}
          iconClass={FontAwesomeIcon}
          iconName={"user"}
          iconColor={"#f95a25"}
          iconSize={20}
          iconWidth={40}
          inputPadding={22}
          onChangeText={this.handleChange("name")}
          value={this.state.name}
        />
        {/* <TextInput
          value={this.state.phone}
          keyboardType="number-pad"
          placeholder="Phone number"
          style={styles.input}
          onChangeText={this.handleChange("phone")}
        /> */}
        {/* <TextInput
          value={this.state.name}
          placeholder="Name"
          style={styles.input}
          onChangeText={this.handleChange("name")}
        /> */}
        <TouchableOpacity
          style={{
            backgroundColor: "#f95a25",
            borderRadius: 50
          }}
          onPress={this.submitForm}
        >
          <Text style={styles.btnSubmit}>Enter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
