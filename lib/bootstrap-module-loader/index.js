var fs = require('fs');

module.exports = function(source) {
  var userVariablesPath = this.options.bootstrapModuleLoader.customVariablesPath;

  var callback = this.async();
  this.addDependency(userVariablesPath);
  this.cacheable();

  fs.readFile(userVariablesPath, "utf-8", function(err, userVariables) {
    if (err) return callback(err);

    var variables = "@import \"~bootstrap/less/variables.less\";\n";
    var mixins = "@import \"~bootstrap/less/mixins.less\";\n";

    callback(null, variables + mixins + userVariables + source);
  });
}
