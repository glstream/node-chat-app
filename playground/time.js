const moment = require('moment');


var someTimestamp = moment().valueOf();
var createdAt = 1230000000000
var date = moment(createdAt);

var date = moment(createdAt);
// date.add(1, 'year')
console.log(date.format(`h:mm a`));
console.log(date);
// var date = new Date()

// console.log(date.getMonth())