import React from "react";
import { ScrollView, Button } from "react-native";
import { connect } from "react-redux";

import colors from "../config/colors";
import { changePrimaryColor } from "../redux/theme";

class Themes extends React.Component {
  handlePress = color => {
    this.props.navigation.goBack();
    this.props.dispatch(changePrimaryColor(color));
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

export default connect()(Themes);
