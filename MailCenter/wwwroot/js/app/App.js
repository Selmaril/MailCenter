Ext.define('MailCenter.App', {
    extend: 'Ext.app.Application',
    name: 'MailCenter',

    stores: [
        // TODO: add global / shared stores here
    ],

    autoCreateViewport: 'MailCenter.view.Main',

    launch: function() {

    }
});