Ext.define('ModernApp.view.addWindow.EditWindowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.EditWindowView',
    requires: [
        'Ext.data.proxy.Rest'
    ],

    onSaveTap: function () {
        const store = Ext.getStore('ArticleViewStore');
        var form = this.lookup('form');
        index = form.lookupName('index').getValue()
        id = form.lookupName('id').getValue()
        name = form.lookupName('name').getValue() || ''
        const rec = store.getAt(index)
        const recUpdate = {
            'name': name,
        }
        rec.set(recUpdate)
        store.sync();
        store.load();
        this.getView().close();
},

    onResetTap: function () {
        this.getView().close();
    },
});