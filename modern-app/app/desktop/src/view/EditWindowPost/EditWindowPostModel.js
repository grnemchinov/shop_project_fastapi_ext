Ext.define('ModernApp.view.addWindow.EditWindowPostModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.EditWindowPostView',
	stores: {
        row: {
            fields: [
                {name: 'id', type: 'integer'}
            ],
        }
}
});