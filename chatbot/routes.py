from flask import Flask, render_template, jsonify, request
from flask_cors import cross_origin
import os
import chatbot

app = Flask(__name__)

os.system('python chatbot.py')

@app.route("/api/chatbot")
# function for the bot response
@cross_origin()
def get_bot_response():
    userText = request.args.get('msg')
    intents = chatbot.pred_class(userText, chatbot.words, chatbot.classes)
    result = chatbot.get_response(intents, chatbot.data)
    return result


if __name__ == '__main__':
    app.run(debug=True)
