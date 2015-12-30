define(['knockout', 'cmdr', 'src/knockout.cmdr'], function (ko, cmdr) {

    describe('cmdr', function () {
        var element;
        var root;
        var shell = ko.observable();

        before(function () {
            root = document.createElement('div');
            root.innerHTML = '<div id="fixture" data-bind="component: cmdr"></div>';
            document.body.appendChild(root);
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

        it('shell element should be injected', function () {
            expect(element.getElementsByClassName('cmdr-shell').length === 1).to.equal(true);
        });

        it('shell instance to be available via observable param', function () {
            expect(shell() instanceof cmdr.Shell).to.equal(true);
        });

        // FAIL: dataFor with components is not reliable as of ko 3.4
        //it('shell instance to be available on view model', function (done) {
        //    expect(ko.dataFor(element.firstChild).shell instanceof cmdr.Shell).to.equal(true);   
        //});

    });
});