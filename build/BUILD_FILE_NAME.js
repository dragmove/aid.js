/**
 * @name : TEST
 * @version : v0.0.0
 * @author : 
 */
// doT.js
// 2011, Laura Doktorova, https://github.com/olado/doT
// Licensed under the MIT license.

(function() {
	"use strict";

	var doT = {
		version: '1.0.1',
		templateSettings: {
			evaluate:    /\{\{([\s\S]+?(\}?)+)\}\}/g,
			interpolate: /\{\{=([\s\S]+?)\}\}/g,
			encode:      /\{\{!([\s\S]+?)\}\}/g,
			use:         /\{\{#([\s\S]+?)\}\}/g,
			useParams:   /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
			define:      /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
			defineParams:/^\s*([\w$]+):([\s\S]+)/,
			conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
			iterate:     /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
			varname:	'it',
			strip:		true,
			append:		true,
			selfcontained: false
		},
		template: undefined, //fn, compile template
		compile:  undefined  //fn, for express
	}, global;

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = doT;
	} else if (typeof define === 'function' && define.amd) {
		define(function(){return doT;});
	} else {
		global = (function(){ return this || (0,eval)('this'); }());
		global.doT = doT;
	}

	function encodeHTMLSource() {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },
			matchHTML = /&(?!#?\w+;)|<|>|"|'|\//g;
		return function() {
			return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;
		};
	}
	String.prototype.encodeHTML = encodeHTMLSource();

	var startend = {
		append: { start: "'+(",      end: ")+'",      endencode: "||'').toString().encodeHTML()+'" },
		split:  { start: "';out+=(", end: ");out+='", endencode: "||'').toString().encodeHTML();out+='"}
	}, skip = /$^/;

	function resolveDefs(c, block, def) {
		return ((typeof block === 'string') ? block : block.toString())
		.replace(c.define || skip, function(m, code, assign, value) {
			if (code.indexOf('def.') === 0) {
				code = code.substring(4);
			}
			if (!(code in def)) {
				if (assign === ':') {
					if (c.defineParams) value.replace(c.defineParams, function(m, param, v) {
						def[code] = {arg: param, text: v};
					});
					if (!(code in def)) def[code]= value;
				} else {
					new Function("def", "def['"+code+"']=" + value)(def);
				}
			}
			return '';
		})
		.replace(c.use || skip, function(m, code) {
			if (c.useParams) code = code.replace(c.useParams, function(m, s, d, param) {
				if (def[d] && def[d].arg && param) {
					var rw = (d+":"+param).replace(/'|\\/g, '_');
					def.__exp = def.__exp || {};
					def.__exp[rw] = def[d].text.replace(new RegExp("(^|[^\\w$])" + def[d].arg + "([^\\w$])", "g"), "$1" + param + "$2");
					return s + "def.__exp['"+rw+"']";
				}
			});
			var v = new Function("def", "return " + code)(def);
			return v ? resolveDefs(c, v, def) : v;
		});
	}

	function unescape(code) {
		return code.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, ' ');
	}

	doT.template = function(tmpl, c, def) {
		c = c || doT.templateSettings;
		var cse = c.append ? startend.append : startend.split, needhtmlencode, sid = 0, indv,
			str  = (c.use || c.define) ? resolveDefs(c, tmpl, def || {}) : tmpl;

		str = ("var out='" + (c.strip ? str.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g,' ')
					.replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,''): str)
			.replace(/'|\\/g, '\\$&')
			.replace(c.interpolate || skip, function(m, code) {
				return cse.start + unescape(code) + cse.end;
			})
			.replace(c.encode || skip, function(m, code) {
				needhtmlencode = true;
				return cse.start + unescape(code) + cse.endencode;
			})
			.replace(c.conditional || skip, function(m, elsecase, code) {
				return elsecase ?
					(code ? "';}else if(" + unescape(code) + "){out+='" : "';}else{out+='") :
					(code ? "';if(" + unescape(code) + "){out+='" : "';}out+='");
			})
			.replace(c.iterate || skip, function(m, iterate, vname, iname) {
				if (!iterate) return "';} } out+='";
				sid+=1; indv=iname || "i"+sid; iterate=unescape(iterate);
				return "';var arr"+sid+"="+iterate+";if(arr"+sid+"){var "+vname+","+indv+"=-1,l"+sid+"=arr"+sid+".length-1;while("+indv+"<l"+sid+"){"
					+vname+"=arr"+sid+"["+indv+"+=1];out+='";
			})
			.replace(c.evaluate || skip, function(m, code) {
				return "';" + unescape(code) + "out+='";
			})
			+ "';return out;")
			.replace(/\n/g, '\\n').replace(/\t/g, '\\t').replace(/\r/g, '\\r')
			.replace(/(\s|;|\}|^|\{)out\+='';/g, '$1').replace(/\+''/g, '')
			.replace(/(\s|;|\}|^|\{)out\+=''\+/g,'$1out+=');

		if (needhtmlencode && c.selfcontained) {
			str = "String.prototype.encodeHTML=(" + encodeHTMLSource.toString() + "());" + str;
		}
		try {
			return new Function(c.varname, str);
		} catch (e) {
			if (typeof console !== 'undefined') console.log("Could not create a template function: " + str);
			throw e;
		}
	};

	doT.compile = function(tmpl, def) {
		return doT.template(tmpl, null, def);
	};
}());

(function(){
    if(!window.nc) window.nc = {};
    if(!nc.PROJECT_NAME) nc.PROJECT_NAME = {};
    if(!nc.PROJECT_NAME.tmpl) nc.PROJECT_NAME.tmpl = {};
    
    var tmpl = ''
        + '{{{title}}}'
        + ''
        + '<div class="title">'
        + ''
        +     '<div>+ This is sample.tpl.html title</div>'
        + ''
        + '</div>'
        + ''
        + ''
        + ''
        + '{{{info}}}'
        + ''
        + '<section class="info">'
        + ''
        +     '{{? it.name === \'Kim\'}}'
        + ''
        +     '<div>{{=it.name}}</div>'
        + ''
        +     '{{?? it.company}}'
        + ''
        +     '<div>{{=it.company}}</div>'
        + ''
        +     '{{??}}'
        + ''
        +     '<div>no name</div>'
        + ''
        +     '{{?}}'
        + ''
        + '</section>'
        + ''
        + ''
        + ''
        + '{{{loadingBar}}}'
        + ''
        + '<div class="loadingbar">loading</div>';
    
    nc.PROJECT_NAME.tmpl["sample"] = tmpl;
}());

(function(){
    if(!window.nc) window.nc = {};
    if(!nc.PROJECT_NAME) nc.PROJECT_NAME = {};
    if(!nc.PROJECT_NAME.tmpl) nc.PROJECT_NAME.tmpl = {};
    
    var tmpl = ''
        + '<div class="wrapArticle">'
        + ''
        +     '<div>+ This is test.tpl.html title</div>'
        + ''
        + '</div>';
    
    nc.PROJECT_NAME.tmpl["test"] = tmpl;
}());

if(!window.nc) window.nc = {};
if(!nc.PROJECT_NAME) nc.PROJECT_NAME = {};

(function($) {
	'use strict';

	nc.PROJECT_NAME.util = {};

	var isDefined = function(obj) {
		var flag = true;
		if(obj === null || typeof obj === 'undefined') return false;
		return flag;
	};

	var trim = function(str) {
		return str.replace(/^\s+/, '').replace(/\s+$/, '');
	};

	var getParseTmplObj = function(tmplStr) {
		var obj = {},
			splitArr = tmplStr.split('{{{');

		var str, arr;
		for(var i=0,max=splitArr.length; i<max; i++) {
			str = splitArr[i];
			if(str !== '') {
				arr = str.split('}}}');
				obj[ nc.PROJECT_NAME.util.trim(arr[0]) ] = nc.PROJECT_NAME.util.trim(arr[1]);
			}
		}
		return obj;
	};

	var parseStrPropertiesToInt = function(_obj) {
		var obj = $.extend({}, _obj);
		for(var key in obj) {
			if(obj.hasOwnProperty(key)) {
				obj[key] = parseInt(obj[key], 10);
			}
		}
		return obj;
	};

	nc.PROJECT_NAME.util.isDefined = isDefined;
	nc.PROJECT_NAME.util.trim = trim;
	nc.PROJECT_NAME.util.getParseTmplObj = getParseTmplObj;
	nc.PROJECT_NAME.util.parseStrPropertiesToInt = parseStrPropertiesToInt;
}(jQuery));
if(!window.td) window.td = {};

// normal function
td.testFunc = function() {
    return true;
};

// ajax function
td.testAjaxGetCareer = function(url, successCallback, failCallback) {
    $.ajax({
        type: 'GET',
        url: url,
        data: {},
        dataType: 'json',
        beforeSend: function() {
        },
        success: successCallback,
        error: failCallback,
    });
};

// module pattern class
td.testPerson = function() {
    var name = 'person';

    function getName() {
        return name;
    }

    return {
        getName : getName
    };
};

td.testParent = function() {
    var lastName = '',
        child = null;

    function setLastName(lastNameStr) {
        lastName = lastNameStr;
        if(child) child.setLastName(lastName);
    }
    function getLastName() {
        return lastName;
    }
    function setChild(childInstance) {
        child = childInstance;
    }

    return {
        setLastName : setLastName,
        getLastName : getLastName,
        setChild : setChild
    };
};

td.testChild = function() {
    var lastName = '';

    function setLastName(lastNameStr) {
        lastName = lastNameStr;
    }
    function getLastName() {
        return lastName;
    }

    return {
        setLastName : setLastName,
        getLastName : getLastName
    };
};