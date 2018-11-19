import React from 'react';
import { Text } from 'react-native'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <Text>
        Settings could be here
      </Text>
    )
  }
}
