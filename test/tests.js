var angular = require('app/libs/angular');
var chai = require('chai');
var assert = chai.assert;

describe('Packlink tests', function () {
    beforeEach(angular.mock.module('packlinkApp'));

    describe('commonCtrl', function () {
        it('should have a commonCtrl controller', function () {
            expect(packlinkApp.commonCtrl).toBeDefined();
        });
    });

    describe('servicesCtrl', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal(-1, [1, 2, 3].indexOf(0));
        });
    });

    describe('dictionaryLoader', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal(-1, [1, 2, 3].indexOf(0));
        });
    });

    describe('filters', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal(-1, [1, 2, 3].indexOf(0));
        });
    });
});