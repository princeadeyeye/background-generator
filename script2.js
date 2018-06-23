/*var todos = [
      
      "clean room",
      "brush teeth",
      "exercise",
      "study javascript",
      "eat healthy"

];

var todosnet = [
      
      "clean parlur",
      "brush tomgue",
      "running",
      "study css",
      "eat good"

];


function todosfunc(todo, i) {
	// body...
	console.log(todo, i);

}
todos.forEach(todosfunc);
todosnet.forEach(todosfunc);
var counterOne = 10;
while (counterOne > 0) {
	console.log(counterOne);
	counterOne--;
}
var todosLength = todos.length;
for (var i = 0; i < todosLength;  i++) {
	console.log(todos[i], i);
}
var counterTwo = 10;
do {
	console.log(counterTwo);
	counterTwo--;
	}while(counterTwo > 10)
*/

var database = [
{
	username:"Muiz",
	password: "Owner"
},
{
	username:"hikmah",
	password: "444"
},
{
	username:"nai",
	password: "333"
},
{
	username:"hab",
	password: "111"
}
];

var newsfeed = [
{
	username: "buchi",
	timeline: "he is here"

},
{
	username: "tman",
	timeline: "who are you talking about"

},
{
	username: "toja",
	timeline: "will you keep quiet"

}
];

var userNamePrompt = prompt("what is your username");
var passNamePrompt = prompt("what is your password");

function checkValidUser(username, password) {
	// body...
	for (var i = 0; i < database.length; i++) {
		if (username === database.username[i] &&
			password === database.password[i]) {
			return true;
		} else {
			return false;
		}
	}
}

function signin(user, pass) {
	// body...
	if (checkValidUser) {
		console.log(newsfeed);
	} else {
		alert ("Sorry, wrong password or username");
	}
}

signin(userNamePrompt, passNamePrompt);