import numpy as np
import pandas as pd

df = pd.read_csv('user_responses.csv')
X = df.iloc[:, :].values

weights = {
    'a': 1,  # Assuming the lowest energy efficiency for option 'a'
    'b': 2,
    'c': 3,
    'd': 4  # Assuming the highest energy efficiency for option 'd'
}

columns_mapping = {
    'Electricity Consumption': 'Electricity Consumption',
    'Transportation Mode': 'Transportation Mode',
    'Diet Percentage': 'Diet Percentage',
    'Food Travel Distance': 'Food Travel Distance',
    'Car Travel Frequency': 'Car Travel Frequency',
    'Flight Environmental Measures': 'Flight Environmental Measures',
    'Purchase Frequency': 'Purchase Frequency',
    'Plastic Reduction Steps': 'Plastic Reduction Steps',
    'Waste Composition': 'Waste Composition',
    'Packaging Waste Minimization': 'Packaging Waste Minimization'
}


df['Energy Efficiency Score'] = df.apply(lambda row: sum(weights[row[columns_mapping[column]]] for column in columns_mapping), axis=1)

Y = df['Energy Efficiency Score']

print(df[['Energy Efficiency Score']])

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder

X = pd.get_dummies(df, columns=['Electricity Consumption', 'Transportation Mode', 'Diet Percentage', 'Food Travel Distance', 'Car Travel Frequency', 'Flight Environmental Measures', 'Purchase Frequency', 'Plastic Reduction Steps', 'Waste Composition', 'Packaging Waste Minimization'])



X_train, X_test, y_train, y_test = train_test_split(X, Y, test_size=0.2, random_state=42)


from sklearn.ensemble import VotingClassifier
from sklearn.svm import SVC
from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split




classifier_svc = SVC(kernel='rbf')
classifier_rf = RandomForestClassifier(random_state=42)
classifier_dt = DecisionTreeClassifier(random_state=42)


voting_classifier = VotingClassifier(estimators=[
    ('svc', classifier_svc),
    ('rf', classifier_rf),
    ('dt', classifier_dt)
], voting='hard')  # 'hard' voting for majority rule


voting_classifier.fit(X_train, y_train)


y_pred_ensemble = voting_classifier.predict(X_test)


accuracy_ensemble = accuracy_score(y_test, y_pred_ensemble)
print(f'Ensemble Model Accuracy: {accuracy_ensemble:.2f}')


import pickle
pickle.dump(y_pred_ensemble, open('model.pkl','wb'))
model = pickle.load(open('model.pkl','rb'))
