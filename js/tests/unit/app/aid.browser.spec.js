'use strict';

describe('aid.js', function() {
  describe('aid.browser', function() {
    var browser = aid.browser;

    var EDGE_UA =
        'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136',
      FIREFOX_UA =
        'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0',
      OPERA_UA =
        'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36 OPR/43.0.2442.1144',
      CHROME_UA =
        'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
      SAFARI_UA =
        'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2';

    var IE7_UA =
        'mozilla/4.0 (compatible; msie 7.0; windows nt 6.0; slcc1; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729)',
      IE8_UA =
        'mozilla/4.0 (compatible; msie 8.0; windows nt 6.1; wow64; trident/4.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; .net4.0e; infopath.3)',
      IE8_COMPAT_UA =
        'mozilla/4.0 (compatible; msie 7.0; windows nt 6.1; wow64; trident/4.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; .net4.0e; infopath.3)',
      IE9_UA =
        'mozilla/5.0 (compatible; msie 9.0; windows nt 6.1; wow64; trident/5.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; .net4.0e; infopath.3)',
      IE9_COMPAT_UA =
        'mozilla/4.0 (compatible; msie 7.0; windows nt 6.1; wow64; trident/5.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; .net4.0e; infopath.3)',
      IE10_UA =
        'mozilla/5.0 (compatible; msie 10.0; windows nt 6.1; trident/6.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0)',
      IE10_COMPAT_UA =
        'mozilla/4.0 (compatible; msie 7.0; windows nt 6.1; trident/6.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0)',
      IE11_UA =
        'mozilla/5.0 (windows nt 6.1; win64; x64; trident/7.0; .net clr 2.0.50727; slcc2; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; .net4.0e; infopath.3; rv:11.0) like gecko',
      IE11_COMPAT_UA =
        'mozilla/4.0 (compatible; msie 8.0; windows nt 6.1; win64; x64; trident/7.0; .net clr 2.0.50727; slcc2; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; .net4.0e; infopath.3)';

    describe('.isIE()', function() {
      it('at chrome browser, return false.', function() {
        expect(browser.isIE(CHROME_UA)).toEqual(false);
      });
      it('at firefox browser, return false.', function() {
        expect(browser.isIE(FIREFOX_UA)).toEqual(false);
      });
      it('at opera browser, return false.', function() {
        expect(browser.isIE(OPERA_UA)).toEqual(false);
      });
      it('at safari browser, return false.', function() {
        expect(browser.isIE(SAFARI_UA)).toEqual(false);
      });
      it('at edge browser, return false.', function() {
        expect(browser.isIE(EDGE_UA)).toEqual(false);
      });

      it('at ie7 browser, return true.', function() {
        expect(browser.isIE(IE7_UA)).toEqual(true);
      });

      it('at ie8 browser, return true.', function() {
        expect(browser.isIE(IE8_UA)).toEqual(true);
      });
      it('at ie8 browser compat view, return true.', function() {
        expect(browser.isIE(IE8_COMPAT_UA)).toEqual(true);
      });

      it('at ie9 browser, return true.', function() {
        expect(browser.isIE(IE9_UA)).toEqual(true);
      });
      it('at ie9 browser compat view, return true.', function() {
        expect(browser.isIE(IE9_COMPAT_UA)).toEqual(true);
      });

      it('at ie10 browser, return true.', function() {
        expect(browser.isIE(IE10_UA)).toEqual(true);
      });
      it('at ie10 browser compat view, return true.', function() {
        expect(browser.isIE(IE10_COMPAT_UA)).toEqual(true);
      });

      it('at ie11 browser, return true.', function() {
        expect(browser.isIE(IE11_UA)).toEqual(true);
      });
      it('at ie11 browser compat view 8 mode, return true.', function() {
        expect(browser.isIE(IE11_COMPAT_UA)).toEqual(true);
      });
    });

    describe('.isEdge()', function() {
      it('at chrome browser, return false.', function() {
        expect(browser.isEdge(CHROME_UA)).toEqual(false);
      });
      it('at firefox browser, return false.', function() {
        expect(browser.isEdge(FIREFOX_UA)).toEqual(false);
      });
      it('at opera browser, return false.', function() {
        expect(browser.isEdge(OPERA_UA)).toEqual(false);
      });
      it('at safari browser, return false.', function() {
        expect(browser.isEdge(SAFARI_UA)).toEqual(false);
      });
      it('at edge browser, return true.', function() {
        expect(browser.isEdge(EDGE_UA)).toEqual(true);
      });

      it('at ie7 browser, return false.', function() {
        expect(browser.isEdge(IE7_UA)).toEqual(false);
      });

      it('at ie8 browser, return false.', function() {
        expect(browser.isEdge(IE8_UA)).toEqual(false);
      });
      it('at ie8 browser compat view, return false.', function() {
        expect(browser.isEdge(IE8_COMPAT_UA)).toEqual(false);
      });

      it('at ie9 browser, return false.', function() {
        expect(browser.isEdge(IE9_UA)).toEqual(false);
      });
      it('at ie9 browser compat view, return false.', function() {
        expect(browser.isEdge(IE9_COMPAT_UA)).toEqual(false);
      });

      it('at ie10 browser, return false.', function() {
        expect(browser.isEdge(IE10_UA)).toEqual(false);
      });
      it('at ie10 browser compat view, return false.', function() {
        expect(browser.isEdge(IE10_COMPAT_UA)).toEqual(false);
      });

      it('at ie11 browser, return false.', function() {
        expect(browser.isEdge(IE11_UA)).toEqual(false);
      });
      it('at ie11 browser compat view 8 mode, return false.', function() {
        expect(browser.isEdge(IE11_COMPAT_UA)).toEqual(false);
      });
    });

    describe('.isFF()', function() {
      it('at chrome browser, return false.', function() {
        expect(browser.isFF(CHROME_UA)).toEqual(false);
      });
      it('at firefox browser, return true.', function() {
        expect(browser.isFF(FIREFOX_UA)).toEqual(true);
      });
      it('at opera browser, return false.', function() {
        expect(browser.isIE(OPERA_UA)).toEqual(false);
      });
      it('at safari browser, return false.', function() {
        expect(browser.isFF(SAFARI_UA)).toEqual(false);
      });
      it('at edge browser, return false.', function() {
        expect(browser.isFF(EDGE_UA)).toEqual(false);
      });

      it('at ie7 browser, return false.', function() {
        expect(browser.isFF(IE7_UA)).toEqual(false);
      });

      it('at ie8 browser, return false.', function() {
        expect(browser.isFF(IE8_UA)).toEqual(false);
      });
      it('at ie8 browser compat view, return false.', function() {
        expect(browser.isFF(IE8_COMPAT_UA)).toEqual(false);
      });

      it('at ie9 browser, return false.', function() {
        expect(browser.isFF(IE9_UA)).toEqual(false);
      });
      it('at ie9 browser compat view, return false.', function() {
        expect(browser.isFF(IE9_COMPAT_UA)).toEqual(false);
      });

      it('at ie10 browser, return false.', function() {
        expect(browser.isFF(IE10_UA)).toEqual(false);
      });
      it('at ie10 browser compat view, return false.', function() {
        expect(browser.isFF(IE10_COMPAT_UA)).toEqual(false);
      });

      it('at ie11 browser, return false.', function() {
        expect(browser.isFF(IE11_UA)).toEqual(false);
      });
      it('at ie11 browser compat view 8 mode, return false.', function() {
        expect(browser.isFF(IE11_COMPAT_UA)).toEqual(false);
      });
    });

    describe('.isOpera()', function() {
      it('at chrome browser, return false.', function() {
        expect(browser.isOpera(CHROME_UA)).toEqual(false);
      });
      it('at firefox browser, return false.', function() {
        expect(browser.isOpera(FIREFOX_UA)).toEqual(false);
      });
      it('at opera browser, return true.', function() {
        expect(browser.isOpera(OPERA_UA)).toEqual(true);
      });
      it('at safari browser, return false.', function() {
        expect(browser.isOpera(SAFARI_UA)).toEqual(false);
      });
      it('at edge browser, return false.', function() {
        expect(browser.isOpera(EDGE_UA)).toEqual(false);
      });

      it('at ie7 browser, return false.', function() {
        expect(browser.isOpera(IE7_UA)).toEqual(false);
      });

      it('at ie8 browser, return false.', function() {
        expect(browser.isOpera(IE8_UA)).toEqual(false);
      });
      it('at ie8 browser compat view, return false.', function() {
        expect(browser.isOpera(IE8_COMPAT_UA)).toEqual(false);
      });

      it('at ie9 browser, return false.', function() {
        expect(browser.isOpera(IE9_UA)).toEqual(false);
      });
      it('at ie9 browser compat view, return false.', function() {
        expect(browser.isOpera(IE9_COMPAT_UA)).toEqual(false);
      });

      it('at ie10 browser, return false.', function() {
        expect(browser.isOpera(IE10_UA)).toEqual(false);
      });
      it('at ie10 browser compat view, return false.', function() {
        expect(browser.isOpera(IE10_COMPAT_UA)).toEqual(false);
      });

      it('at ie11 browser, return false.', function() {
        expect(browser.isOpera(IE11_UA)).toEqual(false);
      });
      it('at ie11 browser compat view 8 mode, return false.', function() {
        expect(browser.isOpera(IE11_COMPAT_UA)).toEqual(false);
      });
    });

    describe('.isChrome()', function() {
      it('at chrome browser, return true.', function() {
        expect(browser.isChrome(CHROME_UA)).toEqual(true);
      });
      it('at firefox browser, return false.', function() {
        expect(browser.isChrome(FIREFOX_UA)).toEqual(false);
      });
      it('at opera browser, return false.', function() {
        expect(browser.isChrome(OPERA_UA)).toEqual(false);
      });
      it('at safari browser, return false.', function() {
        expect(browser.isChrome(SAFARI_UA)).toEqual(false);
      });
      it('at edge browser, return false.', function() {
        expect(browser.isChrome(EDGE_UA)).toEqual(false);
      });

      it('at ie7 browser, return false.', function() {
        expect(browser.isChrome(IE7_UA)).toEqual(false);
      });

      it('at ie8 browser, return false.', function() {
        expect(browser.isChrome(IE8_UA)).toEqual(false);
      });
      it('at ie8 browser compat view, return false.', function() {
        expect(browser.isChrome(IE8_COMPAT_UA)).toEqual(false);
      });

      it('at ie9 browser, return false.', function() {
        expect(browser.isChrome(IE9_UA)).toEqual(false);
      });
      it('at ie9 browser compat view, return false.', function() {
        expect(browser.isChrome(IE9_COMPAT_UA)).toEqual(false);
      });

      it('at ie10 browser, return false.', function() {
        expect(browser.isChrome(IE10_UA)).toEqual(false);
      });
      it('at ie10 browser compat view, return false.', function() {
        expect(browser.isChrome(IE10_COMPAT_UA)).toEqual(false);
      });

      it('at ie11 browser, return false.', function() {
        expect(browser.isChrome(IE11_UA)).toEqual(false);
      });
      it('at ie11 browser compat view 8 mode, return false.', function() {
        expect(browser.isChrome(IE11_COMPAT_UA)).toEqual(false);
      });
    });

    describe('.isSafari()', function() {
      it('at chrome browser, return false.', function() {
        expect(browser.isSafari(CHROME_UA)).toEqual(false);
      });
      it('at firefox browser, return false.', function() {
        expect(browser.isSafari(FIREFOX_UA)).toEqual(false);
      });
      it('at opera browser, return false.', function() {
        expect(browser.isSafari(OPERA_UA)).toEqual(false);
      });
      it('at safari browser, return true.', function() {
        expect(browser.isSafari(SAFARI_UA)).toEqual(true);
      });
      it('at edge browser, return false.', function() {
        expect(browser.isSafari(EDGE_UA)).toEqual(false);
      });

      it('at ie7 browser, return false.', function() {
        expect(browser.isSafari(IE7_UA)).toEqual(false);
      });

      it('at ie8 browser, return false.', function() {
        expect(browser.isSafari(IE8_UA)).toEqual(false);
      });
      it('at ie8 browser compat view, return false.', function() {
        expect(browser.isSafari(IE8_COMPAT_UA)).toEqual(false);
      });

      it('at ie9 browser, return false.', function() {
        expect(browser.isSafari(IE9_UA)).toEqual(false);
      });
      it('at ie9 browser compat view, return false.', function() {
        expect(browser.isSafari(IE9_COMPAT_UA)).toEqual(false);
      });

      it('at ie10 browser, return false.', function() {
        expect(browser.isSafari(IE10_UA)).toEqual(false);
      });
      it('at ie10 browser compat view, return false.', function() {
        expect(browser.isSafari(IE10_COMPAT_UA)).toEqual(false);
      });

      it('at ie11 browser, return false.', function() {
        expect(browser.isSafari(IE11_UA)).toEqual(false);
      });
      it('at ie11 browser compat view 8 mode, return false.', function() {
        expect(browser.isSafari(IE11_COMPAT_UA)).toEqual(false);
      });
    });

    describe('.isChromeMobile()', function() {
      // TODO - isChromeMobile
    });

    describe('.isSafariMobile()', function() {
      // TODO - isSafariMobile
    });

    describe('.getIEVersion()', function() {
      // TODO - getIEVersion
    });

    describe('.getFFVersion()', function() {
      // TODO - getFFVersion
    });

    describe('.getOperaVersion()', function() {
      // TODO - getOperaVersion
    });

    describe('.getChromeVersion()', function() {
      // TODO - getChromeVersion
    });

    describe('.getSafariVersion()', function() {
      // TODO - getSafariVersion
    });

    describe('.getIECompatibility().isIE', function() {
      it('at ie7 browser, return true.', function() {
        expect(browser.getIECompatibility(IE7_UA).isIE).toEqual(true);
      });

      it('at ie8 browser, return true.', function() {
        expect(browser.getIECompatibility(IE8_UA).isIE).toEqual(true);
      });
      it('at ie8 browser compat view, return true.', function() {
        expect(browser.getIECompatibility(IE8_COMPAT_UA).isIE).toEqual(true);
      });

      it('at ie9 browser, return true.', function() {
        expect(browser.getIECompatibility(IE9_UA).isIE).toEqual(true);
      });
      it('at ie9 browser compat view, return true.', function() {
        expect(browser.getIECompatibility(IE9_COMPAT_UA).isIE).toEqual(true);
      });

      it('at ie10 browser, return true.', function() {
        expect(browser.getIECompatibility(IE10_UA).isIE).toEqual(true);
      });
      it('at ie10 browser compat view, return true.', function() {
        expect(browser.getIECompatibility(IE10_COMPAT_UA).isIE).toEqual(true);
      });

      it('at ie11 browser, return true.', function() {
        expect(browser.getIECompatibility(IE11_UA).isIE).toEqual(true);
      });
      it('at ie11 browser compat view 8 mode, return true.', function() {
        expect(browser.getIECompatibility(IE11_COMPAT_UA).isIE).toEqual(true);
      });
    });

    describe('.getIECompatibility().isCompatibilityMode', function() {
      it('at ie7 browser, return false.', function() {
        expect(browser.getIECompatibility(IE7_UA).isCompatibilityMode).toEqual(
          false
        );
      });

      it('at ie8 browser, return false.', function() {
        expect(browser.getIECompatibility(IE8_UA).isCompatibilityMode).toEqual(
          false
        );
      });
      it('at ie8 browser compat view, return true.', function() {
        expect(
          browser.getIECompatibility(IE8_COMPAT_UA).isCompatibilityMode
        ).toEqual(true);
      });

      it('at ie9 browser, return false.', function() {
        expect(browser.getIECompatibility(IE9_UA).isCompatibilityMode).toEqual(
          false
        );
      });
      it('at ie9 browser compat view, return true.', function() {
        expect(
          browser.getIECompatibility(IE9_COMPAT_UA).isCompatibilityMode
        ).toEqual(true);
      });

      it('at ie10 browser, return false.', function() {
        expect(browser.getIECompatibility(IE10_UA).isCompatibilityMode).toEqual(
          false
        );
      });
      it('at ie10 browser compat view, return true.', function() {
        expect(
          browser.getIECompatibility(IE10_COMPAT_UA).isCompatibilityMode
        ).toEqual(true);
      });

      it('at ie11 browser, return false.', function() {
        expect(browser.getIECompatibility(IE11_UA).isCompatibilityMode).toEqual(
          false
        );
      });
      it('at ie11 browser compat view 8 mode, return true.', function() {
        expect(
          browser.getIECompatibility(IE11_COMPAT_UA).isCompatibilityMode
        ).toEqual(true);
      });
    });

    describe('.isSupportDraggable()', function() {
      // TODO - isSupportDraggable
    });

    describe('.isSupportDragAndDrop()', function() {
      // TODO - isSupportDragAndDrop
    });

    describe('.isSupportFileApi()', function() {
      // TODO - isSupportFileApi
    });

    describe('.isChromeExtension()', function() {
      // TODO - isChromeExtension
    });

    describe('.canUseDOM()', function() {
      // TODO:
    });

    describe('.getCookie()', function() {
      // TODO - getCookie
    });

    describe('.setCookie()', function() {
      // TODO - setCookie
    });
  });
});
