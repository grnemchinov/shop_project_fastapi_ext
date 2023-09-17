Ext.define('ModernApp.view.addWindow.addWindowPostController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.addBaseWindowPost',
    requires: [

    ],
    onSaveTap: function () {
        const store = Ext.getStore('ArticleViewStoreSecond');
        var form = this.lookup('formPost');
        const title = form.lookupName('title').getValue() || ''
        const content = form.lookupName('content').getValue() || ''
        const user_id = form.lookupName('user_id').getValue() || ''
        const rec = Ext.create('ArticleBaseModelPost', {
            title: title,
            content: content,
            user_id: user_id,
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