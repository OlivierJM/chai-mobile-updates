import React, { Component } from "react";
import { Image } from "react-native";
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
    let Image_Http_URL = { uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png'};
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
