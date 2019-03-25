Ext.define('MailCenter.view.Mail',
    {
        xtype: 'mailcenter-view-mail',
        extend: 'Ext.panel.Panel',
        title: 'Письмо',
        layout: {type: 'vbox', align: 'stretch'},
        items: [
            { xtype: 'textfield', fieldLabel: 'Исходящий номер' },
            { xtype: 'datefield', fieldLabel: 'Дата регистрации' },
            { xtype: 'combo', fieldLabel: 'Организация-адресат' },
            { xtype: 'combo', fieldLabel: 'Объект' },
            { xtype: 'combo', fieldLabel: 'Тема документа' },
            { xtype: 'combo', fieldLabel: 'Исполнитель' },            
            {
                xtype: 'radiogroup',
                fieldLabel: 'Способ отправки',                                
                vertical: false,
                items: [
                    { boxLabel: 'Курьер', name: 'rb', inputValue: '1' },
                    { boxLabel: 'Почта', name: 'rb', inputValue: '2' },
                    { boxLabel: 'Другое', name: 'rb', inputValue: '3', checked: true }
                ]
            },
            { xtype: 'textarea', fieldLabel: 'Примечание' },
            {
                xtype: 'grid',
                title: 'Файлы',
                flex: 1,
                tbar: [
                    { xtype: 'button', text: 'Добавить' },
                    { xtype: 'button', text: 'Удалить' },
                    '-',
                    { xtype: 'button', text: 'Распечатать' },
                ],
                columns: [
                    { text: 'Название' },
                    { text: 'Размер' },
                    { text: 'Дата' }
                ]
            }
        ]
    });