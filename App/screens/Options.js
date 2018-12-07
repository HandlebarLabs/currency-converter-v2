import React from "react";
import { View, Button } from "react-native";

export default ({ navigation }) => (
  <View>
    <Button title="Themes" onPress={() => navigation.navigate("Themes")} />
  </View>
);
