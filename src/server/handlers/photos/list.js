var photosService = require('../../service/photos-service');

module.exports = function (req, res) {
	// hardcode token for now
	var token = 'b5eee221c5405e013c10478242a6f6dffcdd9292';
	photosService.popularPhotos(token)
		.then(function(data){
			res.json(data);
		})
		.catch(function (err) {
			res.json({
				error: err
			})
		});
};
