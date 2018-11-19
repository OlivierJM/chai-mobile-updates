import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Meteor, { withTracker, MeteorListView } from 'react-native-meteor';
import UpdateCard from '../components/UpdateCard'
 
Meteor.connect('ws://10.1.0.149:3000/websocket'); //do this only once
 
class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  renderRow(post) {
    return <UpdateCard post={post} />;
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