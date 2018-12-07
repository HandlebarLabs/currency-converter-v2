import React from "react";
import { FlatList, Button } from "react-native";

import currencies from "../data/currencies";

class CurrencyList extends React.Component {
  handlePress = currency => {
    console.log("currency", currency);
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <FlatList
        contentContainerStyle={{ paddingBottom: 30 }}
        data={currencies}
        renderItem={({ item }) => (
          <Button title={item} onPress={() => this.handlePress(item)} />
        )}
        keyExtractor={item => item}
      />
    );
  }
}

export default CurrencyList;
