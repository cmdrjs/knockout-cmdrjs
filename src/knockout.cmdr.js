/* jshint boss:true*/
define(['knockout', 'cmdr', 'module'], function(ko, cmdr, module) {
  'use strict';

  var componentName = module.config().name || 'cmdr';

  ko.components.register(componentName, {
    createViewModel: function(params, componentInfo) {
        this.shell = new cmdr.Shell(componentInfo.element, params);
    }
  });
});
