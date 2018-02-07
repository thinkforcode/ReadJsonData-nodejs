(function(){
	"use strict";

	module.exports = function(app){

		app.get('/home', function(req,res){
			res.send("welcome to home routes from homeApis file");
		});
	}

})();