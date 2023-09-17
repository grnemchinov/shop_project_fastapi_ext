Ext.define('ModernApp.view.addWindow.addWindowView', {
    extend: 'Ext.window.Window',
    xtype: 'addWindow',
    controller:'addBaseWindow',
    width: 600,
    id: 'addWindow',
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
        reference: 'form',
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
                label: 'Name',
                name: 'name',
                xtype: 'textfield',
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
