# Make a js version of the form

bundle.js :  quiz-form.js main.js
	cat quiz-form.js main.js > bundle.js

quiz-form.js :  quiz-form.ttl
	echo "const formText = \`" >  quiz-form.js
	cat quiz-form.ttl >> quiz-form.js
	echo "\` // ends " >> quiz-form.js
