import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  View
} from "react-native";

import User from "../config/User";
import styles from "../constants/styles";
import firebase from "firebase";

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Chats",
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            style={{ width: 42, height: 42, marginRight: 7 }}
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
        style={{
          padding: 15,
          borderColor: "#f4511e",
          marginBottom: 3,
          borderWidth: 1,
          borderRadius: 25
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={{ fontSize: 22 }}>{item.name}</Text>
          </View>
          <View>
            <Image
              style={{ width: 32, height: 32, marginRight: 7 }}
              source={require("../../assets/profile.png")}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fbe6db" }}>
        <FlatList
          style={{ flex: 1, padding: 5 }}
          data={this.state.users}
          renderItem={this.renderRow}
          keyExtractor={item => item.phone}
        />
      </SafeAreaView>
    );
  }
}
