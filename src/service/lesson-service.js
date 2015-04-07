var LessonModel = require('../model/lesson');
var Promise = require('es6-promise').Promise;


module.exports = {

	listLessons: function () {
		return new Promise(function (resolve, reject) {
			LessonModel.find({}, function (err, lessonsList) {
				if (err) {
					reject(Error(err));
				} else {
					console.log('Fetched lessons', lessonsList);
					resolve(lessonsList);
				}
			})
		});
	},

	addLesson: function (lesson) {
		return new Promise(function (resolve, reject) {
			LessonModel.create(lesson, function createCallback (err, lessonsList) {
				if (err) {
					console.error('Cant add list lessons', err);
					reject(Error(err));
				} else {
					console.log('Added lesson', lessonsList);
					resolve('Stuff worked!');
				}
			});
		});
	},

	removeLesson: function () {
		console.log('BOOM!! Fixit !!!')
	},

	upateLesson: function () {
		console.log('BOOM!! Fixit !!!')
	},

	findPopularLessons: function () {

	}
};
