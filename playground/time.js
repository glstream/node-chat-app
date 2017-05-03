const moment = require('moment');


var someTimestamp = moment().valueOf();
var createdAt = 123
var date = moment(createdAt);

var date = moment(createdAt);
// date.add(1, 'year')
console.log(date.format(`h:mm a`));
console.log(date);
