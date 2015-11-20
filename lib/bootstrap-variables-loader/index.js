var path = require('path');

module.exports = function(source) {
  this.cacheable();

  const variables = "@import \"./variables.less\";\n";
  const mixins = "@import \"./mixins.less\";\n";

  if (path.extname(this.resourcePath) === '.less') {
    return variables + mixins + source;
  }

  return source;
}
