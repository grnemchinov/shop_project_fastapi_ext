Ext.define('ModernApp.store.ArticleViewStoreSecond', {
    extend: 'Ext.data.Store',
    alias: 'store.ArticleViewStoreSecond',
    autoLoad: true,
    pageSize: null,

    fields: ['id', 'title', 'content', 'user_id'],

    proxy: {
        type: 'rest',
        url: 'http://localhost:8000/posts',

        reader: {
            type: 'json',
            rootProperty: 'data',
            implicitIncludes: false
        }
    }
});
