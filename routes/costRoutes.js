'use strict';

module.exports = function(app) {
	var zipcodes = require('../controllers/costController');

	app.route('/zipcodes')
		.get(zipcodes.list_all_zipcodes)
		.post(zipcodes.add_zipcode);

	app.route('/zipcodes/:zipcode')
		.get(zipcodes.read_a_zipcode)
		.put(zipcodes.update_a_zipcode)
		.delete(zipcodes.delete_a_zipcode);
};