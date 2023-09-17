Ext.define('ModernApp.store.ArticleViewStoreTree', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.ArticleViewStoreTree',

    proxy: {
        type: 'rest',
        url: 'http://localhost:8000/products',
        reader: {
            type: 'json',
            rootProperty: 'data',
            implicitIncludes: false
        }
    }
});
