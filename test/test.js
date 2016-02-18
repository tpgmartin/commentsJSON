var assert = require('assert'),
    commentJSON = require('../src/commentsJSON');

describe('commentJSON', function() {
  it('should read file', function () {
    var input = './test/test.json';

    var output = commentJSON.read(input);

    assert.equal(output, '{  "key1": "value1",   "key2": "value2"}');
  });

  it('should parse file', function () {
    var input = './test/test_with_comment.json';

    var output = commentJSON.parse(input);

    assert.equal(output, '{"_comment": "This is a comment",  "key1": "value1",   "key2": "value2"}');
  });
});