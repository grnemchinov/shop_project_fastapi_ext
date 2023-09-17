Ext.define('ModernApp.view.productsTree.productsTreeView', {
    extend: 'Ext.window.Window',
    xtype: 'productsTree',
    width: 800,
    id: 'productsTree',
    height: 500,
    closable: true,
    maximizable: true,
    layout: 'fit',
    requires: [
        'Ext.grid.rowedit.Plugin',
        'Ext.form.FieldSet',
        'ModernApp.view.productsTree.productsTreeView',
        'Ext.form.Panel'
    ],
    title: 'Продукты',
    items:[{
            xtype: 'tree',
//            level: 'all',
            height: 600,
            width: 400,
            flex: 1,
            margin: '0 15 0 0',
            autoLoad: true,
            frame: true,
            store: 'ArticleViewStoreTree',
            title: 'Favorite Shows by Genre'

    }]

});
