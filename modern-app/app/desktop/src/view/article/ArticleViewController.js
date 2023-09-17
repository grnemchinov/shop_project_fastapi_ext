Ext.define('ModernApp.view.article.ArticleViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ArticleView',


    getStoreBase: function () {
        return this.getViewModel().getStore('ArticleViewStore');
    },
    getStoreBasePost: function () {
        return this.getViewModel().getStore('ArticleViewStoreSecond');
    },

    addWindow: function (tab_xtype) {
    Ext.create({
        xtype: tab_xtype,
    }).show();
    },

    add_menu: function (btn){
        this.addWindow(btn.tab_xtype);
    },

    change_menu: function(btn) {
    const store = Ext.getStore('ArticleViewStore')
    var window = Ext.create({
        xtype: btn.tab_xtype,
        baseStore: this.getStoreBase()
    })
    var grid = this.lookup('grid')
    var row = grid.getSelected().items[0]
    var rowIndex = grid.store.indexOf(row)
    var rowData = row.getData()
    Object.keys(rowData).forEach(function(key, index) {
        if (typeof(rowData[key]) === 'boolean')
            rowData[key] = + rowData[key];
      });
    rowData['index'] = rowIndex
    window.lookup('form').setValues(rowData)
    window.show()
},
    delWindow: function () {
        Ext.Msg.confirm('Удаление записи', 'Вы действительно хотите удалить основание?',
                        function(answer) {
                            if (answer === 'yes'){
                                this.removeSelected()
                            }
                        }, this);
    },

    del_menu: function (btn){
        const store = Ext.getStore('ArticleViewStore')
        var grid = this.lookup('grid')
        var row = grid.getSelected().items[0]
        var rec = store.getAt(grid.store.indexOf(row))
        store.remove(rec)
        store.sync();
        store.load();
    },


    onSelectRow: function() {
        const storePost = Ext.getStore('ArticleViewStoreSecond')
        const store = Ext.getStore('ArticleViewStore')
        var grid = this.lookup('grid')
        var row = grid.getSelected().items[0]
        id = row.get('id')
        storePost.filter('user_id', id);
        storePost.load();
    },


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    addWindowPost: function (tab_xtype) {
    Ext.create({
        xtype: tab_xtype,
    }).show();
    },

    add_menu_post: function (btn){
        this.addWindow(btn.tab_xtype);
    },

    change_menu_post: function(btn) {
    const store = Ext.getStore('ArticleViewStoreSecond')
    var window = Ext.create({
        xtype: btn.tab_xtype,
        baseStore: this.getStoreBase()
    })
    var grid = this.lookup('gridPost')
    var row = grid.getSelected().items[0]
    var rowIndex = grid.store.indexOf(row)
    var rowData = row.getData()
    Object.keys(rowData).forEach(function(key, index) {
        if (typeof(rowData[key]) === 'boolean')
            rowData[key] = + rowData[key];
      });
    rowData['index'] = rowIndex
    window.lookup('formPost').setValues(rowData)
    window.show()
},
    delWindowPost: function () {
        Ext.Msg.confirm('Удаление записи', 'Вы действительно хотите удалить основание?',
                        function(answer) {
                            if (answer === 'yes'){
                                this.removeSelected()
                            }
                        }, this);
    },

    del_menu_post: function (btn){
        const store = Ext.getStore('ArticleViewStoreSecond')
        var grid = this.lookup('gridPost')
        var row = grid.getSelected().items[0]
        var rec = store.getAt(grid.store.indexOf(row))
        store.remove(rec)
        store.sync();
        store.load();
    },

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    productsTree: function (tab_xtype) {
    Ext.create({
        xtype: tab_xtype,
    }).show();
    },

    products_tree: function (btn){
        this.productsTree(btn.tab_xtype);
    },
});