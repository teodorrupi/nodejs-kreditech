Controller = function (app, couchbase, config){

	/* Pseudo code
		Controller will make the viewer and the model meet.
		After getting the data from the database, using the model we have created 
		and the methods found at model.js , we only parse what we need.

		We create instances of Model, which is not very useful in our case since
		we only need the times a transaction occurred.

		I used request.get to retreive a JSON dump for every transaction. After getting the dump, storing the JSON to the cauchBase using db.set 
		did not work throwing a key not found error.

		Here is a simulation of the program, having the data collected and ready in the controller.
		The controller then communicates with the viewer to show the table with these data.

	*/

	var api_key = "06d7bdc105ad98e8cf6f94eda5ec3a92";
	var request = require('request');
	var url = "https://kokos.pl/webapi/get-auction-data?key=" + api_key + "&id=176&comments=1&type=JSON";

	//getting the json source
	request.get(url, function(error, response, body){
	console.log(body);
    try
    	{
    		JSON.parse(body);
    } catch (e){
    	return -1;
    }
	});




	//Controller passing data to View
	var data = { title: 'Transactions & Status', data:{'100':'1', '200':'2', '300': '3', '400': '4', '500': '5', '600': '6'}};
	app.get('/', function (req, res) {
  	res.render('index', data);


});


}


module.exports = Controller;

