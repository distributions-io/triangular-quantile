options( digits = 16 )
library( jsonlite )
library( triangle )


a = -3
b = 3
c = 0.1
probs = seq( 0, 1, 0.01 )
y = qtriangle( probs, a, b, c )

cat( y, sep = ",\n" )

data = list(
	a = a,
	b = b,
	c = c,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/deepset.json" )
