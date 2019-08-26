/* Carlos Servín R.
  21/08/2019 Legal tracking
  Example Front End Module
  https://afterlogic.com/docs/webmail-pro-8/developers-guide/creating-sample-frontend-module
*/


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
