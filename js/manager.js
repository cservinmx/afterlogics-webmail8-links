
'use strict';
module.exports = function (oAppData) {
    var App = require('%PathToCoreWebclientModule%/js/App.js');
    if (App.getUserRole() === Enums.UserRole.NormalUser)
    {
        return {
            getHeaderItem: function ()
            {
                return {
                    item: require('modules/%ModuleName%/js/views/HeaderItemView.js'),
                    name: '%ModuleName%'
                };
            }
        };
    }
    return null;
};
