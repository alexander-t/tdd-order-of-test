var chai = require('chai');
var assert = require('chai').assert;
var validator = require('../lib/validator');

/**
 * This example is interesting because it isn't a perfect fit with the standard template because of
 * its repetitive nature. It also includes a lot of negative tests, which are important for illustrating
 * failed validations.
 */
describe('A fairly generic, but unforgiving, validator', function () {
    describe('Valid examples', function () {
        /**
         * First test: the degenerate case/happy path
         * In this case it's hard to provide a school book example of a degenerate case, because that test
         * would fail once a happy path test would be added, i.e., we can't provide a nonsense year or
         * empty name fields. Therefore we settle for the happy path.
         */
        it('A person with a name and a recent year of birth is valid', function () {
            assert.isTrue(validator.isValid({yearOfBirth: 2000, firstName: 'John', lastName: 'Doe'}));
        });
    });

    describe('Parameters', function () {

        /**
         * Second test: learn something new or explore variations
         * Since invalid values are important for a validator, we want to try one of them.
         */
        it('Persons with no first names fail validation', function () {
            assert.isFalse(validator.isValid({yearOfBirth: 2000, firstName: '', lastName: 'Doe'}));
        });

        /**
         * Third test: learn something new or explore variations
         * Ok, the rules are trivial, but let's try something numeric
         */
        it('Years of birth before 1900 are considered invalid', function () {
            assert.isFalse(validator.isValid({yearOfBirth: 1899, firstName: 'John', lastName: 'Doe'}));
        });
    });

    describe('Invalid parameters', function () {

        /**
         * Fourth test: error handling
         * How do we handle invalid input objects?
         */
        it('First names are mandatory', function () {
            chai.expect(function () {
                validator.isValid({dob: 2000, lastName: 'Doe'})
            }).to.throw("First name is mandatory");
        });

    });
});