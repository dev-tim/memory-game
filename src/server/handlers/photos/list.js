var photosService = require('../../service/photos-service');

module.exports = function (req, res) {
	photosService.popularPhotos(req.user.token)
		.then(res.json)
		.catch(function (err) {
			res.json({
				msg: err
			})
		});
};
