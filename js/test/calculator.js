var assert = require('chai').assert;
var calculator = require('../lib/calculator');

describe('The one and only integer calculator', function () {
    describe('Addition', function () {

        /**
         * First test: the degenerate case
         * It forces us to make a decision about what to call the first function and what the interface will look like.
         * In addition, it also forces the creation of the boiler plate code, like require and module.exports in this
         * case.
         */
        it('Adding 0 and 0 gives 0', function () {
            assert.equal(calculator.add(0, 0), 0);
        });

        /**
         * Second test: a happy path case
         * This test would result in some actual functionality in the implemented function. It obviously doesn't
         * provide any new information about the interface.
         */
        it('Adding 2 and 3 gives 5', function () {
            assert.equal(calculator.add(2, 3), 5);
        });

        /**
         * Fourth test: learn something new or explore variations
         * Let's explore the variation of allowing a variable number of arguments to add().
         */
        it('Adding multiple numbers together is allowed', function () {
            assert.equal(calculator.add(1, 2, 3, 4, 10), 20);
        });
    });

    describe('Subtraction', function () {
        /**
         * Third test: learn something new or explore variations
         * This will be very context dependent. For a simple integer calculator it could be about implementing
         * subtraction or multiplication, or negative numbers. Had the example included parsing, there would
         * be some learning and variation there.
         */
        it('Subtracting 5 from 10 gives 5', function () {
            assert.equal(calculator.subtract(5, 10), 5);
        });

    });
});