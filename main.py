from flask import Flask, render_template_string
from random import choice
import os

app = Flask(__name__)

@app.route('/')
def main():
    main_path = './static/'
    files = os.listdir(main_path)
    im = main_path + choice(files)
    return render_template_string(f'<img src="{im}">')

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=3000)
