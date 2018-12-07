import React from "react";
import { View, Button, Linking } from "react-native";

class Options extends React.Component {
  handleThemePress = () => {
    this.props.navigation.navigate("Themes");
  };

  handleLinkPress = () => {
    Linking.openURL("http://handlebarlabs.com").catch(() => {
      alert("an error occurred!");
    });
  };

  render() {
    return (
      <View>
        <Button title="Themes" onPress={this.handleThemePress} />
        <Button title="Handlebar Labs" onPress={this.handleLinkPress} />
      </View>
    );
  }
}

export default Options;
