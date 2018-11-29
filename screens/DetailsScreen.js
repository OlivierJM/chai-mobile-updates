import React, { Component } from "react";
import { Image, Linking } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

export default class DetailScreen extends Component {
  static navigationOptions = {
    title: "Details"
  };
  render() {
    const { navigation } = this.props;
    const post = navigation.getParam("post", {});
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>{post.title}</Text>
                  <Text note>{post.author}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Text onPress={
                () => Linking.canOpenURL(post.link).then(supported => {
                  if (!supported) {
                    console.log('Can\'t handle url: ' + post.link);
                  } else {
                    return Linking.openURL(post.link);
                  }
                }).catch(err => console.error('An error occurred', err))
              }>
                {'Video'}
              </Text>
              <Image
                source={{ uri: post.link }}
                style={{width: 400, height: 400}}
              />
            </CardItem>
            <CardItem>
              <Right>
                <Text>{post.createdAt}</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Text>{post.content}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
