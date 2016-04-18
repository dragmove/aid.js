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
