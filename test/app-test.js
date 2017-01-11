describe('Packlink tests', function() {

    var scope;
    var ctrl;

    beforeEach(module('packlinkApp'));

    describe("commonCtrl", function() {

        var dictionaryLoader;

        beforeEach(inject(function ($rootScope, $controller, _dictionaryLoader_) {
            scope = $rootScope.$new();
            ctrl = $controller('commonCtrl', {$scope: scope});
            dictionaryLoader = _dictionaryLoader_;
        }));

        it('should have declared a dictionary', function(){
            expect(dictionaryLoader).to.exist;
        });
        it('should have default language as es', function(){
            expect(dictionaryLoader.currentLang).to.equal("es");
        });
        it('should change to en', function(){
            dictionaryLoader.setCurrentLang("en");
            expect(dictionaryLoader.currentLang).to.equal("en");
        });
        //mock diccionario
        //cambiar idioma y elegir diccionario
    });

    describe("servicesCtrl", function() {
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('servicesCtrl', {$scope: scope});
        }));

        it('predicate default value for order should be empty', function () {
            expect(scope.predicate).to.equal("");
        });

        it('today plus the number of days', function () {
            var today = new Date();
            var expected = today.getUTCDate() + 1;
            expect(scope.getEndHour(24).getUTCDate()).to.equal(expected);
        });
    });
    //todo template directive test
});
