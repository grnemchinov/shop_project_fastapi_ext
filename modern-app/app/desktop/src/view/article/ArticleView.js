Ext.define('ModernApp.view.article.ArticleView',
{
    extend: 'Ext.Panel',
    xtype: 'ArticleView',
    height: 400,
    layout: 'fit',
    controller:'ArticleView',
    viewmodel:  'ArticleViewModel',
    requires: [
        'ModernApp.view.article.ArticleViewController',
        'ModernApp.view.article.ArticleView',
    ],
    width: 600,
    tbar: [{
        xtype: 'button',
        text: 'tree',
        tab_xtype: 'productsTree',
        handler: 'products_tree',
    }],
    items: [{
        extend: 'Ext.Panel',
        xtype: 'ArticleView',
        layout:'fit',
         tbar: [{
            xtype: 'button',
            text: 'add',
            tab_xtype: 'addWindow',
            handler: 'add_menu',
        },{
            xtype: 'button',
            text: 'change',
            tab_xtype: 'editWindow',
            handler: 'change_menu',
        },{
            xtype: 'button',
            text: 'delete',
            tab_xtype: 'delWindow',
            handler: 'del_menu',
        }],
        items:[
        {
            xtype: 'grid',
            reference: 'grid',
            bind: {
                store: 'ArticleViewStore'
            },
            title: 'Products',
            width: 250,
            height: 250,
            flex: 1,
            margin: '0 15 0 0',
            autoLoad: true,
            frame: true,
            selModel: {
                type: 'cellmodel'
            },
            scrollable: {
                indicators: 'overlay'
            },
            disableSelection: true,
            defaults: {
                ui: 'action'
            },
            columns: [{
                    text: 'ID',
                    width: 70,
                    dataIndex: 'id',
                    dirtyText: 'ID has been edited',
                    editable: false
                },
                {
                    text: 'Name',
                    flex: 1,
                    dataIndex: 'name',
                    dirtyText: 'Name has been edited',
                    editor: {
                        allowBlank: false
                    }
                }],
            selectable: {
                checkbox: true,
            },
            listeners: {
                select: 'onSelectRow',
                deselect: 'ondeselectRow'
            },
        }],

    },


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    {
        extend: 'Ext.Panel',
        xtype: 'ArticleView',
        controller:'ArticleView',
        viewmodel:  'ArticleViewModel',
        layout:'fit',
         tbar: [{
            xtype: 'button',
            text: 'add',
            tab_xtype: 'addWindowPost',
            handler: 'add_menu_post',
        },{
            xtype: 'button',
            text: 'change',
            tab_xtype: 'editWindowPost',
            handler: 'change_menu_post',
        },{
            xtype: 'button',
            text: 'delete',
            tab_xtype: 'delWindowPost',
            handler: 'del_menu_post',
        }],
        items:[
        {
            xtype: 'grid',
            reference: 'gridPost',
            bind: {
                store: 'ArticleViewStoreSecond'
            },
            title: 'Post',
            width: 250,
            height: 250,
            flex: 1,
            margin: '0 15 0 0',
            autoLoad: true,
            frame: true,
            selModel: {
                type: 'cellmodel'
            },
            scrollable: {
                indicators: 'overlay'
            },

            columns: [{
                    text: 'ID',
                    width: 70,
                    dataIndex: 'id',
                    dirtyText: 'ID has been edited',
                    editable: false
                },
                {
                    text: 'Title',
                    flex: 1,
                    dataIndex: 'title',
                    dirtyText: 'Title has been edited',
                    editor: {
                        allowBlank: false
                    }
                },
                {
                    text: 'Content',
                    flex: 1,
                    dataIndex: 'content',
                    dirtyText: 'Content has been edited',
                    editor: {
                        allowBlank: false
                    }
                },
                {
                    text: 'User_id',
                    flex: 1,
                    dataIndex: 'user_id',
                    dirtyText: 'Content has been edited',
                    editor: {
                        allowBlank: false
                    }
                }
            ],
            selectable: {
                checkbox: true
            }
        }],

    }]
//    items:[{
//        xtype: 'panel',
//        requires: [
//            'ModernApp.view.article.ArticleViewController',
//            'ModernApp.view.article.ArticleView',
//        ],
//        items: [{
//            xtype: 'tree',
//            height: 600,
//            width: 400,
//            store: 'ArticleViewStore',
//            title: 'Favorite Shows by Genre'
//        }]
//    }]
//

});
