'use strict';

// FUNCTIONS //

var sqrt = Math.sqrt;


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
	var pInflection = ( c - a ) / ( b - a ),
		fact1 = ( b - a ) * ( c - a),
		fact2 = ( b - a ) * ( b - c );
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
		if ( p  < pInflection ) {
			return a + sqrt( fact1 * p );
		}
		if ( p > pInflection ) {
			return b - sqrt( fact2 * ( 1 - p ) );
		}
		// Case: p = pInflection
		return c;
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
