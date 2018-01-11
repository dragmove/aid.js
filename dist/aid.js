'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = require('./base');

var _browser = require('./browser');

var aid = {
  /*
   * base
   */
  existy: _base.existy,
  isDefined: _base.isDefined,

  /*
   * browser
   */
  isIE: _browser.isIE
};

exports.default = aid;
module.exports = exports['default'];