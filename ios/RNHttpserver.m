//  RNHTTPServer

// based on
// https://github.com/cesanta/mongoose
// https://github.com/face/MongooseDaemon

#import <Foundation/Foundation.h>
#import "RCTBridgeModule.h"
#import "mongoose.h"

@interface RNHTTPServer : NSObject <RCTBridgeModule>{
	struct mg_context *ctx;
}

@property (readwrite) struct mg_context *ctx;

@end


@implementation RNHTTPServer

@synthesize ctx;

RCT_EXPORT_MODULE();

//RCT_EXPORT_METHOD(start:(NSString *)port) {
RCT_EXPORT_METHOD(start:(NSDictionary *) opts) {

	NSString * port 	= opts[@"port"];
	NSString * optroot 	= opts[@"root"]; // BUNDLE || DOCS

	NSString * root;
	if( [optroot isEqualToString:@"BUNDLE"] ){
		root = [NSString stringWithFormat:@"%@/www", [[NSBundle mainBundle] bundlePath] ];
		NSLog(@"using bundle root: %@", root);
	}
	
	if( [optroot isEqualToString:@"DOCS"] ){
		root = [NSString stringWithFormat:@"%@", [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) objectAtIndex:0] ];
		NSLog(@"using docs root: %@", root);
	}
	
	self.ctx = mg_start();     // Start Mongoose serving thread
	mg_set_option(ctx, "root", [root UTF8String]);  // Set document root
	mg_set_option(ctx, "ports", [port UTF8String]);    // Listen on port
	mg_set_option(ctx, "dir_list", "yes");
	//mg_bind_to_uri(ctx, "/foo", &bar, NULL); // Setup URI handler
	
	NSLog(@"RNHTTPServer: Listening on port %@", port);
}

RCT_EXPORT_METHOD(stop) {
	mg_stop(ctx);
}

@end
