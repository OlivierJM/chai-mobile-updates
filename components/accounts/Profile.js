import React, { Component } from "react";
import { Container, Content, Card, CardItem, Text, Body, Button } from "native-base";
import Meteor from 'react-native-meteor'

export default class Profile extends Component {
  static navigationOptions = {
    title: "Profile",
    headerStyle: {
      backgroundColor: '#428cf4',
    },
    headerTintColor: '#fff',
  };
    logUserOut = () => {
        Meteor.logout()
        return this.props.navigation.navigate('Login')
    }
  render() {
      const user = Meteor.user()
      if(!Meteor.userId()){
          return (
            <Container>
            <Content padder>
              <Card transparent>
                <CardItem>
                  <Body>
                    <Text>
                      Logged out
                    </Text>
                  </Body>
                  <Body>
                      <Button>
                          <Text>
                              Logout
                          </Text>
                      </Button>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Container>
          )
      }
    return (
      <Container>
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                  Name: {user.profile.name}
                </Text>
              </Body>
              </CardItem>
              <CardItem>
              <Body>
                <Text>
                 Phone: {user.username}
                </Text>
              </Body>
              </CardItem>
              <CardItem>
              <Body>
                  <Button onPress={this.logUserOut}>
                      <Text>
                          Logout
                      </Text>
                  </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}