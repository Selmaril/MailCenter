Ext.define('MailCenter.view.Main',
    {
        xtype: 'mailcenter-view-main',
        extend: 'Ext.container.Viewport',

        layout: 'border',
        items: [{
            region: 'north',
            html: '<h1 class="x-panel-header">Центр писем ООО "Ромашка"</h1>',
            border: false,
            margin: '0 0 5 0'
        }, {
            region: 'east',
            width: 450,
            xtype: 'mailcenter-view-mail'
        }, {
            region: 'center',
            xtype: 'mailcenter-view-mails'
        }]
    });