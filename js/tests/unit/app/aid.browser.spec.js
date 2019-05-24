'use strict';

describe('aid.js', function() {
  describe('aid.browser', function() {
    var browser = aid.browser;

    var EDGE_UA =
        'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136',
      FIREFOX_UA = 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0',
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

    var IOS_CHROME_PHONE_UA =
        'Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/70.0.3538.75 Mobile/15E148 Safari/605.1',
      IOS_CHROME_TABLET_UA =
        'Mozilla/5.0 (iPad; CPU OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/70.0.3538.75 Mobile/15E148 Safari/604.1',
      IOS_SAFARI_PHONE_UA =
        'Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1',
      IOS_SAFARI_TABLET_UA =
        'Mozilla/5.0 (iPad; CPU OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1',
      ANDROID_CHROME_PHONE_UA =
        'Mozilla/5.0 (Linux; Android 8.0.0; SM-G930L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Mobile Safari/537.36', // Galaxy S7
      // 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G950N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Mobile Safari/537.36', // Galaxy S8
      ANDROID_CHROME_TABLET_UA =
        'Mozilla/5.0 (Linux; Android 6.0.1; SM-T800 Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/61.0.3163.98 Safari/537.36', // TODO: Check on device
      ANDROID_SAMSUNG_INTERNET_PHONE_UA =
        'Mozilla/5.0 (Linux; Android 8.0.0; SAMSUNG SM-G930L Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/7.4 Chrome/59.0.3071.125 Mobile Safari/537.36'; // Galaxy S7
    // 'Mozilla/5.0 (Linux; Android 8.0.0; SAMSUNG SM-G950N Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/7.4 Chrome/59.0.3071.125 Mobile Safari/537.36', // Galaxy S8
    // ANDROID_SAMSUNG_INTERNET_TABLET_UA = ''; // TODO: Check on device

    describe('.isIE()', function() {
      it('on Chrome browser, return false.', function() {
        expect(browser.isIE(CHROME_UA)).toEqual(false);
      });
      it('on Firefox browser, return false.', function() {
        expect(browser.isIE(FIREFOX_UA)).toEqual(false);
      });
      it('on Opera browser, return false.', function() {
        expect(browser.isIE(OPERA_UA)).toEqual(false);
      });
      it('on Safari browser, return false.', function() {
        expect(browser.isIE(SAFARI_UA)).toEqual(false);
      });
      it('on Edge browser, return false.', function() {
        expect(browser.isIE(EDGE_UA)).toEqual(false);
      });

      it('on IE7 browser, return true.', function() {
        expect(browser.isIE(IE7_UA)).toEqual(true);
      });

      it('on IE8 browser, return true.', function() {
        expect(browser.isIE(IE8_UA)).toEqual(true);
      });
      it('on IE8 browser compat view, return true.', function() {
        expect(browser.isIE(IE8_COMPAT_UA)).toEqual(true);
      });

      it('on IE9 browser, return true.', function() {
        expect(browser.isIE(IE9_UA)).toEqual(true);
      });
      it('on IE9 browser compat view, return true.', function() {
        expect(browser.isIE(IE9_COMPAT_UA)).toEqual(true);
      });

      it('on IE10 browser, return true.', function() {
        expect(browser.isIE(IE10_UA)).toEqual(true);
      });
      it('on IE10 browser compat view, return true.', function() {
        expect(browser.isIE(IE10_COMPAT_UA)).toEqual(true);
      });

      it('on IE11 browser, return true.', function() {
        expect(browser.isIE(IE11_UA)).toEqual(true);
      });
      it('on IE11 browser compat view 8 mode, return true.', function() {
        expect(browser.isIE(IE11_COMPAT_UA)).toEqual(true);
      });

      it('on Chrome browser for iOS phone device, return false.', function() {
        expect(browser.isIE(IOS_CHROME_PHONE_UA)).toEqual(false);
      });
      it('on Chrome browser for iOS tablet device, return false.', function() {
        expect(browser.isIE(IOS_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Safari browser for iOS phone device, return false.', function() {
        expect(browser.isIE(IOS_SAFARI_PHONE_UA)).toEqual(false);
      });
      it('on Safari browser for iOS tablet device, return false.', function() {
        expect(browser.isIE(IOS_SAFARI_TABLET_UA)).toEqual(false);
      });

      it('on Chrome browser for Android phone device, return false.', function() {
        expect(browser.isIE(ANDROID_CHROME_PHONE_UA)).toEqual(false);
      });
      it('on Chrome browser for Android tablet device, return false.', function() {
        expect(browser.isIE(ANDROID_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Samsung internet browser for Android phone device, return false.', function() {
        // TODO:
      });
      it('on Samsung internet browser for Android tablet device, return false.', function() {
        // TODO:
      });
    });

    describe('.isEdge()', function() {
      it('on Chrome browser, return false.', function() {
        expect(browser.isEdge(CHROME_UA)).toEqual(false);
      });
      it('on Firefox browser, return false.', function() {
        expect(browser.isEdge(FIREFOX_UA)).toEqual(false);
      });
      it('on Opera browser, return false.', function() {
        expect(browser.isEdge(OPERA_UA)).toEqual(false);
      });
      it('on Safari browser, return false.', function() {
        expect(browser.isEdge(SAFARI_UA)).toEqual(false);
      });
      it('on Edge browser, return true.', function() {
        expect(browser.isEdge(EDGE_UA)).toEqual(true);
      });

      it('on IE7 browser, return false.', function() {
        expect(browser.isEdge(IE7_UA)).toEqual(false);
      });

      it('on IE8 browser, return false.', function() {
        expect(browser.isEdge(IE8_UA)).toEqual(false);
      });
      it('on IE8 browser compat view, return false.', function() {
        expect(browser.isEdge(IE8_COMPAT_UA)).toEqual(false);
      });

      it('on IE9 browser, return false.', function() {
        expect(browser.isEdge(IE9_UA)).toEqual(false);
      });
      it('on IE9 browser compat view, return false.', function() {
        expect(browser.isEdge(IE9_COMPAT_UA)).toEqual(false);
      });

      it('on IE10 browser, return false.', function() {
        expect(browser.isEdge(IE10_UA)).toEqual(false);
      });
      it('on IE10 browser compat view, return false.', function() {
        expect(browser.isEdge(IE10_COMPAT_UA)).toEqual(false);
      });

      it('on IE11 browser, return false.', function() {
        expect(browser.isEdge(IE11_UA)).toEqual(false);
      });
      it('on IE11 browser compat view 8 mode, return false.', function() {
        expect(browser.isEdge(IE11_COMPAT_UA)).toEqual(false);
      });

      it('on Chrome browser for iOS phone device, return false.', function() {
        expect(browser.isEdge(IOS_CHROME_PHONE_UA)).toEqual(false);
      });
      it('on Chrome browser for iOS tablet device, return false.', function() {
        expect(browser.isEdge(IOS_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Safari browser for iOS phone device, return false.', function() {
        expect(browser.isEdge(IOS_SAFARI_PHONE_UA)).toEqual(false);
      });
      it('on Safari browser for iOS tablet device, return false.', function() {
        expect(browser.isEdge(IOS_SAFARI_TABLET_UA)).toEqual(false);
      });

      it('on Chrome browser for Android phone device, return false.', function() {
        expect(browser.isEdge(ANDROID_CHROME_PHONE_UA)).toEqual(false);
      });
      it('on Chrome browser for Android tablet device, return false.', function() {
        expect(browser.isEdge(ANDROID_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Samsung internet browser for Android phone device, return false.', function() {
        // TODO:
      });
      it('on Samsung internet browser for Android tablet device, return false.', function() {
        // TODO:
      });
    });

    describe('.isFF()', function() {
      it('on Chrome browser, return false.', function() {
        expect(browser.isFF(CHROME_UA)).toEqual(false);
      });
      it('on Firefox browser, return true.', function() {
        expect(browser.isFF(FIREFOX_UA)).toEqual(true);
      });
      it('on Opera browser, return false.', function() {
        expect(browser.isIE(OPERA_UA)).toEqual(false);
      });
      it('on Safari browser, return false.', function() {
        expect(browser.isFF(SAFARI_UA)).toEqual(false);
      });
      it('on Edge browser, return false.', function() {
        expect(browser.isFF(EDGE_UA)).toEqual(false);
      });

      it('on IE7 browser, return false.', function() {
        expect(browser.isFF(IE7_UA)).toEqual(false);
      });

      it('on IE8 browser, return false.', function() {
        expect(browser.isFF(IE8_UA)).toEqual(false);
      });
      it('on IE8 browser compat view, return false.', function() {
        expect(browser.isFF(IE8_COMPAT_UA)).toEqual(false);
      });

      it('on IE9 browser, return false.', function() {
        expect(browser.isFF(IE9_UA)).toEqual(false);
      });
      it('on IE9 browser compat view, return false.', function() {
        expect(browser.isFF(IE9_COMPAT_UA)).toEqual(false);
      });

      it('on IE10 browser, return false.', function() {
        expect(browser.isFF(IE10_UA)).toEqual(false);
      });
      it('on IE10 browser compat view, return false.', function() {
        expect(browser.isFF(IE10_COMPAT_UA)).toEqual(false);
      });

      it('on IE11 browser, return false.', function() {
        expect(browser.isFF(IE11_UA)).toEqual(false);
      });
      it('on IE11 browser compat view 8 mode, return false.', function() {
        expect(browser.isFF(IE11_COMPAT_UA)).toEqual(false);
      });

      it('on Chrome browser for iOS phone device, return false.', function() {
        expect(browser.isFF(IOS_CHROME_PHONE_UA)).toEqual(false);
      });
      it('on Chrome browser for iOS tablet device, return false.', function() {
        expect(browser.isFF(IOS_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Safari browser for iOS phone device, return false.', function() {
        expect(browser.isFF(IOS_SAFARI_PHONE_UA)).toEqual(false);
      });
      it('on Safari browser for iOS tablet device, return false.', function() {
        expect(browser.isFF(IOS_SAFARI_TABLET_UA)).toEqual(false);
      });

      it('on Chrome browser for Android phone device, return false.', function() {
        expect(browser.isFF(ANDROID_CHROME_PHONE_UA)).toEqual(false);
      });
      it('on Chrome browser for Android tablet device, return false.', function() {
        expect(browser.isFF(ANDROID_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Samsung internet browser for Android phone device, return false.', function() {
        // TODO:
      });
      it('on Samsung internet browser for Android tablet device, return false.', function() {
        // TODO:
      });
    });

    describe('.isOpera()', function() {
      it('on Chrome browser, return false.', function() {
        expect(browser.isOpera(CHROME_UA)).toEqual(false);
      });
      it('on Firefox browser, return false.', function() {
        expect(browser.isOpera(FIREFOX_UA)).toEqual(false);
      });
      it('on Opera browser, return true.', function() {
        expect(browser.isOpera(OPERA_UA)).toEqual(true);
      });
      it('on Safari browser, return false.', function() {
        expect(browser.isOpera(SAFARI_UA)).toEqual(false);
      });
      it('on Edge browser, return false.', function() {
        expect(browser.isOpera(EDGE_UA)).toEqual(false);
      });

      it('on IE7 browser, return false.', function() {
        expect(browser.isOpera(IE7_UA)).toEqual(false);
      });

      it('on IE8 browser, return false.', function() {
        expect(browser.isOpera(IE8_UA)).toEqual(false);
      });
      it('on IE8 browser compat view, return false.', function() {
        expect(browser.isOpera(IE8_COMPAT_UA)).toEqual(false);
      });

      it('on IE9 browser, return false.', function() {
        expect(browser.isOpera(IE9_UA)).toEqual(false);
      });
      it('on IE9 browser compat view, return false.', function() {
        expect(browser.isOpera(IE9_COMPAT_UA)).toEqual(false);
      });

      it('on IE10 browser, return false.', function() {
        expect(browser.isOpera(IE10_UA)).toEqual(false);
      });
      it('on IE10 browser compat view, return false.', function() {
        expect(browser.isOpera(IE10_COMPAT_UA)).toEqual(false);
      });

      it('on IE11 browser, return false.', function() {
        expect(browser.isOpera(IE11_UA)).toEqual(false);
      });
      it('on IE11 browser compat view 8 mode, return false.', function() {
        expect(browser.isOpera(IE11_COMPAT_UA)).toEqual(false);
      });

      it('on Chrome browser for iOS phone device, return false.', function() {
        expect(browser.isOpera(IOS_CHROME_PHONE_UA)).toEqual(false);
      });
      it('on Chrome browser for iOS tablet device, return false.', function() {
        expect(browser.isOpera(IOS_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Safari browser for iOS phone device, return false.', function() {
        expect(browser.isOpera(IOS_SAFARI_PHONE_UA)).toEqual(false);
      });
      it('on Safari browser for iOS tablet device, return false.', function() {
        expect(browser.isOpera(IOS_SAFARI_TABLET_UA)).toEqual(false);
      });

      it('on Chrome browser for Android phone device, return false.', function() {
        expect(browser.isOpera(ANDROID_CHROME_PHONE_UA)).toEqual(false);
      });
      it('on Chrome browser for Android tablet device, return false.', function() {
        expect(browser.isOpera(ANDROID_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Samsung internet browser for Android phone device, return false.', function() {
        // TODO:
      });
      it('on Samsung internet browser for Android tablet device, return false.', function() {
        // TODO:
      });
    });

    describe('.isChrome()', function() {
      it('on Chrome browser, return true.', function() {
        expect(browser.isChrome(CHROME_UA)).toEqual(true);
      });
      it('on Firefox browser, return false.', function() {
        expect(browser.isChrome(FIREFOX_UA)).toEqual(false);
      });
      it('on Opera browser, return false.', function() {
        expect(browser.isChrome(OPERA_UA)).toEqual(false);
      });
      it('on Safari browser, return false.', function() {
        expect(browser.isChrome(SAFARI_UA)).toEqual(false);
      });
      it('on Edge browser, return false.', function() {
        expect(browser.isChrome(EDGE_UA)).toEqual(false);
      });

      it('on IE7 browser, return false.', function() {
        expect(browser.isChrome(IE7_UA)).toEqual(false);
      });

      it('on IE8 browser, return false.', function() {
        expect(browser.isChrome(IE8_UA)).toEqual(false);
      });
      it('on IE8 browser compat view, return false.', function() {
        expect(browser.isChrome(IE8_COMPAT_UA)).toEqual(false);
      });

      it('on IE9 browser, return false.', function() {
        expect(browser.isChrome(IE9_UA)).toEqual(false);
      });
      it('on IE9 browser compat view, return false.', function() {
        expect(browser.isChrome(IE9_COMPAT_UA)).toEqual(false);
      });

      it('on IE10 browser, return false.', function() {
        expect(browser.isChrome(IE10_UA)).toEqual(false);
      });
      it('on IE10 browser compat view, return false.', function() {
        expect(browser.isChrome(IE10_COMPAT_UA)).toEqual(false);
      });

      it('on IE11 browser, return false.', function() {
        expect(browser.isChrome(IE11_UA)).toEqual(false);
      });
      it('on IE11 browser compat view 8 mode, return false.', function() {
        expect(browser.isChrome(IE11_COMPAT_UA)).toEqual(false);
      });

      it('on Chrome browser for iOS phone device, return false.', function() {
        expect(browser.isChrome(IOS_CHROME_PHONE_UA)).toEqual(false);
      });
      it('on Chrome browser for iOS tablet device, return false.', function() {
        expect(browser.isChrome(IOS_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Safari browser for iOS phone device, return false.', function() {
        expect(browser.isChrome(IOS_SAFARI_PHONE_UA)).toEqual(false);
      });
      it('on Safari browser for iOS tablet device, return false.', function() {
        expect(browser.isChrome(IOS_SAFARI_TABLET_UA)).toEqual(false);
      });

      it('on Chrome browser for Android phone device, return false.', function() {
        expect(browser.isChrome(ANDROID_CHROME_PHONE_UA)).toEqual(false);
      });
      it('on Chrome browser for Android tablet device, return false.', function() {
        expect(browser.isChrome(ANDROID_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Samsung internet browser for Android phone device, return false.', function() {
        // TODO:
      });
      it('on Samsung internet browser for Android tablet device, return false.', function() {
        // TODO:
      });
    });

    describe('.isSafari()', function() {
      it('on Chrome browser, return false.', function() {
        expect(browser.isSafari(CHROME_UA)).toEqual(false);
      });
      it('on Firefox browser, return false.', function() {
        expect(browser.isSafari(FIREFOX_UA)).toEqual(false);
      });
      it('on Opera browser, return false.', function() {
        expect(browser.isSafari(OPERA_UA)).toEqual(false);
      });
      it('on Safari browser, return true.', function() {
        expect(browser.isSafari(SAFARI_UA)).toEqual(true);
      });
      it('on Edge browser, return false.', function() {
        expect(browser.isSafari(EDGE_UA)).toEqual(false);
      });

      it('on IE7 browser, return false.', function() {
        expect(browser.isSafari(IE7_UA)).toEqual(false);
      });

      it('on IE8 browser, return false.', function() {
        expect(browser.isSafari(IE8_UA)).toEqual(false);
      });
      it('on IE8 browser compat view, return false.', function() {
        expect(browser.isSafari(IE8_COMPAT_UA)).toEqual(false);
      });

      it('on IE9 browser, return false.', function() {
        expect(browser.isSafari(IE9_UA)).toEqual(false);
      });
      it('on IE9 browser compat view, return false.', function() {
        expect(browser.isSafari(IE9_COMPAT_UA)).toEqual(false);
      });

      it('on IE10 browser, return false.', function() {
        expect(browser.isSafari(IE10_UA)).toEqual(false);
      });
      it('on IE10 browser compat view, return false.', function() {
        expect(browser.isSafari(IE10_COMPAT_UA)).toEqual(false);
      });

      it('on IE11 browser, return false.', function() {
        expect(browser.isSafari(IE11_UA)).toEqual(false);
      });
      it('on IE11 browser compat view 8 mode, return false.', function() {
        expect(browser.isSafari(IE11_COMPAT_UA)).toEqual(false);
      });

      it('on Chrome browser for iOS phone device, return false.', function() {
        expect(browser.isSafari(IOS_CHROME_PHONE_UA)).toEqual(false);
      });
      it('on Chrome browser for iOS tablet device, return false.', function() {
        expect(browser.isSafari(IOS_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Safari browser for iOS phone device, return false.', function() {
        expect(browser.isSafari(IOS_SAFARI_PHONE_UA)).toEqual(false);
      });
      it('on Safari browser for iOS tablet device, return false.', function() {
        expect(browser.isSafari(IOS_SAFARI_TABLET_UA)).toEqual(false);
      });

      it('on Chrome browser for Android phone device, return false.', function() {
        expect(browser.isSafari(ANDROID_CHROME_PHONE_UA)).toEqual(false);
      });
      it('on Chrome browser for Android tablet device, return false.', function() {
        expect(browser.isSafari(ANDROID_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Samsung internet browser for Android phone device, return false.', function() {
        // TODO:
      });
      it('on Samsung internet browser for Android tablet device, return false.', function() {
        // TODO:
      });
    });

    describe('.isChromePhone()', function() {
      it('on Chrome browser, return false.', function() {
        expect(browser.isChromePhone(CHROME_UA)).toEqual(false);
      });
      it('on Firefox browser, return false.', function() {
        expect(browser.isChromePhone(FIREFOX_UA)).toEqual(false);
      });
      it('on Opera browser, return false.', function() {
        expect(browser.isChromePhone(OPERA_UA)).toEqual(false);
      });
      it('on Safari browser, return false.', function() {
        expect(browser.isChromePhone(SAFARI_UA)).toEqual(false);
      });
      it('on Edge browser, return false.', function() {
        expect(browser.isChromePhone(EDGE_UA)).toEqual(false);
      });

      it('on IE7 browser, return false.', function() {
        expect(browser.isChromePhone(IE7_UA)).toEqual(false);
      });

      it('on IE8 browser, return false.', function() {
        expect(browser.isChromePhone(IE8_UA)).toEqual(false);
      });
      it('on IE8 browser compat view, return false.', function() {
        expect(browser.isChromePhone(IE8_COMPAT_UA)).toEqual(false);
      });

      it('on IE9 browser, return false.', function() {
        expect(browser.isChromePhone(IE9_UA)).toEqual(false);
      });
      it('on IE9 browser compat view, return false.', function() {
        expect(browser.isChromePhone(IE9_COMPAT_UA)).toEqual(false);
      });

      it('on IE10 browser, return false.', function() {
        expect(browser.isChromePhone(IE10_UA)).toEqual(false);
      });
      it('on IE10 browser compat view, return false.', function() {
        expect(browser.isChromePhone(IE10_COMPAT_UA)).toEqual(false);
      });

      it('on IE11 browser, return false.', function() {
        expect(browser.isChromePhone(IE11_UA)).toEqual(false);
      });
      it('on IE11 browser compat view 8 mode, return false.', function() {
        expect(browser.isChromePhone(IE11_COMPAT_UA)).toEqual(false);
      });

      it('on Chrome browser for iOS phone device, return true.', function() {
        expect(browser.isChromePhone(IOS_CHROME_PHONE_UA)).toEqual(true);
      });
      it('on Chrome browser for iOS tablet device, return false.', function() {
        expect(browser.isChromePhone(IOS_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Safari browser for iOS phone device, return false.', function() {
        expect(browser.isChromePhone(IOS_SAFARI_PHONE_UA)).toEqual(false);
      });
      it('on Safari browser for iOS tablet device, return false.', function() {
        expect(browser.isChromePhone(IOS_SAFARI_TABLET_UA)).toEqual(false);
      });

      it('on Chrome browser for Android phone device, return true.', function() {
        expect(browser.isChromePhone(ANDROID_CHROME_PHONE_UA)).toEqual(true);
      });
      it('on Chrome browser for Android tablet device, return false.', function() {
        expect(browser.isChromePhone(ANDROID_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Samsung internet browser for Android phone device, return false.', function() {
        // TODO:
      });
      it('on Samsung internet browser for Android tablet device, return false.', function() {
        // TODO:
      });
    });

    describe('.isChromeTablet()', function() {
      it('on Chrome browser, return false.', function() {
        expect(browser.isChromeTablet(CHROME_UA)).toEqual(false);
      });
      it('on Firefox browser, return false.', function() {
        expect(browser.isChromeTablet(FIREFOX_UA)).toEqual(false);
      });
      it('on Opera browser, return false.', function() {
        expect(browser.isChromeTablet(OPERA_UA)).toEqual(false);
      });
      it('on Safari browser, return false.', function() {
        expect(browser.isChromeTablet(SAFARI_UA)).toEqual(false);
      });
      it('on Edge browser, return false.', function() {
        expect(browser.isChromeTablet(EDGE_UA)).toEqual(false);
      });

      it('on IE7 browser, return false.', function() {
        expect(browser.isChromeTablet(IE7_UA)).toEqual(false);
      });

      it('on IE8 browser, return false.', function() {
        expect(browser.isChromeTablet(IE8_UA)).toEqual(false);
      });
      it('on IE8 browser compat view, return false.', function() {
        expect(browser.isChromeTablet(IE8_COMPAT_UA)).toEqual(false);
      });

      it('on IE9 browser, return false.', function() {
        expect(browser.isChromeTablet(IE9_UA)).toEqual(false);
      });
      it('on IE9 browser compat view, return false.', function() {
        expect(browser.isChromeTablet(IE9_COMPAT_UA)).toEqual(false);
      });

      it('on IE10 browser, return false.', function() {
        expect(browser.isChromeTablet(IE10_UA)).toEqual(false);
      });
      it('on IE10 browser compat view, return false.', function() {
        expect(browser.isChromeTablet(IE10_COMPAT_UA)).toEqual(false);
      });

      it('on IE11 browser, return false.', function() {
        expect(browser.isChromeTablet(IE11_UA)).toEqual(false);
      });
      it('on IE11 browser compat view 8 mode, return false.', function() {
        expect(browser.isChromeTablet(IE11_COMPAT_UA)).toEqual(false);
      });

      it('on Chrome browser for iOS phone device, return false.', function() {
        expect(browser.isChromeTablet(IOS_CHROME_PHONE_UA)).toEqual(false);
      });
      it('on Chrome browser for iOS tablet device, return true.', function() {
        expect(browser.isChromeTablet(IOS_CHROME_TABLET_UA)).toEqual(true);
      });

      it('on Safari browser for iOS phone device, return false.', function() {
        expect(browser.isChromeTablet(IOS_SAFARI_PHONE_UA)).toEqual(false);
      });
      it('on Safari browser for iOS tablet device, return false.', function() {
        expect(browser.isChromeTablet(IOS_SAFARI_TABLET_UA)).toEqual(false);
      });

      it('on Chrome browser for Android phone device, return false.', function() {
        expect(browser.isChromeTablet(ANDROID_CHROME_PHONE_UA)).toEqual(false);
      });
      it('on Chrome browser for Android tablet device, return true.', function() {
        expect(browser.isChromeTablet(ANDROID_CHROME_TABLET_UA)).toEqual(true);
      });

      it('on Samsung internet browser for Android phone device, return false.', function() {
        // TODO:
      });
      it('on Samsung internet browser for Android tablet device, return false.', function() {
        // TODO:
      });
    });

    describe('.isSafariPhone()', function() {
      it('on Chrome browser, return false.', function() {
        expect(browser.isSafariPhone(CHROME_UA)).toEqual(false);
      });
      it('on Firefox browser, return false.', function() {
        expect(browser.isSafariPhone(FIREFOX_UA)).toEqual(false);
      });
      it('on Opera browser, return false.', function() {
        expect(browser.isSafariPhone(OPERA_UA)).toEqual(false);
      });
      it('on Safari browser, return false.', function() {
        expect(browser.isSafariPhone(SAFARI_UA)).toEqual(false);
      });
      it('on Edge browser, return false.', function() {
        expect(browser.isSafariPhone(EDGE_UA)).toEqual(false);
      });

      it('on IE7 browser, return false.', function() {
        expect(browser.isSafariPhone(IE7_UA)).toEqual(false);
      });

      it('on IE8 browser, return false.', function() {
        expect(browser.isSafariPhone(IE8_UA)).toEqual(false);
      });
      it('on IE8 browser compat view, return false.', function() {
        expect(browser.isSafariPhone(IE8_COMPAT_UA)).toEqual(false);
      });

      it('on IE9 browser, return false.', function() {
        expect(browser.isSafariPhone(IE9_UA)).toEqual(false);
      });
      it('on IE9 browser compat view, return false.', function() {
        expect(browser.isSafariPhone(IE9_COMPAT_UA)).toEqual(false);
      });

      it('on IE10 browser, return false.', function() {
        expect(browser.isSafariPhone(IE10_UA)).toEqual(false);
      });
      it('on IE10 browser compat view, return false.', function() {
        expect(browser.isSafariPhone(IE10_COMPAT_UA)).toEqual(false);
      });

      it('on IE11 browser, return false.', function() {
        expect(browser.isSafariPhone(IE11_UA)).toEqual(false);
      });
      it('on IE11 browser compat view 8 mode, return false.', function() {
        expect(browser.isSafariPhone(IE11_COMPAT_UA)).toEqual(false);
      });

      it('on Chrome browser for iOS phone device, return false.', function() {
        expect(browser.isSafariPhone(IOS_CHROME_PHONE_UA)).toEqual(false);
      });
      it('on Chrome browser for iOS tablet device, return false.', function() {
        expect(browser.isSafariPhone(IOS_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Safari browser for iOS phone device, return true.', function() {
        expect(browser.isSafariPhone(IOS_SAFARI_PHONE_UA)).toEqual(true);
      });
      it('on Safari browser for iOS tablet device, return false.', function() {
        expect(browser.isSafariPhone(IOS_SAFARI_TABLET_UA)).toEqual(false);
      });

      it('on Chrome browser for Android phone device, return false.', function() {
        expect(browser.isSafariPhone(ANDROID_CHROME_PHONE_UA)).toEqual(false);
      });
      it('on Chrome browser for Android tablet device, return false.', function() {
        expect(browser.isSafariPhone(ANDROID_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Samsung internet browser for Android phone device, return false.', function() {
        // TODO:
      });
      it('on Samsung internet browser for Android tablet device, return false.', function() {
        // TODO:
      });
    });

    describe('.isSafariTablet()', function() {
      it('on Chrome browser, return false.', function() {
        expect(browser.isSafariTablet(CHROME_UA)).toEqual(false);
      });
      it('on Firefox browser, return false.', function() {
        expect(browser.isSafariTablet(FIREFOX_UA)).toEqual(false);
      });
      it('on Opera browser, return false.', function() {
        expect(browser.isSafariTablet(OPERA_UA)).toEqual(false);
      });
      it('on Safari browser, return false.', function() {
        expect(browser.isSafariTablet(SAFARI_UA)).toEqual(false);
      });
      it('on Edge browser, return false.', function() {
        expect(browser.isSafariTablet(EDGE_UA)).toEqual(false);
      });

      it('on IE7 browser, return false.', function() {
        expect(browser.isSafariTablet(IE7_UA)).toEqual(false);
      });

      it('on IE8 browser, return false.', function() {
        expect(browser.isSafariTablet(IE8_UA)).toEqual(false);
      });
      it('on IE8 browser compat view, return false.', function() {
        expect(browser.isSafariTablet(IE8_COMPAT_UA)).toEqual(false);
      });

      it('on IE9 browser, return false.', function() {
        expect(browser.isSafariTablet(IE9_UA)).toEqual(false);
      });
      it('on IE9 browser compat view, return false.', function() {
        expect(browser.isSafariTablet(IE9_COMPAT_UA)).toEqual(false);
      });

      it('on IE10 browser, return false.', function() {
        expect(browser.isSafariTablet(IE10_UA)).toEqual(false);
      });
      it('on IE10 browser compat view, return false.', function() {
        expect(browser.isSafariTablet(IE10_COMPAT_UA)).toEqual(false);
      });

      it('on IE11 browser, return false.', function() {
        expect(browser.isSafariTablet(IE11_UA)).toEqual(false);
      });
      it('on IE11 browser compat view 8 mode, return false.', function() {
        expect(browser.isSafariTablet(IE11_COMPAT_UA)).toEqual(false);
      });

      it('on Chrome browser for iOS phone device, return false.', function() {
        expect(browser.isSafariTablet(IOS_CHROME_PHONE_UA)).toEqual(false);
      });
      it('on Chrome browser for iOS tablet device, return false.', function() {
        expect(browser.isSafariTablet(IOS_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Safari browser for iOS phone device, return false.', function() {
        expect(browser.isSafariTablet(IOS_SAFARI_PHONE_UA)).toEqual(false);
      });
      it('on Safari browser for iOS tablet device, return true.', function() {
        expect(browser.isSafariTablet(IOS_SAFARI_TABLET_UA)).toEqual(true);
      });

      it('on Chrome browser for Android phone device, return false.', function() {
        expect(browser.isSafariTablet(ANDROID_CHROME_PHONE_UA)).toEqual(false);
      });
      it('on Chrome browser for Android tablet device, return false.', function() {
        expect(browser.isSafariTablet(ANDROID_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Samsung internet browser for Android phone device, return false.', function() {
        // TODO:
      });
      it('on Samsung internet browser for Android tablet device, return false.', function() {
        // TODO:
      });
    });

    describe('.getIEVersion()', function() {
      // TODO: Add test cases
    });

    describe('.getFFVersion()', function() {
      // TODO: Add test cases
    });

    describe('.getOperaVersion()', function() {
      // TODO: Add test cases
    });

    describe('.getChromeVersion()', function() {
      // TODO: Add test cases
    });

    describe('.getSafariVersion()', function() {
      // TODO: Add test cases
    });

    describe('.getIECompatibility().isIE', function() {
      it('on IE7 browser, return true.', function() {
        expect(browser.getIECompatibility(IE7_UA).isIE).toEqual(true);
      });

      it('on IE8 browser, return true.', function() {
        expect(browser.getIECompatibility(IE8_UA).isIE).toEqual(true);
      });
      it('on IE8 browser compat view, return true.', function() {
        expect(browser.getIECompatibility(IE8_COMPAT_UA).isIE).toEqual(true);
      });

      it('on IE9 browser, return true.', function() {
        expect(browser.getIECompatibility(IE9_UA).isIE).toEqual(true);
      });
      it('on IE9 browser compat view, return true.', function() {
        expect(browser.getIECompatibility(IE9_COMPAT_UA).isIE).toEqual(true);
      });

      it('on IE10 browser, return true.', function() {
        expect(browser.getIECompatibility(IE10_UA).isIE).toEqual(true);
      });
      it('on IE10 browser compat view, return true.', function() {
        expect(browser.getIECompatibility(IE10_COMPAT_UA).isIE).toEqual(true);
      });

      it('on IE11 browser, return true.', function() {
        expect(browser.getIECompatibility(IE11_UA).isIE).toEqual(true);
      });
      it('on IE11 browser compat view 8 mode, return true.', function() {
        expect(browser.getIECompatibility(IE11_COMPAT_UA).isIE).toEqual(true);
      });
    });

    describe('.getIECompatibility().isCompatibilityMode', function() {
      it('on IE7 browser, return false.', function() {
        expect(browser.getIECompatibility(IE7_UA).isCompatibilityMode).toEqual(false);
      });

      it('on IE8 browser, return false.', function() {
        expect(browser.getIECompatibility(IE8_UA).isCompatibilityMode).toEqual(false);
      });
      it('on IE8 browser compat view, return true.', function() {
        expect(browser.getIECompatibility(IE8_COMPAT_UA).isCompatibilityMode).toEqual(true);
      });

      it('on IE9 browser, return false.', function() {
        expect(browser.getIECompatibility(IE9_UA).isCompatibilityMode).toEqual(false);
      });
      it('on IE9 browser compat view, return true.', function() {
        expect(browser.getIECompatibility(IE9_COMPAT_UA).isCompatibilityMode).toEqual(true);
      });

      it('on IE10 browser, return false.', function() {
        expect(browser.getIECompatibility(IE10_UA).isCompatibilityMode).toEqual(false);
      });
      it('on IE10 browser compat view, return true.', function() {
        expect(browser.getIECompatibility(IE10_COMPAT_UA).isCompatibilityMode).toEqual(true);
      });

      it('on IE11 browser, return false.', function() {
        expect(browser.getIECompatibility(IE11_UA).isCompatibilityMode).toEqual(false);
      });
      it('on IE11 browser compat view 8 mode, return true.', function() {
        expect(browser.getIECompatibility(IE11_COMPAT_UA).isCompatibilityMode).toEqual(true);
      });
    });

    describe('.isSupportDraggable()', function() {
      // TODO: Add test cases
    });

    describe('.isSupportDragAndDrop()', function() {
      // TODO: Add test cases
    });

    describe('.isSupportFileApi()', function() {
      // TODO: Add test cases
    });

    describe('.isChromeExtension()', function() {
      // TODO: Add test cases
    });

    describe('.canUseDOM()', function() {
      // TODO: Add test cases
    });

    describe('.getCookie()', function() {
      // TODO: Add test cases
    });

    describe('.setCookie()', function() {
      // TODO: Add test cases
    });
  });
});
