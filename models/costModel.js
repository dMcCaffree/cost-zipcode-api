'use strict';
var mongoose = require('mongoose');
var Schema = monogoose.Schema;

var ZipcodeSchema = new Schema({
	project: {
		type: String,
		Required: 'Enter project name please'
	},
	zipcodes: {
		zipcode: {
			code: Number,
			cost: Number
		}
	}
});

module.exports = mongoose.model('Zipcodes', ZipcodeSchema);