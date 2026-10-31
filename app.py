from flask import Flask , render_template

app = Flask(__name__)

@app.route("/")
def index():
    return "main page"

@app.route("/study/<string:subject>/<string:topic>/<int:questionNumber>")
def study(subject,topic,questionNumber):
    return render_template("index.html" , subject=subject, topic=topic, questionNumber=questionNumber)


if __name__ == "__main__":
    app.run(debug=True)