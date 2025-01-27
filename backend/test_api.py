import requests

response = requests.post(
    "http://localhost:5000/analyze",
    json={"text": "Hello", "section": "Part 1"}
)
print(response.json())