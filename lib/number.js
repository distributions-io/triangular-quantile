'use strict';

// FUNCTIONS //

var sqrt = Math.sqrt;


// QUANTILE //

/**
* FUNCTION: quantile( p, a, b, c )
*	Evaluates the quantile function for a triangular distribution with lower limit `a` and upper limit `b` and mode `c` at a probability `p`.
*
* @param {Number} p - input value
* @param {Number} a - lower limit
* @param {Number} b - upper limit
* @param {Number} c - mode
* @returns {Number} evaluated quantile function
*/
function quantile( p, a, b, c ) {
	if ( p !== p || p < 0 || p > 1 ) {
		return NaN;
	}
	var pInflection = ( c - a ) / ( b - a ),
		fact1 = ( b - a ) * ( c - a),
		fact2 = ( b - a ) * ( b - c );

	if ( p  < pInflection ) {
		return a + sqrt( fact1 * p );
	}
	if ( p > pInflection ) {
		return b - sqrt( fact2 * ( 1 - p ) );
	}
	// Case: p = pInflection
	return c;
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
