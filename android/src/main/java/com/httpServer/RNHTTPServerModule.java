
package com.httpServer;

import android.net.Uri;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.httpServer.SimpleWebServer;

public class RNHTTPServerModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  private SimpleWebServer webServer = new SimpleWebServer(9999);


  public RNHTTPServerModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNHTTPServer";
  }

  @ReactMethod
  public void start() {

    webServer.start();

  }

  @ReactMethod
  public void stop() {
    webServer.stop();
  }
}