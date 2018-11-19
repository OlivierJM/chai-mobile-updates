import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Meteor, { withTracker, MeteorListView } from 'react-native-meteor';
 
Meteor.connect('ws://10.1.0.149:3000/websocket'); //do this only once
 
class HomeScreen extends Component {
  renderRow(todo) {
    return <Text>{todo.title}</Text>;
  }
  render() {
    const { postsReady } = this.props;
 
    return (
      <View>
        {!postsReady && <Text>Not ready</Text>}
        <MeteorListView
          collection="posts"
          options={{ sort: { createdAt: -1 } }}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}
 
export default withTracker(params => {
  const handle = Meteor.subscribe('posts');
  return {
    postsReady: handle.ready(),
    posts: Meteor.collection('posts').find(),
  };
})(HomeScreen);