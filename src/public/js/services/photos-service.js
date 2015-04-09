require('whatwg-fetch');

module.exports = {
	fetchPhotos: function fetchPhotos () {
		return fetch('/photos')
			.then(function asJson (resp) {
				return resp.json();
			}).then(function transformPhotos (data) {
				return data.photos.items.map(function (photo) {
					return {
						id: photo.id,
						url: photo.photoUrl
					}
				})
			})
	}
};