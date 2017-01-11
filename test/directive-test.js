describe('directives', function() {

    beforeEach(module('packlinkApp'));

    var element;
    var outerScope;
    var innerScope;

    beforeEach(inject(function($rootScope, $compile) {
        element = angular.element('<claimtime fromto="fromtotext"></claimtime>');

        outerScope = $rootScope;

        $compile(element)(outerScope);

        innerScope = element.isolateScope();

        outerScope.$digest();
    }));

    describe('checking date parameter', function() {
        beforeEach(function() {
            outerScope.$apply(function() {
                outerScope.fromtotext = {
                    "text": "Pickup at home/offices",
                    "time": "mornings 8 to 14h"
                };
            });
        });

        it('should be rendered', function() {
            expect(element[0].children[0].innerHTML).to.equal("Pickup at home/offices");
        });
    });
});