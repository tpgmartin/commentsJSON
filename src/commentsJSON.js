var fs = require('fs');

module.exports = {

  read: function (json) {
    file = fs.readFileSync(json, 'utf8').replace(/\n/g, "");
    return file;
  },

  parse: function (json, commentIndicator) {
    var fileArr = fs.readFileSync(json, 'utf8').split('\n');
    var commentIndicator = commentIndicator || '//';

    return fileArr.map(function (l) {
      if (l.trim().indexOf(commentIndicator) === 0) {
        return l = '"_comment": "' + l.trim().slice(commentIndicator.length).trim() + '",';
      } else {
        return l;
      }
    }).join('');

  }

};
