/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  WebView
} = React;

var HTTPServer = require('react-native-httpserver');

var example = React.createClass({

  getInitialState: function() {
    HTTPServer.start("9099");
        
    return {
      urlbase: '',
      loading: true,
    }

  },
  
  componentDidMount: function(){
    console.log("componentDidMount");
    var self = this;
    HTTPServer.url( function(urlbase){
      console.log("urlbase", urlbase);
      self.setState({
        urlbase:urlbase,
        loading:false,
      });
    });

    HTTPServer.dir('/', ['html'], function(info){
      console.log("info:", info)
    });
  },

  _render: function(){
    if( this.state.loading ){
      return (<Text>Loading</Text>);
    }

    return (
      <Image source={{uri: this.state.urlbase + '/image.png'}} style={styles.container} />
    );
  },

  render: function() {
    if( this.state.loading ){
      return (<Text>Loading</Text>);
    }

    return (
      <View style={styles.container}>
        <WebView
          style={styles.webView}
          url={this.state.urlbase +'/'} 
          bounces={false}
          scrollEnabled={false}
          automaticallyAdjustContentInsets={false}
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  webView: {
    backgroundColor: '#000',
  }
});

AppRegistry.registerComponent('example', () => example);
