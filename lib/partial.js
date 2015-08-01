'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( a, b, c )
*	Partially applies lower limit `a` and upper limit `b` and mode `c` and returns a function for evaluating the quantile function for a Triangular distribution.
*
* @param {Number} a - lower limit
* @param {Number} b - upper limit
* @param {Number} c - mode
* @returns {Function} quantile function
*/
function partial( a, b, c ) {

	/**
	* FUNCTION: quantile( p )
	*	Evaluates the quantile function for a Triangular distribution.
	*
	* @private
	* @param {Number} p - input value
	* @returns {Number} evaluated quantile function
	*/
	return function quantile( p ) {
		if ( p !== p || p < 0 || p > 1 ) {
			return NaN;
		}
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
