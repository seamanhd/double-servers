var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequestOne (request, response) {
	response.end("You Suck");
}

var serverOne = http.createServer(handleRequestOne);

serverOne.listen(PORT1, function(){
	console.log("ServerOne is listening on http://localhost:%s", PORT1);
});

function handleRequestTwo (request, response) {
	response.end("You're Awesome!");
}

var serverTwo = http.createServer(handleRequestTwo);

serverTwo.listen(PORT2, function(){
	console.log("ServerTwo is listening on http://localhost:%s", PORT2);
})