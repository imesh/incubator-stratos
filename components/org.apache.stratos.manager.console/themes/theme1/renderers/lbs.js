var render = function (theme, data, meta, require) {
    for(var i=0;i<data.lbs.length;i++){
        data.lbs[i].key = data.lbs[i].name.replace(/ /g,'');
    }
    var create_btn_class = 'btn-important js_handle_click';
    var title = 'Configure Stratos - LBs';
    if(data.config_status.first_use){
        create_btn_class = "btn-default js_handle_click";
        title =  'Configure Stratos';
    }
    theme('index', {
        body: [
            {
                partial: 'lbs',
                context: {
                    title:title,
                    lbs:data.lbs,
                    config_status:data.config_status
                }
            }
        ],
        header: [
            {
                partial: 'header',
                context:{
                    title:'Configure Stratos',
                    button:{
                        link:'/',
                        name:'New LB',
                        class_name:create_btn_class
                    },
                    has_help:false,
                    lbs:true,
                    config_status:data.config_status
                }
            }
        ],
        title:[
            {
                partial:'title',
                context:{
                    title:title
                }
            }
        ]
    });
};