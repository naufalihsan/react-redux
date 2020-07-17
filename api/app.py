from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/')
def main():
    response = {
        'rates': [
            {
                'currency': 'USD',
                'buy': 14760,
                'sell': 14810,
            },
            {
                'currency': 'KRW',
                'buy': 11.60,
                'sell': 12.20,
            }
        ]
    }

    return jsonify(response)


if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000, debug=False)
