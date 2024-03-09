from flask import Flask, Response, render_template
from datetime import datetime
import time

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('./index.html')

@app.route('/sse')
def synchronize_time():
    def generate():
        while True:
            time.sleep(1)  # Wait for 1 second
            yield 'data: {}\n\n'.format(datetime.utcnow().isoformat())

    return Response(generate(), content_type='text/event-stream', headers={'Cache-Control': 'no-cache', 'Connection': 'keep-alive'})

if __name__ == '__main__':
    app.run(debug=True, port=8080)