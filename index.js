(function(){
	"use strict";
    
     var express = require('express');
     var app = express();

    





     //requiring apis here from apis folder

     require('./apis/homeApis.js')(app);
     require('./apis/readJsonApis.js')(app);

     //listening server here
      app.set('port' , process.env.PORT || 3000);
      app.listen(app.get('port') , function(){
      	 console.log("server running on the port: " +app.get('port'));
      });


})();
