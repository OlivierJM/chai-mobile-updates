import React from 'react';
import { Text } from 'react-native'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
    headerStyle: {
      backgroundColor: '#428cf4',
    },
    headerTintColor: '#fff',
  };

  render() {
    return (
      <Text>
        Settings could be here
      </Text>
    )
  }
}
