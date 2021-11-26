from flask import Flask, jsonify
from flask_mysqldb import MySQL
from controller import Hello
from imap_tools import MailBox
from imap_tools import AND, OR, NOT, A, H, U
import email 

imap_host = 'imap.gmail.com'
imap_user = 'athavantheivendram@gmail.com'
imap_pass = '|}{":?><athavan.T'

mailbox = MailBox(imap_host)
mailbox.login(imap_user, imap_pass, initial_folder='INBOX') 
subjects = [msg.subject for msg in mailbox.fetch()]
sender = [msg.from_ for msg in mailbox.fetch()]
uid = [msg.uid for msg in mailbox.fetch()]
body = [msg.obj for msg in mailbox.fetch()]


app = Flask(__name__)

app.config["MYSQL_HOST"] = "localhost"
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = ""
app.config["MYSQL_DB"] = "gmaildetails"
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
app.config['MYSQL_SOCKET'] = None

mysql = MySQL(app)


@app.route("/")
def values():
    data = Hello(mysql)
    value = data.all()

    if len(value):
        response = jsonify({
            "result": value,
            "status": 200,
        })
    else:
        response = jsonify({
            "result": [],
            "status": 400,
        })
    return response

@app.route("/mail")
def mails():
    return str(len(subjects))


@app.route("/details")
def body():
    details = {
        "uid":uid,
        "subject":subjects,
        "sender":sender,
        "body":body
    }
    return details


# @app.route('/inset', methods=['POST'])
# def enter():
#     cur = mysql.connection.cursor()
#     cur.execute("INSERT INTO emaildetails (body, catergory, id, mailid, parent, priority, received_timestamp, receiver_id,  resolution_time, resolution_timestamp, response_time, response_timestamp, sender_id, signature, status, subject, uid) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s,)",())
    

if __name__ == "__main__":
    app.run(debug=True)
