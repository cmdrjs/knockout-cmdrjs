define(['knockout', 'cmdr', 'src/knockout.cmdr'], function (ko, cmdr) {

    describe('cmdr', function () {
        var shell;
        var root;
        var element;
        
        beforeEach(function () {
            shell = ko.observable();
            root = document.createElement('div');            
            document.body.appendChild(root);
            root.innerHTML = '<div id="fixture" data-bind="component: cmdr"></div>';
            element = document.getElementById('fixture');
            ko.applyBindings({
                cmdr: {
                    name: 'cmdr',
                    params: {
                        shell: shell,
                        options: { }
                    }
                }
            }, root);
        });
        
        afterEach(function() {
            ko.removeNode(root);
            shell = null;
            root = null;
            element = null;
        });

        it('shell element should be injected', function () {
            expect(element.getElementsByClassName('cmdr-shell').length).to.equal(1);
        });

        it('shell instance to be available via observable param', function () {
            expect(shell() instanceof cmdr.Shell).to.equal(true);
        });
        
        it('shell should be disposed upon node clean', function () {
            ko.cleanNode(root);
            expect(shell().isInitialized).to.equal(false);
            expect(element.getElementsByClassName('cmdr-shell').length).to.equal(0);
        });

    });
});