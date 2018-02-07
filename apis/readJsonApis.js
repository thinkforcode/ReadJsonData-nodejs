(function(){
	"use strict";
	var data = require('../data/data.json');

	module.exports =  function(app){

		app.get('/people', function(req,res){

			var ppl = '';

			data.people.forEach(function(item){
				ppl += `
				<h1>${item.id}</h1>
				<h3>${item.name}</h3>
				<h1>${item.email}</h1>
				<p>${item.phone}</p>
				`
			});

			res.send(`${ppl}`);
		});


	 //get people by ID

	 app.get('/people/:peopleId' , function(req ,res){
	 	var item = data.people[req.params.peopleId -1];

	 	res.send(`

	 		    <h1>${item.id}</h1>
				<h3>${item.name}</h3>
				<h1>${item.email}</h1>
				<p>${item.phone}</p>

				`
	 		);
	 });



	}

})();