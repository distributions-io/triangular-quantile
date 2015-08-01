options( digits = 16 )
library( jsonlite )


a = 0
b = 1
c = 0.5
probs = c( 0, 0.25, 0.5, 0.75, 1 )
y = qtriangle( probs, a, b, c )

cat( y, sep = ",\n" )

data = list(
	a = a,
	b = b,
	c = c,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/number.json" )
