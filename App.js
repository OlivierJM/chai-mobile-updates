import React, { createContext } from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { AppLoading, Asset, Font, Icon } from 'expo'
import Meteor, { withTracker } from 'react-native-meteor'
import AppNavigator from './navigation/AppNavigator'
import SERVER_URL from './config.js'

Meteor.connect(`ws://${SERVER_URL}/websocket`); //do this only once
// Meteor.connect('ws://68.183.68.55/websocket'); //do this only once
// Meteor.connect('ws://192.168.8.102:3000/websocket'); //do this only once
const initialContext = {
  posts:[],
  leaders: [],
  departments: [],
  numbers: []
}

export const resourceContext = createContext(initialContext)

export class App extends React.Component {
  state = {
    isLoadingComplete: false,
    loading: true // only used on fonts
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    const { posts, leaders, numbers } = this.props
    // if (this.state.loading && !this.props.skipLoadingScreen) {
    if (this.state.loading) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
       <resourceContext.Provider value={{posts, leaders, numbers}}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
       </resourceContext.Provider> 
      )
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'Roboto': require("native-base/Fonts/Roboto.ttf"),
        'Roboto_medium': require("native-base/Fonts/Roboto_medium.ttf")
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
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
