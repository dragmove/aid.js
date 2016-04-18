(function() {
  "use strict";

	if(!window.dm) window.dm = {};

	/**
   * @class stringUtil
   */
	var stringUtil = {};

	/**
   * check email string.
   *
   * @static
   * @method isEmail
   * @return {Boolean} return boolean
   * @example
   */
  stringUtil.isEmail = function(emailStr) {
  	// html5 form email check regex - https://www.w3.org/TR/html5/forms.html#e-mail-state-(type=email)
  	var emailRegex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"),
      	flag = emailRegex.exec(emailStr) ? true : false;
      return flag;
  };

  /**
   * get param value from uri.
   *
   * @static
   * @method getUriParam
   * @return {String} return string
   * @example
   */
  stringUtil.getUriParam = function(uri, paramName) {
    var str = uri;
    if(str.length < 1) return '';

    var tmpArr = str.split('?');
    if(tmpArr.length < 2) return '';

    var paramStr = tmpArr[1],
      params = paramStr.split('&');

    for(var i=0,max=params.length; i<max; ++i) {
      var keyValueArr = params[i].split('=');
      if(keyValueArr.length <= 1) keyValueArr.push('');
      if(keyValueArr[0] === paramName) return window.decodeURIComponent( keyValueArr[1] );
    }

    return '';
  };

  /**
   * check youtube video id.
   *
   * @static
   * @method isValidYoutubeVideoId
   * @return {Boolean} return boolean
   * @example
   */
  stringUtil.isValidYoutubeVideoId = function(youtubeId) {
    var regex = /^(\w|-|_){11}$/;
    return regex.exec(youtubeId) ? true : false;
  };

  /**
   * check youtube uri is valid.
   *
   * @static
   * @method getObjCheckYoutubeURI
   * @return {Object} return { youtubeId: String, isValidYoutubeURI: Boolean }
   * @example
   */
  stringUtil.getObjCheckYoutubeURI = function(uri) {
    /*
     * const
     */
    var YOUTUBE_REGEXES = {
      'watch' : /^(?:(?:https?:)?\/\/)?(?:www\.)?youtube\.com\/watch/,
      'embed' : /^(?:(?:https?:)?\/\/)?(?:www\.)?youtube\.com\/(?:embed\/((?:\w|-|_){11}))/,
      'v' : /^(?:(?:https?:)?\/\/)?(?:www\.)?youtube\.com\/(?:v\/((?:\w|-|_){11}))/,
      'youtu.be' : /^(?:(?:https?:)?\/\/)?(?:www\.)?youtu\.be\/((?:\w|-|_){11})/
    };

    /*
     * variables
     */
    var flag = false,
      uriType = null;

    for(var key in YOUTUBE_REGEXES) {
      var val = YOUTUBE_REGEXES[key];
      if(!val) continue;

      flag = YOUTUBE_REGEXES[key].exec(uri) ? true : false;
      if(flag) {
        uriType = key;
        break;
      }
    }

    var youtubeId = '',
      isValidYoutubeURI = false;

    var tmpArr = [];
    switch(uriType) {
      case 'watch' :
        youtubeId = stringUtil.getUriParam(uri, 'v') || '';
      break;

      case 'embed' :
        tmpArr = uri.split('?')[0].split('/');
        youtubeId = tmpArr[ tmpArr.length - 1 ] || '';
      break;

      case 'v' :
        tmpArr = uri.split('?')[0].split('/');
        youtubeId = tmpArr[ tmpArr.length - 1 ] || '';
      break;

      case 'youtu.be' :
        tmpArr = uri.split('?')[0].split('/');
        youtubeId = tmpArr[ tmpArr.length - 1 ] || '';
      break;
    
      default :
        youtubeId = '';
    }

    if( youtubeId && stringUtil.isValidYoutubeVideoId(youtubeId) ) {
      isValidYoutubeURI = true;
    }else{
      isValidYoutubeURI = false;
    }

    return {
      youtubeId : youtubeId,
      isValidYoutubeURI : isValidYoutubeURI
    };
  };

	dm.stringUtil = stringUtil;
}());