import React from "react";
import { FlatList, Button } from "react-native";
import { connect } from "react-redux";

import currencies from "../data/currencies";
import { changeBaseCurrency, changeQuoteCurrency } from "../redux/currencies";

class CurrencyList extends React.Component {
  handlePress = currency => {
    const { navigation, dispatch } = this.props;

    if (navigation.getParam("type", "").toLowerCase() === "quote") {
      dispatch(changeQuoteCurrency(currency));
    } else {
      dispatch(changeBaseCurrency(currency));
    }

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

export default connect()(CurrencyList);
