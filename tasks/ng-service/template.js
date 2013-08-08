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
  var defaultSuffix = "service";


  init.process({type: 'ng-service'}, [
    // Prompt for these values.
    {
      name: 'name',
      message: 'Service name (without any suffix like "service")',
      validator: /^[a-z][a-zA-Z0-9_]*$/,
      warning: 'Must be a valid variable name and start with a lowercase letter.'
    },
    {
      name: 'suffix',
      message: 'Suffix for the service name',
      default: defaultSuffix,
      validator: /^[a-z][a-zA-Z0-9_]*$/,
      warning: 'Must be a valid variable name and start with a lowercase letter.'
    },
    {
      name: 'spec',
      message: 'Create service test/spec',
      default: 'Y/n'
    }

  ], function(err, props) {
    // A few additional properties.
//    props.suffix = props.suffix || defaultSuffix;
    props.capitalizedSuffix = props.suffix.charAt(0).toUpperCase() + props.suffix.slice(1);
    props.capitalizedName = props.name.charAt(0).toUpperCase() + props.name.slice(1);
    props.angularMainAppFilePath = pkg.angularMainAppFilePath;

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // TODO: find a way to modify the existing sources, so that no manual step is needed (e.g. extending the app.js)

   /* if (grunt.file.expand(name).length) {
      grunt.warn('Existing files may be overwritten!');
    }
    */
    // Actually copy (and process) files.
    // TODO: exclude the test if props.spec === false
    var specFile = /y/i.test(props.spec) ? 'service-spec.js' : '';
    grunt.log.writeln("spec: " + /y/i.test(props.spec) + " - " +specFile);
    init.copyAndProcess(files, props, {});

    // All done!
    done();

    grunt.log.writeln('Successfully created service: ' + props.capitalizedName + props.capitalizedSuffix + ' ('+props.name + '-'+props.suffix+'.js)' );
    grunt.log.writeln('Please add the service-module dependency "service.'+props.name+'" to your mainApp ('+props.angularMainAppFilePath+') ');

  });

};