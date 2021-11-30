from random import random
import type_model
import priority_model
import json
import os
from flask import request
from flask import Flask
from flask_cors import CORS,cross_origin


app = Flask(__name__)
CORS(app,resourcess={r"/api/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/', methods=['GET','POST'])
@cross_origin()
def home():
    return "<h1>Welcome To the Requests/Issues Classifier</h1><h5>View Documentation For Use The Email Classifier</h5>"


@app.route('/classify', methods=['POST'])
@cross_origin()
def classification():
    type_sentiment = type_model.classify(request.form['content'])
    priority_sentiment = priority_model.classify(request.form['content'])
    result = {}
    for i in priority_sentiment:
        result[i[0]] = i[1][0]
    for i in type_sentiment:
        result[i[0]] = i[1][0]
    return result



