Ext.define('ModernApp.model.ArticleBaseModelPost', {
	extend: 'Ext.data.Model',
	alias: 'ArticleBaseModelPost',

    fields: [
        {name: 'title', type: 'string'},
        {name: 'id', type: 'integer'},
        {name: 'content', type: 'string'},
        {name: 'user_id', type: 'integer'}
    ]
});


