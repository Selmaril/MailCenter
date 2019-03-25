Ext.define('MailCenter.view.Mails',
    {
        xtype: 'mailcenter-view-mails',
        extend: 'Ext.grid.Panel',
        title: 'Письма',
        tbar: [
            { xtype: 'button', text: 'Создать' },
            '->',
            { xtype: 'textfield', fieldLabel: 'Поиск', labelWidth: 70 }
        ],
        columns: [
            { text: 'Исходящий номер' },
            { text: 'Дата регистрации' },
            { text: 'Организация-адресат' },
            { text: 'Объект' },
            { text: 'Тема документа' },
            { text: 'Исполнитель' },
            { text: 'Способ отправки' },
            { text: 'Примечание' }
        ],
        bbar: { xtype: 'pagingtoolbar'}
    });