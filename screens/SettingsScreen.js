import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default class Departments extends React.Component {
  static navigationOptions = {
    title: 'Departments',
    headerStyle: {
      backgroundColor: '#428cf4',
    },
    headerTintColor: '#fff',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.content}>
          Coming soon ...
        </Text>
      </View>
    )
  }
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  content: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

})