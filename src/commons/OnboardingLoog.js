import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export class OnboardingLoog extends Component {
  render() {
    return (
      <View style={styles.containerLogo}>
        <View>
          <Image
            style={styles.logoImage}
            source={require("../../assets/logo.png")}
          />
        </View>
        <View>
          <Text style={styles.textLogo}>Friendly chat platform</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerLogo: {
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  logoImage: {
    width: 100,
    height: 100
  },
  textLogo: {
    fontSize: 18,
    marginTop: 25,
    color: "#ff8d00"
  }
});

export default OnboardingLoog;
