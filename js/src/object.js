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