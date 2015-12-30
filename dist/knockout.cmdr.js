/* knockout-cmdrjs | version 1.0.0 | license MIT | (c) 2015 John Cruikshank | https://github.com/cmdrjs/knockout-cmdrjs */
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
                          
                this.shell = new cmdr.Shell(componentInfo.element, params.options);
                              
                if (ko.isWriteableObservable(params.shell)) {
                    params.shell(this.shell);
                }
            }
        },
        template: ' ',
        synchronous: true
    });
});