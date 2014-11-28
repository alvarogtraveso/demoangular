/**
 * Express configuration
 */

'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var config = require('./environment');


var path = require('path');

module.exports = function(app) {
    var env = app.get('env');

    app.set('views', path.join(config.root, 'server/views'));
    app.set('view engine', 'jade');
    app.use(bodyParser.urlencoded({ extended: false })); 	// to support URL-encoded bodies
    app.use(bodyParser.json());       	// to support JSON-encoded bodies
    app.use(methodOverride());

    if(env === 'production') {
        app.use(express.static(path.join(config.root, 'public')));
        app.set('appPath', 'public');
    }

    if(env === 'development' || env === 'test'){
        app.use(express.static(path.join(config.root, 'app')));
        app.use('/bower_components',express.static(path.join(config.root, '/bower_components')));
        app.set('appPath', 'app');
        app.use(errorHandler()); // Error handler - has to be last
    }
};
