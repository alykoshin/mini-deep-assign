/* globals describe, before, beforeEach, after, afterEach, it */

'use strict';

var chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect,
    should = chai.should();

var deepCopy = require('../');

describe('mini-deep-assign', function () {

  it('should keep type for top-level properties', function () {
    var source = {
      null: null,
      true: true,
      false: false,
      string: 'string',
      regexp: /.*/,
      data: new Date(),
      undefined: undefined, // property with undefined value may be removed by Node
      emptyObject: {},
      object: { value: 1 },
      emptyArray: [],
      array: [ 1, 2, 3 ],
    };
    var target = {};
    var res = source;
    expect(deepCopy(target, source)).eql(res);
  });

});
