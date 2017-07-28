'use strict';

var mongoose = require('mongoose'),
	Project = mongoose.model('Project');

exports.list_all_projects = function(req, res) {
	Project.find({}, function(err, project) {
		err ? res.send(err) : res.json(project);
	});
};

exports.add_project = function(req, res) {
	var new_project = new Project(req.body);
	new_project.save(function(err, project) {
		err ? res.send(err) : res.json(project);
	});
};

exports.read_a_project = function(req, res) {
	Project.findById(req.params.projectName, function(err, project) {
		if (err)
			res.send(err);
		res.json(project);
	});
};

exports.update_a_project = function(req, res) {
	Project.findOneAndUpdate({name: req.params.projectName}, req.body, {new: true}, function(err, project) {
		if (err)
			res.send(err);
		res.json(project);
	});
};

exports.delete_a_project = function(req, res) {
	Project.remove({
		name: req.params.projectName
	}, function(err, project) {
		if (err)
			res.send(err);
		res.json({ message: 'Project successfully deleted' });
	});
};