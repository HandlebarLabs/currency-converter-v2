import React from "react";
import { View, Button } from "react-native";

export default ({ navigation }) => (
  <View>
    <Button
      title="Base Currency"
      onPress={() => navigation.navigate("CurrencyList")}
    />
    <Button
      title="Quote Currency"
      onPress={() => navigation.navigate("CurrencyList")}
    />
    <Button title="Options" onPress={() => navigation.navigate("Options")} />
  </View>
);
