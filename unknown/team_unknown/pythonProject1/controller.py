class Hello(object):
    def __init__(self, mysql):
        self.cursor = mysql.connect.cursor()

    def all(self):
        self.cursor.execute("SELECT * FROM emaildetails")
        val = self.cursor.fetchall()
        return val
