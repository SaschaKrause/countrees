/*
 * grunt-init-jquery
 * https://gruntjs.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'desc.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'some notes';

// Template-specific notes to be displayed after question prompts.
exports.after = 'DONE :)';

// Any existing file or directory matching this wildcard will cause a warning.
//exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  var pkg = grunt.file.readJSON('package.json');
  var defaultSuffix = "ctrl";


  init.process({type: 'ng-ctrl'}, [
    // Prompt for these values.
    {
      name: 'name',
      message: 'Controller name (without any suffix like "ctrl" or "controller")',
      validator: /^[a-z][a-zA-Z0-9_]*$/,
      warning: 'Must be a valid variable name and start with a lowercase letter.'
    },
    {
      name: 'suffix',
      message: 'Suffix for the controller name',
      default: defaultSuffix,
      validator: /^[a-z][a-zA-Z0-9_]*$/,
      warning: 'Must be a valid variable name and start with a lowercase letter.'
    }

  ], function(err, props) {
    // A few additional properties.
//    props.suffix = props.suffix || defaultSuffix;
    props.capitalizedSuffix = props.suffix.charAt(0).toUpperCase() + props.suffix.slice(1);
    props.capitalizedName = props.name.charAt(0).toUpperCase() + props.name.slice(1);
    props.angularMainAppFilePath = pkg.angularMainAppFilePath;

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: 'libs/**'});

    // All done!
    done();

    grunt.log.writeln('Successfully created controller: ' + props.capitalizedName + props.capitalizedSuffix + ' ('+props.name + '-'+props.suffix+'.js)' );
    grunt.log.writeln('Please add the controller-module dependency "controller.'+props.name+'" to your mainApp ('+props.angularMainAppFilePath+') ');

  });

};