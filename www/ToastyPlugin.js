var exec = require('cordova/exec');

const ToastyPlugin = function() {
    //
}
ToastyPlugin.prototype.show = function (arg0, success, error) {
    exec(success, error, 'ToastyPlugin', 'show', [arg0]);
};

module.exports = new ToastyPlugin();
