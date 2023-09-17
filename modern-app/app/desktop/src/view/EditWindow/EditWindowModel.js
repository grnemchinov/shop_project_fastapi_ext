Ext.define('ModernApp.view.addWindow.EditWindowModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.EditWindowView',
	stores: {
        row: {
            fields: [
                {name: 'id', type: 'integer'}
            ],
        }
}
});