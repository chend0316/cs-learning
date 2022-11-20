var pbjs = require("protobufjs/cli/pbjs");

pbjs.main([ "--target", "json-module", "./pb/main.proto" ], function(err, output) {
  if (err)
      throw err;
  // do something with output
  console.debug(output)
});
