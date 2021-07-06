const navigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'      : 'admin',
                'title'   : 'Admin',
                'type'    : 'collapse',
                'icon'    : 'admin_panel_settings',
                'url'     : '/apps/e-commerce',
                'children': [
                    {
                        'id'   : 'admin-list-view',
                        'title': 'List View',
                        'type' : 'item',
                        'url'  : '/apps/e-commerce/products',
                        'exact': true
                    },
                    {
                        'id'   : 'admin-detail-view',
                        'title': 'Detail View',
                        'type' : 'item',
                        'url'  : '/apps/e-commerce/products/1/a-walk-amongst-friends-canvas-print',
                        'exact': true
                    },
                    {
                        'id'   : 'admin-add-record',
                        'title': 'Add Record',
                        'type' : 'item',
                        'url'  : '/apps/e-commerce/products/new',
                        'exact': true
                    }
                ]
            },
        ]
    },
   
    {
        'type': 'divider',
        'id'  : 'divider-2'
    },
  
   
];

export default navigationConfig;
