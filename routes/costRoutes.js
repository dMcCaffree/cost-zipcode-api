'use strict';

module.exports = function(app) {
	var projects = require('../controllers/costController');

	app.route('/projects')
		.get(projects.list_all_projects)
		.post(projects.add_project);

	app.route('/projects/:projectName')
		.get(projects.read_a_project)
		.put(projects.update_a_project)
		.delete(projects.delete_a_project);
};