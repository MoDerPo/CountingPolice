import json
with open('properties.json') as f:
	data = json.load(f)
print(data['status'])
