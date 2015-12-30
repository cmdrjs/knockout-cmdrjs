/* jshint boss:true*/
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['knockout', 'cmdr', 'module'], factory);
    } else {
        factory(root.ko, root.cmdr);
    }
})(this, function (ko, cmdr, module) {
    'use strict';

    var componentName = 'cmdr';
    if (module && module.config().name) {
        componentName = module.config().name;
    }

    ko.components.register(componentName, {
        viewModel: {
            createViewModel: function (params, componentInfo) {
                this.shell = new cmdr.Shell(componentInfo.element, params);
            }
        },
        template: '&zwnj;'
    });
});