var fs = require("fs");

_3vot.el.innerHTML = fs.readFileSync( __dirname + "/views/layout.html"  );

var Account = require("./models/account");

var createdAccount;

//Query
Account.query("select name,type from Account", { fail: onError });

Account.bind("refresh", onData);

function onData(){
	console.log("Query Executed")
	console.log(Account.all());

	var first = Account.first();
	first.Type = "Other Type " + parseInt( Math.random() * 100 ) ;
	first.save( { done: onUpdate, fail: onError });
}

function onUpdate(){
	console.log("Account Update")
	createdAccount = Account.create(
		{ Name: "New Account " + parseInt( Math.random() * 100 ), Type: "Prospect" }, 
		{ done: onCreate, fail: onError }
	);
}

function onCreate(){
	console.log("Account Created")
	console.log(this);

	createdAccount.destroy( { done: onDelete, fail: onError } )
}

function onDelete(){
	console.log("Account Deleted");
}

//Called on Error
function onError(err){
    console.log("ERROR BEGINS")
    console.log("Error Ocurred");
    console.log(err);
    console.log("Context",this);
    console.log(this);
    console.log("ERROR ENDS","\n");

}

//Create Account

//Delete Account