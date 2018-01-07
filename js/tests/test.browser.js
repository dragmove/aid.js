import test from 'ava';
import aid from '../src/aid';

const EDGE_UA = 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136',
  FIREFOX_UA = 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0',
  OPERA_UA = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36 OPR/43.0.2442.1144',
  CHROME_UA = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
  SAFARI_UA = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2';

const IE7_UA = 'mozilla/4.0 (compatible; msie 7.0; windows nt 6.0; slcc1; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729)',

  IE8_UA = 'mozilla/4.0 (compatible; msie 8.0; windows nt 6.1; wow64; trident/4.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; .net4.0e; infopath.3)',
  IE8_COMPAT_UA = 'mozilla/4.0 (compatible; msie 7.0; windows nt 6.1; wow64; trident/4.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; .net4.0e; infopath.3)',

  IE9_UA = 'mozilla/5.0 (compatible; msie 9.0; windows nt 6.1; wow64; trident/5.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; .net4.0e; infopath.3)',
  IE9_COMPAT_UA = 'mozilla/4.0 (compatible; msie 7.0; windows nt 6.1; wow64; trident/5.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; .net4.0e; infopath.3)',

  IE10_UA = 'mozilla/5.0 (compatible; msie 10.0; windows nt 6.1; trident/6.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0)',
  IE10_COMPAT_UA = 'mozilla/4.0 (compatible; msie 7.0; windows nt 6.1; trident/6.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0)',

  IE11_UA = 'mozilla/5.0 (windows nt 6.1; win64; x64; trident/7.0; .net clr 2.0.50727; slcc2; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; .net4.0e; infopath.3; rv:11.0) like gecko',
  IE11_COMPAT_UA = 'mozilla/4.0 (compatible; msie 8.0; windows nt 6.1; win64; x64; trident/7.0; .net clr 2.0.50727; slcc2; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; .net4.0e; infopath.3)';

test('aid.isIE()', t => {
  t.false(aid.isIE(CHROME_UA), 'at chrome browser, return false');

  t.false(aid.isIE(FIREFOX_UA), 'at firefox browser, return false');

  t.false(aid.isIE(OPERA_UA), 'at opera browser, return false');

  t.false(aid.isIE(SAFARI_UA), 'at safari browser, return false');

  t.false(aid.isIE(EDGE_UA), 'at edge browser, return false');

  t.true(aid.isIE(IE7_UA), 'at ie7 browser, return true');

  t.true(aid.isIE(IE8_UA), 'at ie8 browser, return true');

  t.true(aid.isIE(IE8_COMPAT_UA), 'at ie8 browser compat view, return true');

  t.true(aid.isIE(IE9_UA), 'at ie9 browser, return true');

  t.true(aid.isIE(IE9_COMPAT_UA), 'at ie9 browser compat view, return true');

  t.true(aid.isIE(IE10_UA), 'at ie10 browser, return true');

  t.true(aid.isIE(IE10_COMPAT_UA), 'at ie10 browser compat view, return true');

  t.true(aid.isIE(IE11_UA), 'at ie11 browser, return true');

  t.true(aid.isIE(IE11_COMPAT_UA), 'at ie11 browser compat view, return true');
});