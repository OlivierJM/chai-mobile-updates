import React, { Component } from "react";
import { Text, ActivityIndicator  } from "react-native";
import Meteor from "react-native-meteor";
import distanceInWordsStrict from 'date-fns/distance_in_words_strict'
import SERVER_URL from '../config'

import {
  Container,
  ListItem,
  Content,
  List,
  Left,
  Thumbnail,
  Body,
  Button,
  Right,
} from "native-base";
import { resourceContext } from '../App'

// add a date when an announcement was created 
// search bar
// background color
// admin on dashboard
// 
class HomeScreen extends Component{
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#428cf4',
    },
    headerTintColor: '#fff',
  }
  render(){
    if (!Meteor.userId()) {
      return (
        <Container>
          <Body style={{
            flex: 1,
            justifyContent: 'center',
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
        ({posts}) => (
        <Container>
            {!posts.length ? (
              <ActivityIndicator />
            ) : (
              <Content>
                <List
                  dataArray={posts}
                  renderRow={post => (
                  <ListItem avatar onPress={() => this.props.navigation.navigate('Details', { post })}>
                      <Left>
                        <Thumbnail source={{ uri: `http://${SERVER_URL}/cdn/storage/images/${post._id}/original/${post._id}.${post.ext}` }} />
                      </Left>
                      <Body>
                      <Text>{post.meta.title}</Text>
                        <Text note numberOfLines={1}>{post.meta.content}</Text>
                      </Body>
                      <Right>
                      <Text>
                          {
                            `${distanceInWordsStrict(post.meta.createdAt, new Date())} ago`
                          }
                      </Text>
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
