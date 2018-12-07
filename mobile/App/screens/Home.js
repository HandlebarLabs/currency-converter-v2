import React from "react";
import { View, Button, TextInput, Text } from "react-native";
import { connect } from "react-redux";

import { swapCurrency } from "../redux/currencies";

class Home extends React.Component {
  static defaultProps = {
    conversionRate: 1.3
  };

  state = { amount: 100 };

  handlePressBase = () => {
    this.props.navigation.navigate("CurrencyList", { type: "Base" });
  };

  handlePressQuote = () => {
    this.props.navigation.navigate("CurrencyList", { type: "Quote" });
  };

  handlePressOptions = () => {
    this.props.navigation.navigate("Options");
  };

  handleSwapCurrency = () => {
    this.props.dispatch(swapCurrency());
  };

  handleChangeText = value => {
    let amount = null;
    if (value && value.length) {
      amount = parseFloat(value);
    }
    this.setState({
      amount
    });
  };

  render() {
    const { amount } = this.state;
    const {
      baseCurrency,
      quoteCurrency,
      conversionRate,
      primaryColor
    } = this.props;

    return (
      <View>
        <View style={{ alignSelf: "center" }}>
          <View
            style={{ width: 30, height: 30, backgroundColor: primaryColor }}
          />
          <Text>{baseCurrency}</Text>
          <TextInput
            onChangeText={this.handleChangeText}
            keyboardType="numeric"
            defaultValue={amount !== null ? amount.toString() : ""}
            style={{
              borderWidth: 1,
              borderColor: "black",
              width: 300,
              paddingVertical: 5,
              fontSize: 15
            }}
          />
          <Text>{quoteCurrency}</Text>
          <TextInput
            editable={false}
            value={amount !== null ? (amount * conversionRate).toString() : ""}
            style={{
              borderWidth: 1,
              borderColor: "black",
              width: 300,
              paddingVertical: 5,
              fontSize: 15
            }}
          />
        </View>
        <Button title="Base Currency" onPress={this.handlePressBase} />
        <Button title="Quote Currency" onPress={this.handlePressQuote} />
        <Button title="Options" onPress={this.handlePressOptions} />
        <Button title="Reverse Currencies" onPress={this.handleSwapCurrency} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    primaryColor: state.theme.primaryColor,
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency
  };
};

export default connect(mapStateToProps)(Home);
