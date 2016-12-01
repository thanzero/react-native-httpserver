# react-native-httpserver

A http server for react native that serves files from a `www` directory in your bundle.  
Nice when you:  
- want to load things into WebViews with 'http://' (instead of 'file://')  
- want to use 'networked' images  


## Getting started

1. Clone this repo into your node_modules directory
2. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
3. Go to `node_modules` ➜ `react-native-httpserver` and add the `.xcodeproj` file
4. In the XCode project navigator, select your project. Add `libRNHTTPServer.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
5. Click `RNHTTPServer.xcodeproj` in the project navigator, go to the `Build Settings` tab and make sure  `Header Search Paths` contains both `$(SRCROOT)/../../react-native/React` and `$(SRCROOT)/../../../React` - mark both as `recursive`.
6. Create a folder called `www` in your project's top-level directory (usually next to your node_modules and index.js file), and put the files you want to access over http in there.  
7. Add the `www` folder to Xcode (so it gets bundled with the app).


## Usage

All you need is to `require` the `react-native-httpserver` module and then call the `start` method, with a port.

```javascript
var http = require('react-native-httpserver');
http.start("8999");
```

The toplevel URL then becomes `http://127.0.0.1:8999/index.html`, also accessible as `http.url()`.

## Implementation

Based on [MongooseDaemon](https://github.com/face/MongooseDaemon) and the [mongoose server](https://github.com/cesanta/mongoose)

Mongoose is cross platform, so an Android version *should* be possible.

## Changelog

0.0.7	Added example project
0.0.6	Added doc root option
0.0.3	Published to npm  
0.0.2	Replaced GCDWebServer with Mongoose  
0.0.1	IPR

## TODO

- [x] Example project  
- [ ] Android version  
- [ ] Better docs  


