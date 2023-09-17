Ext.define('ModernApp.store.ArticleViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.ArticleViewStore',
    autoLoad: true,
    pageSize: null,

    fields: ['name', 'id'],

    proxy: {
        type: 'rest',
        url: 'http://localhost:8000/users',

        reader: {
            type: 'json',
            rootProperty: 'data',
            implicitIncludes: false
        }
    }
});
