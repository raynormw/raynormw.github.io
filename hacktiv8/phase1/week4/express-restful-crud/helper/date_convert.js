const strftime = require('strftime');

module.exports = {
	dateConvert: function(date) {
		console.log("Helper: ", Date.parse(date));
		let d = new Date(Date.parse(date));
		console.log(d);
    return strftime('%A, %d %b %Y, %H:%M', d);
	}
}
