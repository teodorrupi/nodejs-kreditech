var simulatedJSONOutput = {"transaction1": {"id" : "100", "name": 'hundred'}};

var ModelData = function(data){

	this.id = data.id;
	return this;
};

ModelData.get = function(id){
	var model = new ModelData(simulatedJSONOutput[id]);

	return model;

}
