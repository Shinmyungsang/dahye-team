/* Gulpfile */

/**
 * Task to split tasks into seperate files
 */
var requireDir = require('require-dir');

/**
 * Require tasks from gulp/tasks folder
 */
requireDir('./js/tilt.js_master/gulp/tasks', { recurse: true });