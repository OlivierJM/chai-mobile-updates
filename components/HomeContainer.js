import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import Meteor, { withTracker } from "react-native-meteor";
import {
  Container,
  ListItem,
  Content,
  List,
  Left,
  Thumbnail,
  Body,
  Button,
  Right
} from "native-base";
import { resourceContext } from '../App'


class HomeScreen extends Component{
  static navigationOptions = {
    title: 'Home',
  }
  render(){
    if (!Meteor.userId()) {
      return (
        <Container>
          <Body style={{
            flex: 1,
            justifyContent: 'center'
          }}>
            <Button transparent onPress={() => this.props.navigation.navigate('Login')}>
              <Text>
                Press here to log in
              </Text>
            </Button>
          </Body>
        </Container>
      )
    }
    return (
      <resourceContext.Consumer>

      {   
        posts => (
        <Container>
            {!posts.length ? (
              <ActivityIndicator />
            ) : (
              <Content>
                <List
                  dataArray={posts}
                  renderRow={post => (
                    <ListItem>
                      <Body>
                        <Text>{post.title}</Text>
                        <Text note numberOfLines={3}>
                          {post.content}
                        </Text>
                      </Body>
                      <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate('Details', { post })}>
                          <Text>More</Text>
                        </Button>
                      </Right>
                    </ListItem>
                  )}
                />
              </Content>
            )}
          </Container>
          
        )  
        }

    </resourceContext.Consumer>
    )
  }
}
export default HomeScreen
// export default withTracker(params => {
//   const handle = Meteor.subscribe("posts");
//   return {
//     postsReady: handle.ready(),
//     posts: Meteor.collection("posts").find()
//   };
// })(HomeScreen);
