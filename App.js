import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={style.screen}>
      <Header title="Guess a Number" />
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
