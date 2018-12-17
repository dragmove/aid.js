'use strict';

describe('aid.js', function() {
  describe('aid.platform', function() {
    var platform = aid.platform;

    // windows
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

    // mac
    var MAC_FIREFOX_UA =
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:52.0) Gecko/20100101 Firefox/52.0',
      MAC_OPERA_UA =
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36 OPR/43.0.2442.1165',
      MAC_CHROME_UA =
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
      MAC_SAFARI_UA =
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/602.4.8 (KHTML, like Gecko) Version/10.0.3 Safari/602.4.8';

    // iOS
    var IOS_CHROME_UA =
        'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1',
      IOS_SAFARI_UA =
        'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/603.1.23 (KHTML, like Gecko) Version/10.0 Mobile/14E5239e Safari/602.1';

    // android
    var ANDROID_OLD_WEBVIEW_UA =
        'Mozilla/5.0 (Linux; U; Android 4.1.1; en-gb; Build/KLP) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30',
      ANDROID_KITKAT_WEBVIEW_UA =
        'Mozilla/5.0 (Linux; Android 4.4; Nexus 5 Build/_BuildID_) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36';

    describe('.isWindow()', function() {
      // windows
      it('at window chrome browser, return true.', function() {
        expect(platform.isWindow(CHROME_UA)).toEqual(true);
      });
      it('at window firefox browser, return true.', function() {
        expect(platform.isWindow(FIREFOX_UA)).toEqual(true);
      });
      it('at window opera browser, return true.', function() {
        expect(platform.isWindow(OPERA_UA)).toEqual(true);
      });
      it('at window safari browser, return true.', function() {
        expect(platform.isWindow(SAFARI_UA)).toEqual(true);
      });
      it('at window edge browser, return true.', function() {
        expect(platform.isWindow(EDGE_UA)).toEqual(true);
      });

      it('at window ie7 browser, return true.', function() {
        expect(platform.isWindow(IE7_UA)).toEqual(true);
      });

      it('at window ie8 browser, return true.', function() {
        expect(platform.isWindow(IE8_UA)).toEqual(true);
      });
      it('at window ie8 browser compat view, return true.', function() {
        expect(platform.isWindow(IE8_COMPAT_UA)).toEqual(true);
      });

      it('at window ie9 browser, return true.', function() {
        expect(platform.isWindow(IE9_UA)).toEqual(true);
      });
      it('at window ie9 browser compat view, return true.', function() {
        expect(platform.isWindow(IE9_COMPAT_UA)).toEqual(true);
      });

      it('at window ie10 browser, return true.', function() {
        expect(platform.isWindow(IE10_UA)).toEqual(true);
      });
      it('at window ie10 browser compat view, return true.', function() {
        expect(platform.isWindow(IE10_COMPAT_UA)).toEqual(true);
      });

      it('at window ie11 browser, return true.', function() {
        expect(platform.isWindow(IE11_UA)).toEqual(true);
      });
      it('at window ie11 browser compat view 8 mode, return true.', function() {
        expect(platform.isWindow(IE11_COMPAT_UA)).toEqual(true);
      });

      // mac
      it('at mac chrome browser, return false.', function() {
        expect(platform.isWindow(MAC_CHROME_UA)).toEqual(false);
      });
      it('at mac firefox browser, return false.', function() {
        expect(platform.isWindow(MAC_FIREFOX_UA)).toEqual(false);
      });
      it('at mac opera browser, return false.', function() {
        expect(platform.isWindow(MAC_OPERA_UA)).toEqual(false);
      });
      it('at mac safari browser, return false.', function() {
        expect(platform.isWindow(MAC_SAFARI_UA)).toEqual(false);
      });

      // iOS
      it('at iPhone chrome browser, return false.', function() {
        expect(platform.isWindow(IOS_CHROME_UA)).toEqual(false);
      });

      it('at iPhone safari browser, return false.', function() {
        expect(platform.isWindow(IOS_SAFARI_UA)).toEqual(false);
      });

      // android
      it('at android old webview, return false.', function() {
        expect(platform.isWindow(ANDROID_OLD_WEBVIEW_UA)).toEqual(false);
      });

      it('at android kitkat webview, return false.', function() {
        expect(platform.isWindow(ANDROID_KITKAT_WEBVIEW_UA)).toEqual(false);
      });
    });

    describe('.isMac()', function() {
      // windows
      it('at window chrome browser, return false.', function() {
        expect(platform.isMac(CHROME_UA)).toEqual(false);
      });
      it('at window firefox browser, return false.', function() {
        expect(platform.isMac(FIREFOX_UA)).toEqual(false);
      });
      it('at window opera browser, return false.', function() {
        expect(platform.isMac(OPERA_UA)).toEqual(false);
      });
      it('at window safari browser, return false.', function() {
        expect(platform.isMac(SAFARI_UA)).toEqual(false);
      });
      it('at window edge browser, return false.', function() {
        expect(platform.isMac(EDGE_UA)).toEqual(false);
      });

      it('at window ie7 browser, return false.', function() {
        expect(platform.isMac(IE7_UA)).toEqual(false);
      });

      it('at window ie8 browser, return false.', function() {
        expect(platform.isMac(IE8_UA)).toEqual(false);
      });
      it('at window ie8 browser compat view, return false.', function() {
        expect(platform.isMac(IE8_COMPAT_UA)).toEqual(false);
      });

      it('at window ie9 browser, return false.', function() {
        expect(platform.isMac(IE9_UA)).toEqual(false);
      });
      it('at window ie9 browser compat view, return false.', function() {
        expect(platform.isMac(IE9_COMPAT_UA)).toEqual(false);
      });

      it('at window ie10 browser, return false.', function() {
        expect(platform.isMac(IE10_UA)).toEqual(false);
      });
      it('at window ie10 browser compat view, return false.', function() {
        expect(platform.isMac(IE10_COMPAT_UA)).toEqual(false);
      });

      it('at window ie11 browser, return false.', function() {
        expect(platform.isMac(IE11_UA)).toEqual(false);
      });
      it('at window ie11 browser compat view 8 mode, return false.', function() {
        expect(platform.isMac(IE11_COMPAT_UA)).toEqual(false);
      });

      // mac
      it('at mac chrome browser, return true.', function() {
        expect(platform.isMac(MAC_CHROME_UA)).toEqual(true);
      });
      it('at mac firefox browser, return true.', function() {
        expect(platform.isMac(MAC_FIREFOX_UA)).toEqual(true);
      });
      it('at mac opera browser, return true.', function() {
        expect(platform.isMac(MAC_OPERA_UA)).toEqual(true);
      });
      it('at mac safari browser, return true.', function() {
        expect(platform.isMac(MAC_SAFARI_UA)).toEqual(true);
      });

      // iOS
      it('at iPhone chrome browser, return false.', function() {
        expect(platform.isMac(IOS_CHROME_UA)).toEqual(false);
      });

      it('at iPhone safari browser, return false.', function() {
        expect(platform.isMac(IOS_SAFARI_UA)).toEqual(false);
      });

      // android
      it('at android old webview, return false.', function() {
        expect(platform.isMac(ANDROID_OLD_WEBVIEW_UA)).toEqual(false);
      });

      it('at android kitkat webview, return false.', function() {
        expect(platform.isMac(ANDROID_KITKAT_WEBVIEW_UA)).toEqual(false);
      });
    });

    describe('.isIOS()', function() {
      // windows
      it('at window chrome browser, return false.', function() {
        expect(platform.isIOS(CHROME_UA)).toEqual(false);
      });
      it('at window firefox browser, return false.', function() {
        expect(platform.isIOS(FIREFOX_UA)).toEqual(false);
      });
      it('at window opera browser, return false.', function() {
        expect(platform.isIOS(OPERA_UA)).toEqual(false);
      });
      it('at window safari browser, return false.', function() {
        expect(platform.isIOS(SAFARI_UA)).toEqual(false);
      });
      it('at window edge browser, return false.', function() {
        expect(platform.isIOS(EDGE_UA)).toEqual(false);
      });

      it('at window ie7 browser, return false.', function() {
        expect(platform.isIOS(IE7_UA)).toEqual(false);
      });

      it('at window ie8 browser, return false.', function() {
        expect(platform.isIOS(IE8_UA)).toEqual(false);
      });
      it('at window ie8 browser compat view, return false.', function() {
        expect(platform.isIOS(IE8_COMPAT_UA)).toEqual(false);
      });

      it('at window ie9 browser, return false.', function() {
        expect(platform.isIOS(IE9_UA)).toEqual(false);
      });
      it('at window ie9 browser compat view, return false.', function() {
        expect(platform.isIOS(IE9_COMPAT_UA)).toEqual(false);
      });

      it('at window ie10 browser, return false.', function() {
        expect(platform.isIOS(IE10_UA)).toEqual(false);
      });
      it('at window ie10 browser compat view, return false.', function() {
        expect(platform.isIOS(IE10_COMPAT_UA)).toEqual(false);
      });

      it('at window ie11 browser, return false.', function() {
        expect(platform.isIOS(IE11_UA)).toEqual(false);
      });
      it('at window ie11 browser compat view 8 mode, return false.', function() {
        expect(platform.isIOS(IE11_COMPAT_UA)).toEqual(false);
      });

      // mac
      it('at mac chrome browser, return false.', function() {
        expect(platform.isIOS(MAC_CHROME_UA)).toEqual(false);
      });
      it('at mac firefox browser, return false.', function() {
        expect(platform.isIOS(MAC_FIREFOX_UA)).toEqual(false);
      });
      it('at mac opera browser, return false.', function() {
        expect(platform.isIOS(MAC_OPERA_UA)).toEqual(false);
      });
      it('at mac safari browser, return false.', function() {
        expect(platform.isIOS(MAC_SAFARI_UA)).toEqual(false);
      });

      // iOS
      it('at iPhone chrome browser, return true.', function() {
        expect(platform.isIOS(IOS_CHROME_UA)).toEqual(true);
      });

      it('at iPhone safari browser, return true.', function() {
        expect(platform.isIOS(IOS_SAFARI_UA)).toEqual(true);
      });

      // android
      it('at android old webview, return false.', function() {
        expect(platform.isIOS(ANDROID_OLD_WEBVIEW_UA)).toEqual(false);
      });

      it('at android kitkat webview, return false.', function() {
        expect(platform.isIOS(ANDROID_KITKAT_WEBVIEW_UA)).toEqual(false);
      });
    });

    describe('.isIPhone()', function() {
      // TODO:
    });

    describe('.isIPad()', function() {
      // TODO:
    });

    describe('.isAndroid()', function() {
      // windows
      it('at window chrome browser, return false.', function() {
        expect(platform.isAndroid(CHROME_UA)).toEqual(false);
      });
      it('at window firefox browser, return false.', function() {
        expect(platform.isAndroid(FIREFOX_UA)).toEqual(false);
      });
      it('at window opera browser, return false.', function() {
        expect(platform.isAndroid(OPERA_UA)).toEqual(false);
      });
      it('at window safari browser, return false.', function() {
        expect(platform.isAndroid(SAFARI_UA)).toEqual(false);
      });
      it('at window edge browser, return false.', function() {
        expect(platform.isAndroid(EDGE_UA)).toEqual(false);
      });

      it('at window ie7 browser, return false.', function() {
        expect(platform.isAndroid(IE7_UA)).toEqual(false);
      });

      it('at window ie8 browser, return false.', function() {
        expect(platform.isAndroid(IE8_UA)).toEqual(false);
      });
      it('at window ie8 browser compat view, return false.', function() {
        expect(platform.isAndroid(IE8_COMPAT_UA)).toEqual(false);
      });

      it('at window ie9 browser, return false.', function() {
        expect(platform.isAndroid(IE9_UA)).toEqual(false);
      });
      it('at window ie9 browser compat view, return false.', function() {
        expect(platform.isAndroid(IE9_COMPAT_UA)).toEqual(false);
      });

      it('at window ie10 browser, return false.', function() {
        expect(platform.isAndroid(IE10_UA)).toEqual(false);
      });
      it('at window ie10 browser compat view, return false.', function() {
        expect(platform.isAndroid(IE10_COMPAT_UA)).toEqual(false);
      });

      it('at window ie11 browser, return false.', function() {
        expect(platform.isAndroid(IE11_UA)).toEqual(false);
      });
      it('at window ie11 browser compat view 8 mode, return false.', function() {
        expect(platform.isAndroid(IE11_COMPAT_UA)).toEqual(false);
      });

      // mac
      it('at mac chrome browser, return false.', function() {
        expect(platform.isAndroid(MAC_CHROME_UA)).toEqual(false);
      });
      it('at mac firefox browser, return false.', function() {
        expect(platform.isAndroid(MAC_FIREFOX_UA)).toEqual(false);
      });
      it('at mac opera browser, return false.', function() {
        expect(platform.isAndroid(MAC_OPERA_UA)).toEqual(false);
      });
      it('at mac safari browser, return false.', function() {
        expect(platform.isAndroid(MAC_SAFARI_UA)).toEqual(false);
      });

      // iOS
      it('at iPhone chrome browser, return false.', function() {
        expect(platform.isAndroid(IOS_CHROME_UA)).toEqual(false);
      });

      it('at iPhone safari browser, return false.', function() {
        expect(platform.isAndroid(IOS_SAFARI_UA)).toEqual(false);
      });

      // android
      it('at android old webview, return true.', function() {
        expect(platform.isAndroid(ANDROID_OLD_WEBVIEW_UA)).toEqual(true);
      });

      it('at android kitkat webview, return true.', function() {
        expect(platform.isAndroid(ANDROID_KITKAT_WEBVIEW_UA)).toEqual(true);
      });
    });
  });
});
