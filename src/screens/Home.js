import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";

import User from "../config/User";
import styles from "../constants/styles";
import firebase from "firebase";

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Chats",
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            style={{ width: 32, height: 32, marginRight: 7 }}
            source={require("../../assets/profile.png")}
          />
        </TouchableOpacity>
      )
    };
  };

  state = {
    users: []
  };

  componentWillMount() {
    let dbRef = firebase.database().ref("users");
    dbRef.on("child_added", val => {
      let person = val.val();
      person.phone = val.key;
      if (person.phone === User.phone) {
        User.name = person.name;
      } else {
        this.setState(prevState => {
          return {
            users: [...prevState.users, person]
          };
        });
      }
    });
  }

  renderRow = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("Chat", item)}
        style={{ padding: 10, borderBottomColor: "#ccc", borderBottomWidth: 1 }}
      >
        <Text style={{ fontSize: 20 }}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.users}
          renderItem={this.renderRow}
          keyExtractor={item => item.phone}
        />
      </SafeAreaView>
    );
  }
}
