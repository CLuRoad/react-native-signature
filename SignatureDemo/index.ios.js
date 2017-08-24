/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from "react";
import { AppRegistry, StyleSheet,Button, Image, Text, View } from "react-native";
import SignatureView from "react-native-signature";
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";


let nav;
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signature: null
    };
  }

  _onPress() {
    nav.navigate("SignatureView", {
      title: "签字",
      callback: (data) => {
        this.setState({
          signature: data
        });
      }
    });
  }

  signatureView() {
    if (!this.state.signature) {
      return (
        <View style={styles.wrap_style1}>

        </View>
      );
    } else {
      return (
        <View style={styles.wrap_style1}>
          <Image
            style={{ width: 275, height: 155 }}
            source={{ uri: this.state.signature }}
          />
        </View>
      );
    }
  }
  render() {
    nav = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button title="开始签名" onPress={this._onPress.bind(this)} />
        {this.signatureView()}
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{"\n"}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const NavigatorMark = StackNavigator(
  {
    Home: { screen: Home },
    SignatureView: { screen: SignatureView }
  },
  {
    navigationOptions: {
      // headerStyle: { backgroundColor: color.theme }
      headerBackTitle: null,
      headerTintColor: "#333333",
      showIcon: true
    }
  }
);

export default class Signature extends Component {
  render() {
    return <NavigatorMark />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});


AppRegistry.registerComponent('Signature', () => Signature);
