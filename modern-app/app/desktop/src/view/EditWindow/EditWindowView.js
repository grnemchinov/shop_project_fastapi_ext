Ext.define('ModernApp.view.addWindow.EditWindowView', {
    extend: 'Ext.window.Window',
    xtype: 'editWindow',
    controller: 'EditWindowView',
    id: 'editWindow',
    viewModel: 'EditWindowView',
    requires: [
        'Ext.grid.rowedit.Plugin',
        'Ext.grid.filters.Plugin',
        'Ext.form.FieldSet',
        'Ext.form.Panel',
        'Ext.field.Hidden'
    ],
    baseStore: null,
    title: 'Изменение',
    closable: true,
    maximizable: true,
    resizable: {
        edges: 'all'
    },
    width: 600,
    height: 350,
    layout: 'fit',
    defaults: {
        bodyPadding: 10
    },
    items: [{
        xtype: 'formpanel',
        reference: 'form',
        buttons: [{
            text: 'Сохранить',
            iconCls: 'save',
            id: 'save_button',
            handler: 'onSaveTap',
        }, {
            text: 'Отменить',
            iconCls: 'cancel',
            handler: 'onResetTap'
        }],
        items: [{
            xtype: 'fieldset',
            defaults: {
                labelWidth: 200,
               },
            items: [{
                xtype: 'hiddenfield',
                name: 'id',
             }, {
                xtype: 'hiddenfield',
                name: 'index',
             }, {
                xtype: 'textfield',
                name: 'name',
                label: 'name',
                required: true,
                clearable: true,
                allowBlank: false,
                errorTarget: 'under',
            }]
        }]
    },
]
});