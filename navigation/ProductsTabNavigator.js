import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ProductHomeScreen from '../screens/ProductHomeScreen'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Results: ProductHomeScreen
    // Results: HistoryScreen,
    // Tictac: TictacScreen--------------
    // Game: GameScreen,
  },
  config
)

HomeStack.navigationOptions = {
  tabBarLabel: 'Results',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-clipboard${focused ? '' : '-outline'}`
          : 'md-clipboard'
      }
    />
  ),
};

HomeStack.path = '';

// const GameStack = createStackNavigator(
//   {
//     Game: GameScreen,
//     Names: NameScreen,
//     Tictac: TictacScreen,
//   },
//   config
// );

// GameStack.navigationOptions = {
//   tabBarLabel: 'Game',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-grid' : 'md-grid'} />
//   ),
// };

// GameStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  // GameStack,
});

// tabNavigator.path = '';

export default tabNavigator;
