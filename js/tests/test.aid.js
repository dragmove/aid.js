import test from 'ava';
import aid from '../src/aid';

test('aid.existy()', t => {
  t.false(aid.existy(undefined), 'input undefined, return false');

  t.false(aid.existy(null), 'input null, return false');

  t.true(aid.existy(false), 'input false, return true');

  t.true(aid.existy(true), 'input true, return true');

  t.true(aid.existy(0), 'input 0, return true');

  t.true(aid.existy(''), 'input "", return true');

  t.true(aid.existy({}), 'input {}, return true');

  t.true(aid.existy(function() {}), 'input function, return true');
});

test('aid.isDefined()', t => {
  t.false(aid.isDefined(undefined), 'input undefined, return false');

  t.false(aid.isDefined(null), 'input null, return false');

  t.true(aid.isDefined(false), 'input false, return true');

  t.true(aid.isDefined(true), 'input true, return true');

  t.true(aid.isDefined(0), 'input 0, return true');

  t.true(aid.isDefined(''), 'input "", return true');

  t.true(aid.isDefined({}), 'input {}, return true');

  t.true(aid.isDefined(function() {}), 'input function, return true');
});