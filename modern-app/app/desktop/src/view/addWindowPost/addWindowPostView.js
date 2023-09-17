Ext.define('ModernApp.view.addWindow.addWindowPostView', {
    extend: 'Ext.window.Window',
    xtype: 'addWindowPost',
    controller:'addBaseWindowPost',
    width: 600,
    height: 350,
    closable: true,
    maximizable: true,
    layout: 'fit',
    requires: [
        'Ext.grid.rowedit.Plugin',
        'Ext.form.FieldSet',
        'Ext.form.Panel'
    ],
    title: 'Добавить юзера',
    items: [{
        xtype: 'formpanel',
        reference: 'formPost',
        buttons: [{
            text: 'Сохранить',
            iconCls: 'save',
            handler: 'onSaveTap'
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
                label: 'Title',
                name: 'title',
                xtype: 'textfield',
                required: true,
                clearable: true,
                allowBlank: false,
                errorTarget: 'under',
            },{
                label: 'Content',
                name: 'content',
                xtype: 'textfield',
                required: true,
                clearable: true,
                allowBlank: false,
                errorTarget: 'under',
            },{
                label: 'user_id',
                name: 'user_id',
                xtype: 'numberfield',
                minValue: 0,
                value: 0,
                maxValue: 999999,
                required: true,
                clearable: true,
                allowBlank: false,
                errorTarget: 'under',
            },{
                    text: 'Нет',
                    value: 0
                }],
                required: true,
                clearable: true,
                allowBlank: false,
                errorTarget: 'under',
            }
            ]
        }]
});
