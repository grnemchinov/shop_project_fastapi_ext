Ext.define('ModernApp.view.main.MainView', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainview',
    controller: 'mainviewcontroller',
    viewModel: {
        type: 'mainviewmodel'
    },
    requires: [
        'Ext.layout.Fit',
        'Ext.grid.Grid',
        'Ext.scroll.Scroller',
        'Ext.tab.Panel',
        'Ext.Container',
        'Ext.layout.overflow.Scroller',
        'Ext.SegmentedButton',
        'Ext.form.Panel'
    ],
    layout: 'fit',
    fullscreen: true,
    items: [
        {xtype: 'ArticleView', title:'Article'}
//        { xtype: 'navview',    reference: 'navview',    docked: 'left',   bind: {width:  '{navview_width}'}, listeners: { select: "onMenuViewSelectionChange"} },
//        { xtype: 'headerview', reference: 'headerview', docked: 'top',    bind: {height: '{headerview_height}'} },
//        { xtype: 'footerview', reference: 'footerview', docked: 'bottom', bind: {height: '{footerview_height}'} },
//        { xtype: 'centerview', reference: 'centerview' },
//        { xtype: 'detailview', reference: 'detailview', docked: 'right',  bind: {width:  '{detailview_width}'}  },
    ]
});
