Ext.define('ModernApp.view.addWindow.addWindowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.addBaseWindow',
    requires: [

    ],
    onSaveTap: function () {
        const store = Ext.getStore('ArticleViewStore');
        var form = this.lookup('form');
        const name = form.lookupName('name').getValue() || ''
        const rec = Ext.create('ArticleBaseModel', {
            name: name,
        })
        store.insert(0, rec);
        store.sync();
        store.load();
        this.getView().close();
    },

    onResetTap: function () {
        this.getView().close();
    },
});