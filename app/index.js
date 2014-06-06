'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var pd = require(path.resolve(__dirname, '../lib/processDirectory.js'));

var AngularModuleGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');
    this.appName = path.basename(process.cwd());
    this.moduleName = path.basename(process.cwd());

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous AngularModule generator!'));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  app: function () {
    var generatorRootDir = path.resolve(__dirname, '..');
    var templateDir = path.join(generatorRootDir, '/template');
    var yoTemplateDir = path.join(generatorRootDir, 'app/template');
    var self = this;
    var processDirectory = pd.processDirFactory({
      topLevelDir: templateDir,
      yoTemplateDir: yoTemplateDir,
      copyFx: self.copy.bind(self),
      templateFx: self.template.bind(self),
      mkdirFx: self.mkdir.bind(self)
    });
    processDirectory(templateDir);
  },

  projectfiles: function () {
  }
});

module.exports = AngularModuleGenerator;
