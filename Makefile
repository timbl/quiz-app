# Make a js version of the form

quiz-form.js :  quiz-form.ttl
	echo "exports = \`" >  quiz-form.js
	cat quiz-form.ttl >> quiz-form.js
	echo "\` // ends " >> quiz-form.js
