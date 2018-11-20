import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import PropTypes from 'prop-types'


const UpdateCard = ({post}) => (
  <Container>
  <Content>
    <Card style={{flex: 0}}>
      <CardItem>
        <Left>
          <Body>
            <Text>{post.title}</Text>
            <Text note>{post.createdAt}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          <Image source={{uri: post.link}} style={{height: 200, width: 200, flex: 1}}/>
          <Text>
          {post.content}
          </Text>
        </Body>
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent textStyle={{color: '#87838B'}}>
            <Icon name="logo-github" />
            <Text>{post.note}</Text>
          </Button>
        </Left>
      </CardItem>
    </Card>
  </Content>
</Container>
)

UpdateCard.propTypes = {
      post: PropTypes.object.isRequired
  }
export default UpdateCard 