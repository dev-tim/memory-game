var Promise = require('es6-promise').Promise;
var rest = require('restler');
var config = require('../config/config');
var url = require('url');

module.exports = {

	popularPhotos: function (token, limit) {
		return new Promise(function (resolve, reject) {
			var u = url.resolve(config.api.apiHost, '/photos/popular');
			rest.get(u, {
				timeout: 10000,
				query: {
					limit : limit || 8,
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
