'use strict';

describe('aid.js', function() {
  describe('aid.platform', function() {
    var platform = aid.platform;

    // Windows
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

    // Mac
    var MAC_FIREFOX_UA =
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:52.0) Gecko/20100101 Firefox/52.0',
      MAC_OPERA_UA =
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36 OPR/43.0.2442.1165',
      MAC_CHROME_UA =
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
      MAC_SAFARI_UA =
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/602.4.8 (KHTML, like Gecko) Version/10.0.3 Safari/602.4.8';

    // iOS
    var IOS_CHROME_PHONE_UA =
        'Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/70.0.3538.75 Mobile/15E148 Safari/605.1',
      IOS_CHROME_TABLET_UA =
        'Mozilla/5.0 (iPad; CPU OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/70.0.3538.75 Mobile/15E148 Safari/604.1',
      IOS_SAFARI_PHONE_UA =
        'Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1',
      IOS_SAFARI_TABLET_UA =
        'Mozilla/5.0 (iPad; CPU OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1';

    // Android
    var ANDROID_OLD_WEBVIEW_UA =
        'Mozilla/5.0 (Linux; U; Android 4.1.1; en-gb; Build/KLP) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30',
      ANDROID_KITKAT_WEBVIEW_UA =
        'Mozilla/5.0 (Linux; Android 4.4; Nexus 5 Build/_BuildID_) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36',
      ANDROID_CHROME_PHONE_UA =
        'Mozilla/5.0 (Linux; Android 8.0.0; SM-G930L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Mobile Safari/537.36', // Galaxy S7
      // 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G950N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Mobile Safari/537.36', // Galaxy S8
      ANDROID_CHROME_TABLET_UA =
        'Mozilla/5.0 (Linux; Android 6.0.1; SM-T800 Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/61.0.3163.98 Safari/537.36', // TODO: Check on device
      ANDROID_SAMSUNG_INTERNET_PHONE_UA =
        'Mozilla/5.0 (Linux; Android 8.0.0; SAMSUNG SM-G930L Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/7.4 Chrome/59.0.3071.125 Mobile Safari/537.36', // Galaxy S7
      // 'Mozilla/5.0 (Linux; Android 8.0.0; SAMSUNG SM-G950N Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/7.4 Chrome/59.0.3071.125 Mobile Safari/537.36', // Galaxy S8
      ANDROID_SAMSUNG_INTERNET_TABLET_UA = ''; // TODO: Check on device

    describe('.isWindow()', function() {
      // Windows
      it('on Window Chrome browser, return true.', function() {
        expect(platform.isWindow(CHROME_UA)).toEqual(true);
      });
      it('on Window Firefox browser, return true.', function() {
        expect(platform.isWindow(FIREFOX_UA)).toEqual(true);
      });
      it('on Window Opera browser, return true.', function() {
        expect(platform.isWindow(OPERA_UA)).toEqual(true);
      });
      it('on Window Safari browser, return true.', function() {
        expect(platform.isWindow(SAFARI_UA)).toEqual(true);
      });
      it('on Window Edge browser, return true.', function() {
        expect(platform.isWindow(EDGE_UA)).toEqual(true);
      });

      it('on Window IE7 browser, return true.', function() {
        expect(platform.isWindow(IE7_UA)).toEqual(true);
      });

      it('on Window IE8 browser, return true.', function() {
        expect(platform.isWindow(IE8_UA)).toEqual(true);
      });
      it('on Window IE8 browser compat view, return true.', function() {
        expect(platform.isWindow(IE8_COMPAT_UA)).toEqual(true);
      });

      it('on Window IE9 browser, return true.', function() {
        expect(platform.isWindow(IE9_UA)).toEqual(true);
      });
      it('on Window IE9 browser compat view, return true.', function() {
        expect(platform.isWindow(IE9_COMPAT_UA)).toEqual(true);
      });

      it('on Window IE10 browser, return true.', function() {
        expect(platform.isWindow(IE10_UA)).toEqual(true);
      });
      it('on Window IE10 browser compat view, return true.', function() {
        expect(platform.isWindow(IE10_COMPAT_UA)).toEqual(true);
      });

      it('on Window IE11 browser, return true.', function() {
        expect(platform.isWindow(IE11_UA)).toEqual(true);
      });
      it('on Window IE11 browser compat view 8 mode, return true.', function() {
        expect(platform.isWindow(IE11_COMPAT_UA)).toEqual(true);
      });

      // Mac
      it('on Mac Chrome browser, return false.', function() {
        expect(platform.isWindow(MAC_CHROME_UA)).toEqual(false);
      });
      it('on Mac Firefox browser, return false.', function() {
        expect(platform.isWindow(MAC_FIREFOX_UA)).toEqual(false);
      });
      it('on Mac Opera browser, return false.', function() {
        expect(platform.isWindow(MAC_OPERA_UA)).toEqual(false);
      });
      it('on Mac Safari browser, return false.', function() {
        expect(platform.isWindow(MAC_SAFARI_UA)).toEqual(false);
      });

      // iOS
      it('on Chrome browser for iOS phone device, return false.', function() {
        expect(platform.isWindow(IOS_CHROME_PHONE_UA)).toEqual(false);
      });

      it('on Chrome browser for iOS tablet device, return false.', function() {
        expect(platform.isWindow(IOS_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Safari browser for iOS phone device, return false.', function() {
        expect(platform.isWindow(IOS_SAFARI_PHONE_UA)).toEqual(false);
      });

      it('on Safari browser for iOS tablet device, return false.', function() {
        expect(platform.isWindow(IOS_SAFARI_TABLET_UA)).toEqual(false);
      });

      // Android
      it('on old Webview for Android device, return false.', function() {
        expect(platform.isWindow(ANDROID_OLD_WEBVIEW_UA)).toEqual(false);
      });

      it('on Kitkat Webview for Android device, return false.', function() {
        expect(platform.isWindow(ANDROID_KITKAT_WEBVIEW_UA)).toEqual(false);
      });

      it('on Chrome browser for Android phone device, return false.', function() {
        expect(platform.isWindow(ANDROID_CHROME_PHONE_UA)).toEqual(false);
      });

      it('on Chrome browser for Android tablet device, return false.', function() {
        expect(platform.isWindow(ANDROID_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Samsung internet browser for Android phone device, return false.', function() {
        expect(platform.isWindow(ANDROID_SAMSUNG_INTERNET_PHONE_UA)).toEqual(
          false
        );
      });

      it('on Samsung internet browser for Android tablet device, return false.', function() {
        // TODO:
      });
    });

    describe('.isMac()', function() {
      // Windows
      it('at window chrome browser, return false.', function() {
        expect(platform.isMac(CHROME_UA)).toEqual(false);
      });
      it('on Window Firefox browser, return false.', function() {
        expect(platform.isMac(FIREFOX_UA)).toEqual(false);
      });
      it('on Window Opera browser, return false.', function() {
        expect(platform.isMac(OPERA_UA)).toEqual(false);
      });
      it('on Window Safari browser, return false.', function() {
        expect(platform.isMac(SAFARI_UA)).toEqual(false);
      });
      it('on Window Edge browser, return false.', function() {
        expect(platform.isMac(EDGE_UA)).toEqual(false);
      });

      it('on Window IE7 browser, return false.', function() {
        expect(platform.isMac(IE7_UA)).toEqual(false);
      });

      it('on Window IE8 browser, return false.', function() {
        expect(platform.isMac(IE8_UA)).toEqual(false);
      });
      it('on Window IE8 browser compat view, return false.', function() {
        expect(platform.isMac(IE8_COMPAT_UA)).toEqual(false);
      });

      it('on Window IE9 browser, return false.', function() {
        expect(platform.isMac(IE9_UA)).toEqual(false);
      });
      it('on Window IE9 browser compat view, return false.', function() {
        expect(platform.isMac(IE9_COMPAT_UA)).toEqual(false);
      });

      it('on Window IE10 browser, return false.', function() {
        expect(platform.isMac(IE10_UA)).toEqual(false);
      });
      it('on Window IE10 browser compat view, return false.', function() {
        expect(platform.isMac(IE10_COMPAT_UA)).toEqual(false);
      });

      it('on Window IE11 browser, return false.', function() {
        expect(platform.isMac(IE11_UA)).toEqual(false);
      });
      it('on Window IE11 browser compat view 8 mode, return false.', function() {
        expect(platform.isMac(IE11_COMPAT_UA)).toEqual(false);
      });

      // Mac
      it('on Mac Chrome browser, return true.', function() {
        expect(platform.isMac(MAC_CHROME_UA)).toEqual(true);
      });
      it('on Mac Firefox browser, return true.', function() {
        expect(platform.isMac(MAC_FIREFOX_UA)).toEqual(true);
      });
      it('on Mac Opera browser, return true.', function() {
        expect(platform.isMac(MAC_OPERA_UA)).toEqual(true);
      });
      it('on Mac Safari browser, return true.', function() {
        expect(platform.isMac(MAC_SAFARI_UA)).toEqual(true);
      });

      // iOS
      it('on Chrome browser for iOS phone device, return false.', function() {
        expect(platform.isMac(IOS_CHROME_PHONE_UA)).toEqual(false);
      });

      it('on Chrome browser for iOS tablet device, return false.', function() {
        expect(platform.isMac(IOS_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Safari browser for iOS phone device, return false.', function() {
        expect(platform.isMac(IOS_SAFARI_PHONE_UA)).toEqual(false);
      });

      it('on Safari browser for iOS tablet device, return false.', function() {
        expect(platform.isMac(IOS_SAFARI_TABLET_UA)).toEqual(false);
      });

      // Android
      it('on old Webview for Android device, return false.', function() {
        expect(platform.isMac(ANDROID_OLD_WEBVIEW_UA)).toEqual(false);
      });

      it('on Kitkat Webview for Android device, return false.', function() {
        expect(platform.isMac(ANDROID_KITKAT_WEBVIEW_UA)).toEqual(false);
      });

      it('on Chrome browser for Android phone device, return false.', function() {
        expect(platform.isMac(ANDROID_CHROME_PHONE_UA)).toEqual(false);
      });

      it('on Chrome browser for Android tablet device, return false.', function() {
        expect(platform.isMac(ANDROID_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Samsung internet browser for Android phone device, return false.', function() {
        expect(platform.isMac(ANDROID_SAMSUNG_INTERNET_PHONE_UA)).toEqual(
          false
        );
      });

      it('on Samsung internet browser for Android tablet device, return false.', function() {
        // TODO:
      });
    });

    describe('.isIOS()', function() {
      // Windows
      it('at window chrome browser, return false.', function() {
        expect(platform.isIOS(CHROME_UA)).toEqual(false);
      });
      it('on Window Firefox browser, return false.', function() {
        expect(platform.isIOS(FIREFOX_UA)).toEqual(false);
      });
      it('on Window Opera browser, return false.', function() {
        expect(platform.isIOS(OPERA_UA)).toEqual(false);
      });
      it('on Window Safari browser, return false.', function() {
        expect(platform.isIOS(SAFARI_UA)).toEqual(false);
      });
      it('on Window Edge browser, return false.', function() {
        expect(platform.isIOS(EDGE_UA)).toEqual(false);
      });

      it('on Window IE7 browser, return false.', function() {
        expect(platform.isIOS(IE7_UA)).toEqual(false);
      });

      it('on Window IE8 browser, return false.', function() {
        expect(platform.isIOS(IE8_UA)).toEqual(false);
      });
      it('on Window IE8 browser compat view, return false.', function() {
        expect(platform.isIOS(IE8_COMPAT_UA)).toEqual(false);
      });

      it('on Window IE9 browser, return false.', function() {
        expect(platform.isIOS(IE9_UA)).toEqual(false);
      });
      it('on Window IE9 browser compat view, return false.', function() {
        expect(platform.isIOS(IE9_COMPAT_UA)).toEqual(false);
      });

      it('on Window IE10 browser, return false.', function() {
        expect(platform.isIOS(IE10_UA)).toEqual(false);
      });
      it('on Window IE10 browser compat view, return false.', function() {
        expect(platform.isIOS(IE10_COMPAT_UA)).toEqual(false);
      });

      it('on Window IE11 browser, return false.', function() {
        expect(platform.isIOS(IE11_UA)).toEqual(false);
      });
      it('on Window IE11 browser compat view 8 mode, return false.', function() {
        expect(platform.isIOS(IE11_COMPAT_UA)).toEqual(false);
      });

      // Mac
      it('on Mac Chrome browser, return false.', function() {
        expect(platform.isIOS(MAC_CHROME_UA)).toEqual(false);
      });
      it('on Mac Firefox browser, return false.', function() {
        expect(platform.isIOS(MAC_FIREFOX_UA)).toEqual(false);
      });
      it('on Mac Opera browser, return false.', function() {
        expect(platform.isIOS(MAC_OPERA_UA)).toEqual(false);
      });
      it('on Mac Safari browser, return false.', function() {
        expect(platform.isIOS(MAC_SAFARI_UA)).toEqual(false);
      });

      // iOS
      it('on Chrome browser for iOS phone device, return true.', function() {
        expect(platform.isIOS(IOS_CHROME_PHONE_UA)).toEqual(true);
      });

      it('on Chrome browser for iOS tablet device, return true.', function() {
        expect(platform.isIOS(IOS_CHROME_TABLET_UA)).toEqual(true);
      });

      it('on Safari browser for iOS phone device, return true.', function() {
        expect(platform.isIOS(IOS_SAFARI_PHONE_UA)).toEqual(true);
      });

      it('on Safari browser for iOS tablet device, return true.', function() {
        expect(platform.isIOS(IOS_SAFARI_TABLET_UA)).toEqual(true);
      });

      // Android
      it('on old Webview for Android device, return false.', function() {
        expect(platform.isIOS(ANDROID_OLD_WEBVIEW_UA)).toEqual(false);
      });

      it('on Kitkat Webview for Android device, return false.', function() {
        expect(platform.isIOS(ANDROID_KITKAT_WEBVIEW_UA)).toEqual(false);
      });

      it('on Chrome browser for Android phone device, return false.', function() {
        expect(platform.isIOS(ANDROID_CHROME_PHONE_UA)).toEqual(false);
      });

      it('on Chrome browser for Android tablet device, return false.', function() {
        expect(platform.isIOS(ANDROID_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Samsung internet browser for Android phone device, return false.', function() {
        expect(platform.isIOS(ANDROID_SAMSUNG_INTERNET_PHONE_UA)).toEqual(
          false
        );
      });

      it('on Samsung internet browser for Android tablet device, return false.', function() {
        // TODO:
      });
    });

    describe('.isIPhone()', function() {
      // Windows
      it('at window chrome browser, return false.', function() {
        expect(platform.isIPhone(CHROME_UA)).toEqual(false);
      });
      it('on Window Firefox browser, return false.', function() {
        expect(platform.isIPhone(FIREFOX_UA)).toEqual(false);
      });
      it('on Window Opera browser, return false.', function() {
        expect(platform.isIPhone(OPERA_UA)).toEqual(false);
      });
      it('on Window Safari browser, return false.', function() {
        expect(platform.isIPhone(SAFARI_UA)).toEqual(false);
      });
      it('on Window Edge browser, return false.', function() {
        expect(platform.isIPhone(EDGE_UA)).toEqual(false);
      });

      it('on Window IE7 browser, return false.', function() {
        expect(platform.isIPhone(IE7_UA)).toEqual(false);
      });

      it('on Window IE8 browser, return false.', function() {
        expect(platform.isIPhone(IE8_UA)).toEqual(false);
      });
      it('on Window IE8 browser compat view, return false.', function() {
        expect(platform.isIPhone(IE8_COMPAT_UA)).toEqual(false);
      });

      it('on Window IE9 browser, return false.', function() {
        expect(platform.isIPhone(IE9_UA)).toEqual(false);
      });
      it('on Window IE9 browser compat view, return false.', function() {
        expect(platform.isIPhone(IE9_COMPAT_UA)).toEqual(false);
      });

      it('on Window IE10 browser, return false.', function() {
        expect(platform.isIPhone(IE10_UA)).toEqual(false);
      });
      it('on Window IE10 browser compat view, return false.', function() {
        expect(platform.isIPhone(IE10_COMPAT_UA)).toEqual(false);
      });

      it('on Window IE11 browser, return false.', function() {
        expect(platform.isIPhone(IE11_UA)).toEqual(false);
      });
      it('on Window IE11 browser compat view 8 mode, return false.', function() {
        expect(platform.isIPhone(IE11_COMPAT_UA)).toEqual(false);
      });

      // Mac
      it('on Mac Chrome browser, return false.', function() {
        expect(platform.isIPhone(MAC_CHROME_UA)).toEqual(false);
      });
      it('on Mac Firefox browser, return false.', function() {
        expect(platform.isIPhone(MAC_FIREFOX_UA)).toEqual(false);
      });
      it('on Mac Opera browser, return false.', function() {
        expect(platform.isIPhone(MAC_OPERA_UA)).toEqual(false);
      });
      it('on Mac Safari browser, return false.', function() {
        expect(platform.isIPhone(MAC_SAFARI_UA)).toEqual(false);
      });

      // iOS
      it('on Chrome browser for iOS phone device, return true.', function() {
        expect(platform.isIPhone(IOS_CHROME_PHONE_UA)).toEqual(true);
      });

      it('on Chrome browser for iOS tablet device, return false.', function() {
        expect(platform.isIPhone(IOS_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Safari browser for iOS phone device, return true.', function() {
        expect(platform.isIPhone(IOS_SAFARI_PHONE_UA)).toEqual(true);
      });

      it('on Safari browser for iOS tablet device, return false.', function() {
        expect(platform.isIPhone(IOS_SAFARI_TABLET_UA)).toEqual(false);
      });

      // Android
      it('on old Webview for Android device, return false.', function() {
        expect(platform.isIPhone(ANDROID_OLD_WEBVIEW_UA)).toEqual(false);
      });

      it('on Kitkat Webview for Android device, return false.', function() {
        expect(platform.isIPhone(ANDROID_KITKAT_WEBVIEW_UA)).toEqual(false);
      });

      it('on Chrome browser for Android phone device, return false.', function() {
        expect(platform.isIPhone(ANDROID_CHROME_PHONE_UA)).toEqual(false);
      });

      it('on Chrome browser for Android tablet device, return false.', function() {
        expect(platform.isIPhone(ANDROID_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Samsung internet browser for Android phone device, return false.', function() {
        expect(platform.isIPhone(ANDROID_SAMSUNG_INTERNET_PHONE_UA)).toEqual(
          false
        );
      });

      it('on Samsung internet browser for Android tablet device, return false.', function() {
        // TODO:
      });
    });

    describe('.isIPad()', function() {
      // Windows
      it('at window chrome browser, return false.', function() {
        expect(platform.isIPad(CHROME_UA)).toEqual(false);
      });
      it('on Window Firefox browser, return false.', function() {
        expect(platform.isIPad(FIREFOX_UA)).toEqual(false);
      });
      it('on Window Opera browser, return false.', function() {
        expect(platform.isIPad(OPERA_UA)).toEqual(false);
      });
      it('on Window Safari browser, return false.', function() {
        expect(platform.isIPad(SAFARI_UA)).toEqual(false);
      });
      it('on Window Edge browser, return false.', function() {
        expect(platform.isIPad(EDGE_UA)).toEqual(false);
      });

      it('on Window IE7 browser, return false.', function() {
        expect(platform.isIPad(IE7_UA)).toEqual(false);
      });

      it('on Window IE8 browser, return false.', function() {
        expect(platform.isIPad(IE8_UA)).toEqual(false);
      });
      it('on Window IE8 browser compat view, return false.', function() {
        expect(platform.isIPad(IE8_COMPAT_UA)).toEqual(false);
      });

      it('on Window IE9 browser, return false.', function() {
        expect(platform.isIPad(IE9_UA)).toEqual(false);
      });
      it('on Window IE9 browser compat view, return false.', function() {
        expect(platform.isIPad(IE9_COMPAT_UA)).toEqual(false);
      });

      it('on Window IE10 browser, return false.', function() {
        expect(platform.isIPad(IE10_UA)).toEqual(false);
      });
      it('on Window IE10 browser compat view, return false.', function() {
        expect(platform.isIPad(IE10_COMPAT_UA)).toEqual(false);
      });

      it('on Window IE11 browser, return false.', function() {
        expect(platform.isIPad(IE11_UA)).toEqual(false);
      });
      it('on Window IE11 browser compat view 8 mode, return false.', function() {
        expect(platform.isIPad(IE11_COMPAT_UA)).toEqual(false);
      });

      // Mac
      it('on Mac Chrome browser, return false.', function() {
        expect(platform.isIPad(MAC_CHROME_UA)).toEqual(false);
      });
      it('on Mac Firefox browser, return false.', function() {
        expect(platform.isIPad(MAC_FIREFOX_UA)).toEqual(false);
      });
      it('on Mac Opera browser, return false.', function() {
        expect(platform.isIPad(MAC_OPERA_UA)).toEqual(false);
      });
      it('on Mac Safari browser, return false.', function() {
        expect(platform.isIPad(MAC_SAFARI_UA)).toEqual(false);
      });

      // iOS
      it('on Chrome browser for iOS phone device, return false.', function() {
        expect(platform.isIPad(IOS_CHROME_PHONE_UA)).toEqual(false);
      });

      it('on Chrome browser for iOS tablet device, return true.', function() {
        expect(platform.isIPad(IOS_CHROME_TABLET_UA)).toEqual(true);
      });

      it('on Safari browser for iOS phone device, return false.', function() {
        expect(platform.isIPad(IOS_SAFARI_PHONE_UA)).toEqual(false);
      });

      it('on Safari browser for iOS tablet device, return true.', function() {
        expect(platform.isIPad(IOS_SAFARI_TABLET_UA)).toEqual(true);
      });

      // Android
      it('on old Webview for Android device, return false.', function() {
        expect(platform.isIPad(ANDROID_OLD_WEBVIEW_UA)).toEqual(false);
      });

      it('on Kitkat Webview for Android device, return false.', function() {
        expect(platform.isIPad(ANDROID_KITKAT_WEBVIEW_UA)).toEqual(false);
      });

      it('on Chrome browser for Android phone device, return false.', function() {
        expect(platform.isIPad(ANDROID_CHROME_PHONE_UA)).toEqual(false);
      });

      it('on Chrome browser for Android tablet device, return false.', function() {
        expect(platform.isIPad(ANDROID_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Samsung internet browser for Android phone device, return false.', function() {
        expect(platform.isIPad(ANDROID_SAMSUNG_INTERNET_PHONE_UA)).toEqual(
          false
        );
      });

      it('on Samsung internet browser for Android tablet device, return false.', function() {
        // TODO:
      });
    });

    describe('.isAndroid()', function() {
      // Windows
      it('at window chrome browser, return false.', function() {
        expect(platform.isAndroid(CHROME_UA)).toEqual(false);
      });
      it('on Window Firefox browser, return false.', function() {
        expect(platform.isAndroid(FIREFOX_UA)).toEqual(false);
      });
      it('on Window Opera browser, return false.', function() {
        expect(platform.isAndroid(OPERA_UA)).toEqual(false);
      });
      it('on Window Safari browser, return false.', function() {
        expect(platform.isAndroid(SAFARI_UA)).toEqual(false);
      });
      it('on Window Edge browser, return false.', function() {
        expect(platform.isAndroid(EDGE_UA)).toEqual(false);
      });

      it('on Window IE7 browser, return false.', function() {
        expect(platform.isAndroid(IE7_UA)).toEqual(false);
      });

      it('on Window IE8 browser, return false.', function() {
        expect(platform.isAndroid(IE8_UA)).toEqual(false);
      });
      it('on Window IE8 browser compat view, return false.', function() {
        expect(platform.isAndroid(IE8_COMPAT_UA)).toEqual(false);
      });

      it('on Window IE9 browser, return false.', function() {
        expect(platform.isAndroid(IE9_UA)).toEqual(false);
      });
      it('on Window IE9 browser compat view, return false.', function() {
        expect(platform.isAndroid(IE9_COMPAT_UA)).toEqual(false);
      });

      it('on Window IE10 browser, return false.', function() {
        expect(platform.isAndroid(IE10_UA)).toEqual(false);
      });
      it('on Window IE10 browser compat view, return false.', function() {
        expect(platform.isAndroid(IE10_COMPAT_UA)).toEqual(false);
      });

      it('on Window IE11 browser, return false.', function() {
        expect(platform.isAndroid(IE11_UA)).toEqual(false);
      });
      it('on Window IE11 browser compat view 8 mode, return false.', function() {
        expect(platform.isAndroid(IE11_COMPAT_UA)).toEqual(false);
      });

      // Mac
      it('on Mac Chrome browser, return false.', function() {
        expect(platform.isAndroid(MAC_CHROME_UA)).toEqual(false);
      });
      it('on Mac Firefox browser, return false.', function() {
        expect(platform.isAndroid(MAC_FIREFOX_UA)).toEqual(false);
      });
      it('on Mac Opera browser, return false.', function() {
        expect(platform.isAndroid(MAC_OPERA_UA)).toEqual(false);
      });
      it('on Mac Safari browser, return false.', function() {
        expect(platform.isAndroid(MAC_SAFARI_UA)).toEqual(false);
      });

      // iOS
      it('on Chrome browser for iOS phone device, return false.', function() {
        expect(platform.isAndroid(IOS_CHROME_PHONE_UA)).toEqual(false);
      });

      it('on Chrome browser for iOS tablet device, return false.', function() {
        expect(platform.isAndroid(IOS_CHROME_TABLET_UA)).toEqual(false);
      });

      it('on Safari browser for iOS phone device, return false.', function() {
        expect(platform.isAndroid(IOS_SAFARI_PHONE_UA)).toEqual(false);
      });

      it('on Safari browser for iOS tablet device, return false.', function() {
        expect(platform.isAndroid(IOS_SAFARI_TABLET_UA)).toEqual(false);
      });

      // Android
      it('on old Webview for Android device, return true.', function() {
        expect(platform.isAndroid(ANDROID_OLD_WEBVIEW_UA)).toEqual(true);
      });

      it('on Kitkat Webview for Android device, return true.', function() {
        expect(platform.isAndroid(ANDROID_KITKAT_WEBVIEW_UA)).toEqual(true);
      });

      it('on Chrome browser for Android phone device, return true.', function() {
        expect(platform.isAndroid(ANDROID_CHROME_PHONE_UA)).toEqual(true);
      });

      it('on Chrome browser for Android tablet device, return true.', function() {
        expect(platform.isAndroid(ANDROID_CHROME_TABLET_UA)).toEqual(true);
      });

      it('on Samsung internet browser for Android phone device, return true.', function() {
        expect(platform.isAndroid(ANDROID_SAMSUNG_INTERNET_PHONE_UA)).toEqual(
          true
        );
      });

      it('on Samsung internet browser for Android tablet device, return false.', function() {
        // TODO:
      });
    });
  });
});
