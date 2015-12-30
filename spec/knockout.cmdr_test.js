define(['knockout', 'cmdr', 'src/knockout.cmdr'], function (ko, cmdr) {

    describe('cmdr', function () {
        var element;
        var root;

        before(function () {
            root = document.createElement('div');
            root.innerHTML = '<div id="fixture" data-bind="component: \'cmdr\'"></div>';
            document.body.appendChild(root);
            element = document.getElementById('fixture');
            ko.applyBindings();
        });

        it('shell element should be injected', function () {
            expect(element.getElementsByClassName('cmdr-shell').length === 1).to.equal(true);
        });

        it('shell instance to be available on view model', function () {
            expect(ko.dataFor(element).shell instanceof cmdr.Shell).to.equal(true);
        });

    });
});