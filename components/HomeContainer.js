import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import Meteor, { withTracker } from 'react-native-meteor';
import { Container, ListItem, Content, List, Left, Thumbnail, Body, Button, Right } from 'native-base'
 
 
class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    const { postsReady, posts } = this.props;
    return <Container>
        {
          !postsReady 
          ?
           <ActivityIndicator /> 
          : <Content>
            <List dataArray={posts} renderRow={post => 
            <ListItem thumbnail>
                  <Left>
                    <Thumbnail square source={{ uri: "Image URL" }} />
                  </Left>
                  <Body>
                    <Text>{post.title}</Text>
                    <Text note numberOfLines={3}>
                      {post.content}
                    </Text>
                  </Body>
                  <Right>
                    <Button transparent>
                      <Text>More</Text>
                    </Button>
                  </Right>
                </ListItem>
              } />
          </Content>}
      </Container>;
  }
}
 
export default withTracker(params => {
  const handle = Meteor.subscribe('posts');
  return {
    postsReady: handle.ready(),
    posts: Meteor.collection('posts').find(),
  };
})(HomeScreen);