#!/usr/bin/env python
# -*- coding: utf-8 -*-

import wolframalpha


def wlfram_search(user_query, API_KEY):
	try:
		client = wolframalpha.Client(API_KEY)
		res = client.query(user_query)
		if next(res.results).text != 'None':
			return next(res.results).text.encode('utf-8')
		else:
			return None
	except StopIteration:
		return None
	except AttributeError:
		return None


if __name__ == '__main__':
	API_KEY = "PU229A-GXP2JWR9V5"
	# API_KEY = raw_input("Please enter your wolframalpha api key:")
	q = raw_input("Enter a query: ")
	answer = wlfram_search(q,API_KEY)
	if answer:
		print (answer)
	else:
		print ("Couldn't Find an Answer")