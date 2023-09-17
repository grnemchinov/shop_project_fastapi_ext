Ext.define('ModernApp.view.article.ArticleViewModel', {
	extend: 'Ext.app.ViewModel',
//	alias: 'viewmodel.articleviewmodel',
	xtype: 'ArticleViewModel',
	model: 'ArticleBaseModel',
	model: 'ArticleBaseModelPost',
     proxy: {
        type: 'rest',
        reader: {
            type: 'json'
        },
        url: 'http://localhost:8000/users'
    },
        validators: {
        name: 'presence'
    },
    proxy: {
        type: 'rest',
        reader: {
            type: 'json'
        },
        url: 'http://localhost:8000/posts'
    },
        validators: {
        name: 'presence'
    },

});


