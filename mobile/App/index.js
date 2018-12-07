import React from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";

import store from "./redux";
import Navigator from "./navigation/navigator";

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
