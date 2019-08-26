/* Carlos Servín R.
  21/08/2019 Legal tracking
  Example Front End Module
  https://afterlogic.com/docs/webmail-pro-8/developers-guide/creating-sample-frontend-module
*/

var ko = require('knockout');
function CHeaderItemView()
{
    this.aLinks = [
        {
            url: 'http://www.afterlogic.com',
            text: 'AfterLogic'
        },
        {
            url: 'http://www.google.com',
            text: 'Google'
        }
    ];
    this.visible = ko.observable(true);
}
CHeaderItemView.prototype.ViewTemplate = '%ModuleName%_HeaderItemView';
module.exports = new CHeaderItemView();
