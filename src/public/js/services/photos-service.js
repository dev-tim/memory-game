require('whatwg-fetch');

module.exports = {
	fetchPhotos: function fetchPhotos () {
		return fetch('/photos')
			.then(function asJson (resp) {
				return resp.json();
			})
	}
};