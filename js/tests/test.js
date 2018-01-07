import test from 'ava';
import aid from '../src/aid';

test('aid.js', t => {
  t.false(aid.existy(undefined), 'input undefined, return false');

  t.true(aid.existy('undefined'), 'input "undefined", return true');

  t.false(aid.existy(null), 'input null, return false');

  t.true(aid.existy(false), 'input false, return true');

  t.true(aid.existy(true), 'input true, return true');
/*
  it('input 0, return true', function () {
    expect(aid.existy(0)).toEqual(true);
  });

  it('input "", return true', function () {
    expect(aid.existy('')).toEqual(true);
  });

  it('input {}, return true', function () {
    expect(aid.existy({})).toEqual(true);
  });
  */
});