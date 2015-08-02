options( digits = 16 )
library( jsonlite )
library( triangle )

a = 0
b = 1
c = 0.5
probs = 0:24 / 25
y = qtriangle( probs, a, b, c )

cat( y, sep = ",\n" )

data = list(
	a = a,
	b = b,
	c = c,
	data = probs,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
