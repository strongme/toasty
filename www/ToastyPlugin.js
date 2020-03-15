var exec = require('cordova/exec');

const ToastyPlugin = function() {
    //
}
ToastyPlugin.prototype.show = function (message, duration, success, error) {
    var options = {};
    options.message = message;
    options.duration = duration;
    exec(success, error, 'ToastyPlugin', 'show', [options]);
};

module.exports = new ToastyPlugin();
