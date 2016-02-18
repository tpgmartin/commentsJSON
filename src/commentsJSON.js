var fs = require('fs');

module.exports = {

  read: function (json) {
    file = fs.readFileSync(json, 'utf8').replace(/\n/g, "");
    return file;
  },

  parse: function (json) {
    var fileArr = fs.readFileSync(json, 'utf8').split('\n');

    return fileArr.map(function (l) {
      if (l.trim().indexOf('//') === 0) {
        return l = '"_comment": "' + l.trim().slice(2).trim() + '",';
      } else {
        return l;
      }
    }).join('');

  }

};
