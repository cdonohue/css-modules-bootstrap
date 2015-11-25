var fs = require('fs');

module.exports = function(source) {
  var loaderOptions = this.options.bootstrapModuleLoader;
  var userVariablesPath = loaderOptions && loaderOptions.variables;
  this.cacheable();

  var defaults = "@import \"~bootstrap/less/variables.less\";\n" +
                 "@import \"~bootstrap/less/mixins.less\";\n";

  if (userVariablesPath) {
    var callback = this.async();
    this.addDependency(userVariablesPath);

    fs.readFile(userVariablesPath, "utf-8", function(err, userVariables) {
      if (err) return callback(err);

      callback(null, defaults + userVariables + source);
    });
  }

  return defaults + source;
}
