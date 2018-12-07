import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator, Image } from "react-native";
import Meteor, { withTracker } from "react-native-meteor";
import distanceInWordsStrict from 'date-fns/distance_in_words_strict'

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
  Card,
  Icon,
  CardItem
} from "native-base";
import { resourceContext } from '../App'

// add a date when an announcement was created 
// search bar
// background color
// admin on dashboard
// testing on sabbath on android
// 
class HomeScreen extends Component{
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#428cf4',
    },
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
                        <Thumbnail source={{ uri: `http://10.1.0.149:3000/cdn/storage/images/${post._id}/original/${post._id}.${post.ext}` }} />
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
