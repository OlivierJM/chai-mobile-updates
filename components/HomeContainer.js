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
                            <Text>{post.title}</Text>
                          </Body>
                        </Right>
                      </CardItem>
                      <CardItem cardBody>
                        <Image source={{uri: 'https://avatars2.githubusercontent.com/u/11255454?s=400&u=0706cef517ee93348624c32a124f4d7781ebdf3f&v=4'}} style={{height: 200, width: null, flex: 1}}/>
                      </CardItem>
                      <CardItem>
                        <Body>
                          <Text>
                            {post.content}
                          </Text>
                        </Body>
                      </CardItem>
                      <CardItem>
                        <Right>
                          <Text>{post.createdAt && post.createdAt.toLocaleString()}</Text>
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
