import React, { Component } from "react";
import { Container, Content, Card, CardItem, Text, Body, Button } from "native-base";
import Meteor from 'react-native-meteor'

export default class Profile extends Component {
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
                  {user.profile.name}
                </Text>
              </Body>
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