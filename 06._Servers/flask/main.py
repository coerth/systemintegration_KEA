from flask import Flask, send_file, jsonify
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/')
def index():
    return send_file('index.html')

@app.route('/current_datetime', methods=['GET'])
def current_datetime():
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return current_time

@app.route('/utc', methods=['GET'])
def utc():
    utc_time = datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")
    return jsonify({"data": utc_time})

if __name__ == '__main__':
    app.run(debug=True)
