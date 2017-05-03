var moment = require('moment');

var generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: moment().valueOf()
    };
}

var generateLocationMessage = (from, latitude, longitude) => {
    return {
        from,
        url: `https://www.google.com/maps?q=${latitude}, ${longitude}`,
        createdAt: moment().valueOf()
    }
}

module.exports = {generateMessage, generateLocationMessage}


// var someTimestamp = moment().valueOf();
// var createdAt = 123
// var date = moment(createdAt);

// var date = moment(createdAt);
// // date.add(1, 'year')
// console.log(date.format(`h:mm a`));
// console.log(date);
