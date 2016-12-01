import { DeviceEventEmitter } from 'react-native';
import { NativeModules } from 'react-native';

//const { RNHTTPServer } = NativeModules;

var RNHS = NativeModules.RNHTTPServer;

module.exports = {
    start: function(opts) {
        RNHS.start();
    },

    stop: function() {
        RNHS.stop();
    }

 }

//export default RNHTTPServer;
