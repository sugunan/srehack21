import numpy as np
import pandas as pd

from sklearn.feature_extraction.text import CountVectorizer, TfidfTransformer
from sklearn.linear_model import SGDClassifier
from sklearn.model_selection import GridSearchCV
from sklearn.pipeline import Pipeline

emails = pd.read_csv('dataSet.csv')
em = emails.dropna(axis=0)

categories = ['SR', 'Incident']

pipeline = Pipeline([
    ('vect', CountVectorizer()),
    ('tfidf', TfidfTransformer()),
    ('clf', SGDClassifier()),
]);

parameters = {
    'vect__max_df': (0.5, 1.0),
    'vect__max_features': (None, 1000, 5000),
    'vect__ngram_range': ((1, 1), (1, 2)),
    'tfidf__use_idf': (True, False),
    'tfidf__norm': ('l1', 'l2'),
    'clf__alpha': (0.1, 0.01, 0.001),
    'clf__penalty': ('l2', 'elasticnet'),
}

grid_search = GridSearchCV(pipeline, parameters, n_jobs=-1, verbose=1, refit=True)
grid_search.fit(np.array(em['Subject']), np.array(em['Category']))
best_parameters = grid_search.best_estimator_.get_params()

input_test = input("Please enter the new content here: ")

if input_test :
    test_set = [input_test]
    print("Prediction:", *grid_search.best_estimator_.predict(np.array(test_set)))

