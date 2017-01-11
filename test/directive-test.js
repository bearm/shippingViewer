describe('directives', function() {

    beforeEach(module('packlinkApp'));

    var element;
    var outerScope;
    var innerScope;

    beforeEach(inject(function($rootScope, $compile) {
        element = angular.element('<claimtime date="today"></claimtime>');

        outerScope = $rootScope;

        $compile(element)(outerScope);

        innerScope = element.isolateScope();

        outerScope.$digest();
    }));

    describe('checking date parameter', function() {
        beforeEach(function() {
            outerScope.$apply(function() {
                outerScope.today = new Date();
            });
        });

        it('should be rendered', function() {
            var expected = outerScope.today.getDate().toString();
            expect(element[0].children[0].children[0].innerHTML).to.equal(expected);
        });
    });
});