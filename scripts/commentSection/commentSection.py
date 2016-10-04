#!/usr/bin/python

import cgi,cgitb,time,MySQLdb, subprocess
cgitb.enable()
print "Content-type:text/html\r\n\r\n"

form = cgi.FieldStorage() 
#_status = False

_firstName=form.getvalue('_firstName')
_lastName=form.getvalue('_lastName')
_email = form.getvalue('_email')
_title = form.getvalue('_title')
_comments  = form.getvalue('_comments')
date = time.ctime();

db = MySQLdb.connect("localhost","root","qwe33162yuiF+++!!!123mysql","testdb" )

cursor = db.cursor()

#cursor.execute("DROP TABLES IF EXISTS COMMENTS;")

sql = """CREATE TABLE COMMENTS(ID INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(ID), DATE CHAR(24), FIRST VARCHAR(100), LAST VARCHAR(100), EMAIL VARCHAR(100), TITLE VARCHAR(100), COMMENTS VARCHAR(1000) NOT NULL);"""

try:
        cursor.execute(sql)
        db.commit()
#	_status = True
except:
        db.rollback

sql = ("""INSERT INTO COMMENTS(DATE, FIRST, LAST, EMAIL, TITLE, COMMENTS) VALUES('%s','%s','%s','%s','%s', '%s');""")%(date, _firstName, _lastName, _email, _title, _comments)

try:
        cursor.execute(sql)
        db.commit()
#	_status = True
except:
        db.rollback

db.close()

print("""<meta http-equiv="refresh" content="0; url=/myWeb/posts/jnfklwnfjpsadokhiusdgksiarisaoiDJIUHFPOJOISJFOIJOASjdio/ahjsdfiAIHIUadiuAHSFBIUWEQNBUYASgdgausbD/pending.php">""")
