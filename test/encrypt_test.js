'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.encrypt = {
  encrypt: function(test) {
    var actual = grunt.file.read('test/tmp/123.encrypted');
    var expected = grunt.file.read('test/expected/123.encrypted');
    test.equal(actual, expected, 'should encrypt a text file');

    actual = grunt.file.read('test/tmp/secrets.json.encrypted');
    expected = grunt.file.read('test/expected/secrets.json.encrypted');
    test.equal(actual, expected, 'should encrypt a json file');

    test.done();
  },
  decrypt: function(test) {
    var actual = grunt.file.read('test/tmp/123');
    var expected = grunt.file.read('test/fixtures/123');
    test.equal(actual, expected, 'should decrypt a text file');

    actual = grunt.file.read('test/tmp/secrets.json');
    expected = grunt.file.read('test/fixtures/secrets.json');
    test.equal(actual, expected, 'should decrypt a json file');

    test.done();
  }
};
