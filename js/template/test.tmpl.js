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
