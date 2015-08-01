'use strict';

// FUNCTIONS //


// QUANTILE //

/**
* FUNCTION: quantile( p, a, b, c )
*	Evaluates the quantile function for a Triangular distribution with lower limit `a` and upper limit `b` and mode `c` at a probability `p`.
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
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
