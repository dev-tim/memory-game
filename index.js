var app = require('./src/app');
var port = 3000;
console.log('Listening on port ' + 3000);
app.listen(process.env.PORT || port)