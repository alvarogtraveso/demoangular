/**
 * Main application routes
 */

'use strict';

module.exports = function(app) {

    // All routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
