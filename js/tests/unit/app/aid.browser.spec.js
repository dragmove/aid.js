'use strict';
describe('unit test - aid.js', function () {
  // sample - http://jasmine.github.io/2.0/introduction.html

  describe('aid.browser', function () {
    var browser = aid.browser;

    var CHROME_UA = 'mozilla/5.0 (windows nt 6.1; wow64) applewebkit/537.36 (khtml, like gecko) hrome/39.0.2171.65 safari/537.36',
      FIREFOX_UA = 'mozilla/5.0 (windows nt 6.1; wow64; rv:32.0) gecko/20100101 firefox/32.0',
      SAFARI_UA = 'mozilla/5.0 (windows nt 6.1; wow64) applewebkit/534.57.2 (khtml, like gecko) version/5.1.7 safari/534.57.2';

    var IE7_UA = 'mozilla/4.0 (compatible; msie 7.0; windows nt 6.0; slcc1; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729)',

      IE8_UA = 'mozilla/4.0 (compatible; msie 8.0; windows nt 6.1; wow64; trident/4.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; .net4.0e; infopath.3)',
      IE8_COMPAT_UA = 'mozilla/4.0 (compatible; msie 7.0; windows nt 6.1; wow64; trident/4.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; .net4.0e; infopath.3)',

      IE9_UA = 'mozilla/5.0 (compatible; msie 9.0; windows nt 6.1; wow64; trident/5.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; .net4.0e; infopath.3)',
      IE9_COMPAT_UA = 'mozilla/4.0 (compatible; msie 7.0; windows nt 6.1; wow64; trident/5.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; .net4.0e; infopath.3)',

      IE10_UA = 'mozilla/5.0 (compatible; msie 10.0; windows nt 6.1; trident/6.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0)',
      IE10_COMPAT_UA = 'mozilla/4.0 (compatible; msie 7.0; windows nt 6.1; trident/6.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0)',

      IE11_UA = 'mozilla/5.0 (windows nt 6.1; win64; x64; trident/7.0; .net clr 2.0.50727; slcc2; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; .net4.0e; infopath.3; rv:11.0) like gecko',
      IE11_COMPAT_UA = 'mozilla/4.0 (compatible; msie 8.0; windows nt 6.1; win64; x64; trident/7.0; .net clr 2.0.50727; slcc2; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; .net4.0e; infopath.3)';

    describe('.getIECompatibility().isIE', function () {
      it('at chrome browser, return false.', function () {
        expect(browser.getIECompatibility(CHROME_UA).isIE).toEqual(false);
      });
      it('at firefox browser, return false.', function () {
        expect(browser.getIECompatibility(FIREFOX_UA).isIE).toEqual(false);
      });
      it('at safari browser, return false.', function () {
        expect(browser.getIECompatibility(SAFARI_UA).isIE).toEqual(false);
      });

      it('at ie7 browser, return true.', function () {
        expect(browser.getIECompatibility(IE7_UA).isIE).toEqual(true);
      });

      it('at ie8 browser, return true.', function () {
        expect(browser.getIECompatibility(IE8_UA).isIE).toEqual(true);
      });
      it('at ie8 browser compat view, return true.', function () {
        expect(browser.getIECompatibility(IE8_COMPAT_UA).isIE).toEqual(true);
      });

      it('at ie9 browser, return true.', function () {
        expect(browser.getIECompatibility(IE9_UA).isIE).toEqual(true);
      });
      it('at ie9 browser compat view, return true.', function () {
        expect(browser.getIECompatibility(IE9_COMPAT_UA).isIE).toEqual(true);
      });

      it('at ie10 browser, return true.', function () {
        expect(browser.getIECompatibility(IE10_UA).isIE).toEqual(true);
      });
      it('at ie10 browser compat view, return true.', function () {
        expect(browser.getIECompatibility(IE10_COMPAT_UA).isIE).toEqual(true);
      });

      it('at ie11 browser, return true.', function () {
        expect(browser.getIECompatibility(IE11_UA).isIE).toEqual(true);
      });
      it('at ie11 browser compat view 8 mode, return true.', function () {
        expect(browser.getIECompatibility(IE11_COMPAT_UA).isIE).toEqual(true);
      });
    });

    describe('.getIECompatibility().isCompatibilityMode', function () {
      it('at ie7 browser, return false.', function () {
        expect(browser.getIECompatibility(IE7_UA).isCompatibilityMode).toEqual(false);
      });

      it('at ie8 browser, return false.', function () {
        expect(browser.getIECompatibility(IE8_UA).isCompatibilityMode).toEqual(false);
      });
      it('at ie8 browser compat view, return true.', function () {
        expect(browser.getIECompatibility(IE8_COMPAT_UA).isCompatibilityMode).toEqual(true);
      });

      it('at ie9 browser, return false.', function () {
        expect(browser.getIECompatibility(IE9_UA).isCompatibilityMode).toEqual(false);
      });
      it('at ie9 browser compat view, return true.', function () {
        expect(browser.getIECompatibility(IE9_COMPAT_UA).isCompatibilityMode).toEqual(true);
      });

      it('at ie10 browser, return false.', function () {
        expect(browser.getIECompatibility(IE10_UA).isCompatibilityMode).toEqual(false);
      });
      it('at ie10 browser compat view, return true.', function () {
        expect(browser.getIECompatibility(IE10_COMPAT_UA).isCompatibilityMode).toEqual(true);
      });

      it('at ie11 browser, return false.', function () {
        expect(browser.getIECompatibility(IE11_UA).isCompatibilityMode).toEqual(false);
      });
      it('at ie11 browser compat view 8 mode, return true.', function () {
        expect(browser.getIECompatibility(IE11_COMPAT_UA).isCompatibilityMode).toEqual(true);
      });
    });
  });
});