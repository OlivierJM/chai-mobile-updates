import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator, Image } from "react-native";
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
                    <Card>
                      <CardItem>
                        <Right>
                          <Body>
                            <Text>{post.meta.title}</Text>
                          </Body>
                        </Right>
                      </CardItem>
                      <CardItem cardBody>
                        <Image source={{uri: `http://10.1.0.149:3000/cdn/storage/images/${post._id}/original/${post._id}.${post.ext}`}}
                           style={{height: 200, width: null, flex: 1}}/>
                      </CardItem>
                      <CardItem>
                        <Body>
                          <Text>
                            {post.meta.content}
                          </Text>
                        </Body>
                      </CardItem>
                      <CardItem>
                        <Right>
                          <Text>{post.meta.createdAt && post.meta.createdAt.toLocaleString()}</Text>
                        </Right>
                      </CardItem>
                    </Card>
                    // <ListItem>
                    //   <Body>
                    //     <Text>{post.title}</Text>
                    //     <Text note numberOfLines={3}>
                    //       {post.content}
                    //     </Text>
                    //   </Body>
                    //   <Right>
                    //     <Button transparent onPress={() => this.props.navigation.navigate('Details', { post })}>
                    //       <Text>More</Text>
                    //     </Button>
                    //   </Right>
                    // </ListItem>
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
