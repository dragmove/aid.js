'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _browser = require('./browser');

function awesomeFunction(a, b) {
  return a + b;
}

var aid = {};

aid.isIE = _browser.isIE;
aid.awesome = awesomeFunction;

exports.default = aid;
module.exports = exports['default'];