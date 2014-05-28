// 3vot-model is an NPM Dependency that connects with ThreeVot API Controller Visualforce.
var _3Model = require("3vot-model")

//Declared the Fields of the Model
var fields = ["Name","Type"]

//Declare the Model
Account = _3Model.Model.setup("Account", fields);

//module.exports is of CommonJS Pattern for modular applications.
module.exports = Account