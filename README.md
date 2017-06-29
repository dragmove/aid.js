# aid.js
[![npm version](https://badge.fury.io/js/aid.js.svg)](https://www.npmjs.com/package/aid.js)


## About
* A bundle of Javascript util Library for help developers.
* No dependency to other Libraries.

Thanks to whoever use aid.js.


## Install
```javascript
npm install aid.js --save-dev
```


## Getting Started
In Node.js environment :
```javascript
var aid = require('aid.js');
var isNotNaN = aid.not(isNaN);
console.log( isNotNaN(0) ); // true
```

In Browser environment :
```javascript
import aid from 'aid.js';
const isNotNaN = aid.not(isNaN);
console.log( isNotNaN(0) ); // true
```


## Usage
* base utils
```javascript
    aid.existy
    aid.isDefined
    aid.isBoolean
    aid.isNumber
    aid.isInteger
    aid.isString
    aid.isArray
    aid.isObject
    aid.isFunction
    aid.isRegExp
    aid.extend
    aid.inherit
    aid.namespace
    aid.borrow
    aid.bind
    aid.compose
    aid.not
    aid.each
    aid.truthy
    aid.falsy
    aid.nth
    aid.constant
    aid.plucker
    aid.best
    aid.iterateUntil
    aid.curry
    aid.curry2
    aid.curryAll
    aid.rest
    aid.pipeline
```

* operator utils
```javascript
    aid.operator['+']
    aid.operator['===']
    aid.operator['!']
```

* platform utils
```javascript
    aid.platform.isWindow
    aid.platform.isMac
    aid.platform.isIOS
    aid.platform.isAndroid
```

* browser utils 
```javascript
    aid.browser.isIE
    aid.browser.isEdge
    aid.browser.isFF
    aid.browser.isOpera
    aid.browser.isChrome
    aid.browser.isSafari
    aid.browser.getIEVersion
    aid.browser.getFFVersion
    aid.browser.getOperaVersion
    aid.browser.getChromeVersion
    aid.browser.getSafariVersion
    aid.browser.getIECompatibility
    aid.browser.isSupportDraggable
    aid.browser.isSupportDragAndDrop
    aid.browser.isSupportFileApi
    aid.browser.isChromeExtension
    aid.browser.getCookie
    aid.browser.setCookie
```

* string utils 
```javascript
    aid.string.trim
    aid.string.hasUniqueChars
    aid.string.getFileExtension
    aid.string.isEmail
    aid.string.isIFrame
    aid.string.getUriParam
    aid.string.getUriParams
    aid.string.getUriCombinedParams
    aid.string.isValidYoutubeVideoId
    aid.string.getObjCheckYoutubeURI
    aid.string.getObjCheckTwitchURI
    aid.string.getDocumentPrefixedProperty
    aid.string.getElementPrefixedStyle
    aid.string.absentToEmpty
    aid.string.numberWithCommas
    aid.string.getPositionFromTranslateStr
    aid.string.isPalindrome
```

* math utils 
```javascript
    aid.math.getSizeAspectFill
    aid.math.getSizeAspectFit
    aid.math.getSizeWidthFit
    aid.math.isEpsilonEqual
    aid.math.isIndexInLoop
    aid.math.getLoopedLastIndex
    aid.math.getReverseLoopedFirstIndex
    aid.math.factorial
    aid.math.getObjForPagination
    aid.math.degreeToRadian
    aid.math.radianToDegree
```

* date utils 
```javascript
    aid.date.DAYS
    aid.date.MONTHS
    aid.date.MIN_TO_SEC
    aid.date.HOUR_TO_SEC
    aid.date.DAY_TO_SEC
```

* array utils 
```javascript
    aid.array.indexOf
    aid.array.indexOfMin
    aid.array.swap
    aid.array.selectionSort
    aid.array.insertionSort
    aid.array.merge
    aid.array.mergeSort
    aid.array.getPivotIndexAfterPartition
    aid.array.quickSort
    aid.array.remove
    aid.array.getMatrixArr
    aid.array.binaryIndexOf
    aid.array.getFirstObjectHasProperty
```

* element utils
```javascript
    aid.element.isEntirelyInViewport
    aid.element.isPartiallyInViewport
```

* file utils
```javascript
    aid.file.appendScriptFile
```

* data structure utils
```javascript
    aid.createStack
    aid.createQueue
    aid.createLinkedList
```


## Contact
* @Website : http://www.dragmove.com
* @Blog : http://blog.naver.com/dragmove
* @Blog (Wordpress) : http://dragmove.synology.me/wordpress/
* @LinkedIn : https://www.linkedin.com/in/hyun-seok-kim-99748295/
* @E-mail : dragmove@gmail.com


## License
[MIT license](http://danro.mit-license.org/).