Ext.define('ModernApp.view.addWindow.EditWindowPostController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.EditWindowPostView',
    requires: [
        'Ext.data.proxy.Rest'
    ],

    onSaveTap: function () {
        const store = Ext.getStore('ArticleViewStoreSecond');
        var form = this.lookup('formPost');
        index = form.lookupName('index').getValue()
        id = form.lookupName('id').getValue()
        title = form.lookupName('title').getValue() || ''
        content = form.lookupName('content').getValue() || ''
        user_id = form.lookupName('user_id').getValue() || ''
        const rec = store.getAt(index)
        const recUpdate = {
            'title': title,
            'content': content,
            'user_id': user_id,
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