Ext.define('ModernApp.view.addWindow.EditWindowPostView', {
    extend: 'Ext.window.Window',
    xtype: 'editWindowPost',
    controller: 'EditWindowPostView',
    viewModel: 'EditWindowPostView',
    requires: [
        'Ext.grid.rowedit.Plugin',
        'Ext.grid.filters.Plugin',
        'Ext.form.FieldSet',
        'Ext.form.Panel',
        'Ext.field.Number',
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
        reference: 'formPost',
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
                name: 'title',
                label: 'Title',
                required: true,
                clearable: true,
                allowBlank: false,
                errorTarget: 'under',
            }, {
                xtype: 'textfield',
                name: 'content',
                label: 'Content',
                required: true,
                clearable: true,
                allowBlank: false,
                errorTarget: 'under',
            }, {
                xtype: 'numberfield',
                name: 'user_id',
                label: 'User_id',
                clearable: true,
                allowBlank: false,
                labelWrap: true,
                minValue: 0,
                maxValue: 999999,
                errorTarget: 'under',
            }]
        }]
    },
]
});