import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Button } from 'react-native';
import Video from 'react-native-video';
import Input from './components/Forms/Input';
import { Provider, actions } from '../core';
import SearchResultContainer from './containers/SearchResults';

export default class App extends Component {
  state = {
    text: 'Eminem'
  };

  render() {
    return (
      <Provider>
        <ScrollView>
          <View style={styles.container}>
            <Input
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
            />
            <Button
              title="Search"
              onPress={() => actions.search(this.state.text)}
            />
            <SearchResultContainer />
            {/*
        {sound && (
          <Video
            source={{ uri: `http://192.168.10.21:8080/${sound.id}` }}
            audioOnly={true}
            playInBackground={true}
          />
        )} */}
          </View>
        </ScrollView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
