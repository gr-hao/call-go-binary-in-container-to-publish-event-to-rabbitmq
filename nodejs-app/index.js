console.log("Hello");

var exec = require("child_process").exec;
//var cmd = "./go-producer.darwin-amd64 hello-from-nodejs-app";
var cmd = "./go-producer hello-from-nodejs-app";

exec(cmd, function (error, stdout, stderr) {
  console.log(stdout);
  console.log(error);
  console.log(stderr);
});
