import {isIE} from './browser';

function awesomeFunction(a, b) { return a + b; }

var aid = {};

aid.isIE = isIE;
aid.awesome = awesomeFunction;

export default aid;

