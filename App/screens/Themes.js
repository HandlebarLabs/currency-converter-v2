import React from "react";
import { ScrollView, Button } from "react-native";

import colors from "../config/colors";

class Themes extends React.Component {
  handlePress = color => {
    console.log("color", color);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <ScrollView>
        <Button
          title="Blue"
          onPress={() => this.handlePress(colors.primaryBlue)}
          color={colors.primaryBlue}
        />
        <Button
          title="Orange"
          onPress={() => this.handlePress(colors.primaryOrange)}
          color={colors.primaryOrange}
        />
        <Button
          title="Green"
          onPress={() => this.handlePress(colors.primaryGreen)}
          color={colors.primaryGreen}
        />
        <Button
          title="Purple"
          onPress={() => this.handlePress(colors.primaryPurple)}
          color={colors.primaryPurple}
        />
      </ScrollView>
    );
  }
}

export default Themes;
