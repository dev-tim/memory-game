var Promise = require('es6-promise').Promise;
var rest = require('restler');
var config = require('../config/config');

module.exports = {

	popularPhotos: function (token) {
		return new Promise(function (resolve, reject) {
			rest.get(url.resolve(config.api.apiHost, '/photos/popular'), {
				timeout: 10000,
				query: {
					access_token: token
				}
			}).on('timeout', function (ms) {
				console.error('Timeout error on getting photos after ' + ms + ' ms');
				reject(Error('Timeout error on getting photos after ' + ms + ' ms'))
			}).on('error', function (err) {
				console.error('Failed to fetch photos, error', err);
				reject(err);
			}).on('complete', function (data) {
				console.log('Fetched list of photos', data);
				resolve(data);
			});
		});
	}


};
