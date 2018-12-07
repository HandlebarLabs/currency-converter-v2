import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../screens/Home";
import CurrencyList from "../screens/CurrencyList";
import Options from "../screens/Options";
import Themes from "../screens/Themes";

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      //   header: () => null,
      headerTitle: "Home"
    }
  },
  Options: {
    screen: Options,
    navigationOptions: {
      headerTitle: "Options"
    }
  },
  Themes: {
    screen: Themes,
    navigationOptions: {
      headerTitle: "Themes"
    }
  }
});

const CurrencyListStack = createStackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: `${navigation.state.params.type} Currency`
    })
  }
});

const ModalStack = createStackNavigator(
  {
    Home: {
      screen: HomeStack
    },
    CurrencyList: {
      screen: CurrencyListStack
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default createAppContainer(ModalStack);
