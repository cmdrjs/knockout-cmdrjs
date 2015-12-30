define(['knockout', 'src/knockout.cmdr'], function(ko) {

  describe('cmdr', function() {
    var viewModel;
    var element;
    var root;

    before(function () {
      root = document.createElement('div');
      root.innerHTML = '<cmdr id="test-cmdr" params=""></cmdr>';
      document.body.appendChild(root);
      element = document.getElementById('test-cmdr');
    });

    beforeEach(function() {
      ko.applyBindings({}, root);
    });

    afterEach(function() {
      ko.cleanNode(root);
    });
    
    it('should be injected', function() {
      expect(true);
    });

  });
});
