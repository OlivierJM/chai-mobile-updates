/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { createContext, Component } from 'react'
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native'
import Meteor, { withTracker } from 'react-native-meteor'
import AppNavigator from './navigation/AppNavigator'
import SERVER_URL from './config.js'


// Meteor.connect(`wss://${SERVER_URL}/websocket`); // only for production
Meteor.connect(`ws://${SERVER_URL}/websocket`); // only for development

const initialContext = {
  posts:[],
  leaders: [],
  departments: [],
  numbers: []
}

export const resourceContext = createContext(initialContext)


type Props = {};
export class App extends Component<Props> {
  render() {
    const { posts, leaders, numbers } = this.props
    return (
      <resourceContext.Provider value={{posts, leaders, numbers}}>
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        {/* <Text>Hello There</Text> */}
        <AppNavigator />
      </View>
     </resourceContext.Provider> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});



export default withTracker(params => {
  const handle = Meteor.subscribe("images");
  const subReady = Meteor.subscribe("leaders");
  return {
    postsReady: handle.ready(),
    posts: Meteor.collection("images").find({}, { sort: { 'meta.createdAt': -1 } }),
    leaders: Meteor.collection('leaders').find(),
    numbers: Meteor.collection('phoneNumbers').find(),
  };
})(App)

