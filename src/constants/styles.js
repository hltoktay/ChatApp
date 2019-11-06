import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbe6db",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "#f95a25",
    width: "80%",
    marginBottom: 12,
    borderRadius: 25
  },
  btn: {
    backgroundColor: "#f95a25",
    borderRadius: 50,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 7
  },
  btnSubmit: {
    color: "#fff",
    fontSize: 22,
    padding: 10,
    paddingHorizontal: 22
  },
  btnSend: {
    color: "#fbe6db",
    fontSize: 18
  },
  inputMessage: {
    padding: 7,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#f95a25",
    borderRadius: 25,
    width: "80%"
  }
});

export default styles;
