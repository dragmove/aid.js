'use strict';

describe('aid.js', function() {
  describe('aid.clipboard', function() {
    var clipboard = aid.clipboard;

    describe('.copyText()', function() {
      it('if 1st argument is not String type, throw TypeError', function() {
        var ERROR_MSG =
          'str parameter type of clipboard.copyText() must be String.';

        expect(function() {
          clipboard.copyText(undefined);
          clipboard.copyText(null);
          clipboard.copyText(false);
          clipboard.copyText(true);
          clipboard.copyText(0);
          clipboard.copyText({});
          clipboard.copyText([]);
          clipboard.copyText(function() {});
          clipboard.copyText(new RegExp('^aid'));
          clipboard.copyText(/^aid'/);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          clipboard.copyText('aid.js');
        }).not.toThrowError(TypeError, ERROR_MSG);
      });

      it('if successCallback argument is defined, but is not Function type, throw TypeError', function() {
        var ERROR_MSG =
          'successCallback parameter type of clipboard.copyText() must be undefined or null or Function.';

        expect(function() {
          clipboard.copyText('aid.js', false);
          clipboard.copyText('aid.js', true);
          clipboard.copyText('aid.js', 0);
          clipboard.copyText('aid.js', {});
          clipboard.copyText('aid.js', []);
          clipboard.copyText('aid.js', new RegExp('^aid'));
          clipboard.copyText('aid.js', /^aid'/);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          clipboard.copyText('aid.js', function(/* str */) {});
        }).not.toThrowError(TypeError, ERROR_MSG);
      });

      it('if errorCallback argument is defined, but is not Function type, throw TypeError', function() {
        var ERROR_MSG =
          'errorCallback parameter type of clipboard.copyText() must be undefined or null or Function.';

        expect(function() {
          clipboard.copyText('aid.js', null, false);
          clipboard.copyText('aid.js', null, true);
          clipboard.copyText('aid.js', null, 0);
          clipboard.copyText('aid.js', null, {});
          clipboard.copyText('aid.js', null, []);
          clipboard.copyText('aid.js', null, new RegExp('^aid'));
          clipboard.copyText('aid.js', null, /^aid'/);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          clipboard.copyText('aid.js', null, function(/* error */) {});
        }).not.toThrowError(TypeError, ERROR_MSG);
      });

      // TODO: mock test document.execCommand, navigator.clipboard
    });
  });
});
