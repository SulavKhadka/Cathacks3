# Builtin imports
import logging
import time
# External imports
from flask import Flask, render_template
from flask_ask import Ask, statement, question, session
import spacy

# Third party imports
import CHWolframClient as wr


app = Flask(__name__)
ask = Ask(app, "/")
'''
print "Loading spacy..."
time = time.time()
nlp = spacy.load('en')
total = time.time() - time
'''

logging.getLogger("flask_ask").setLevel(logging.DEBUG)


'''
def nlp_analysis(text):
	doc = nlp(text)
	for word in doc:
		print (word.tag_)
'''

@ask.launch
def hello():
	welcome_msg = render_template('welcome')
	return question(welcome_msg)


@ask.intent("UserResponseIntent", convert={'response': str})
def get_response(response):
	user_said = response
	#nlp_analysis(user_said)
	if "fact check" in user_said.lower():
		user_query = user_said.split("check")[1]
		answer = wr.wlfram_search(user_query, "PU229A-GXP2JWR9V5")
	return statement(answer)


if __name__ == '__main__':
	app.run(debug=True)