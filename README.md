
# react-native-httpserver

## Getting started

`$ npm install react-native-httpserver --save`

### Mostly automatic installation

`$ react-native link react-native-httpserver`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-httpserver` and add `RNHttpserver.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNHttpserver.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNHttpserverPackage;` to the imports at the top of the file
  - Add `new RNHttpserverPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-httpserver'
  	project(':react-native-httpserver').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-httpserver/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-httpserver')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNHttpserver.sln` in `node_modules/react-native-httpserver/windows/RNHttpserver.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Cl.Json.RNHttpserver;` to the usings at the top of the file
  - Add `new RNHttpserverPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNHttpserver from 'react-native-httpserver';

// TODO: What do with the module?
RNHttpserver;
```
  