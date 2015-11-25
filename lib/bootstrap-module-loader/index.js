var fs = require('fs');
var path = require('path');

module.exports = function(source) {
  this.cacheable();

  var defaults = "@import \"~bootstrap/less/variables.less\";\n" +
                 "@import \"~bootstrap/less/mixins.less\";\n";

  var overrides = path.join(__dirname, 'variables.less');

  var callback = this.async();
  this.addDependency(overrides);

  fs.readFile(overrides, "utf-8", function(err, variableOverrides) {
    if (err) return callback(err);

    callback(null, defaults + variableOverrides + source);
  });
}
