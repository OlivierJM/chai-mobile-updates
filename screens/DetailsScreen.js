import React, { Component } from "react";
import { Image, Linking, Dimensions, StyleSheet } from "react-native";
import format from 'date-fns/format'
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
import SERVER_URL from '../config'

export default class DetailScreen extends Component {
  static navigationOptions = {
    title: "Details",
    headerStyle: {
      backgroundColor: '#428cf4',
    },
    headerTintColor: '#fff',
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
                  <Text>{post.meta.title}</Text>
                  <Text note>{post.meta.author}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>

              {
                post.meta.type === 'video' ?
              <Text onPress={
                () => Linking.canOpenURL(post.meta.link).then(supported => {
                  if (!supported) {
                    alert('Can\'t handle url: ' + post.meta.link);
                  } else {
                    return Linking.openURL(post.meta.link);
                  }
                }).catch(err => console.error('An error occurred', err))
              }>
                {'Click To Open'}
              </Text>
              :
               <Image
                source={{ uri: `http://${SERVER_URL}/cdn/storage/images/${post._id}/original/${post._id}.${post.ext}` }}
                style={styles.image}
                esizeMode={'contain'}
              /> 
              }
            </CardItem>
              <CardItem>
                <Right>
                  <Text>{ format(post.meta.createdAt) }</Text>
                </Right>
              </CardItem>
              <CardItem>
              <Text>{post.meta.content}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const win = Dimensions.get('window');

export const styles = StyleSheet.create({
    image: {
        flex: 1,
        alignSelf: 'stretch',
        width: win.width,
        height: 300,
    }
});

