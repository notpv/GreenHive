from flask import Flask,render_template,request

app = Flask(__name__)

@app.route("/", methods = ['GET'])
def Home():
    return render_template("index.html")
@app.route("/login", methods = ['GET','POST'])
def login():
    database = {"pv":"123","rs":"456","rt":"789"}

    if request.method == "POST":
        
        username = request.form["username"]
        pwd = request.form["pwd"]
        
        if username in database.keys() and pwd in database.values():
            return render_template("home.html",html_var = username)
        elif username not in database.keys():
            return render_template("index.html",info="Invalid Username!")
        else:
            return render_template("index.html",info="Invalid Password!")


@app.route('/register', methods=['GET', 'POST'])
def register():
    error = None
    if request.method == 'POST':
        username = request.form['username']
        pwd = request.form['pwd']
        confirm_password = request.form['confirm-pwd']
        if len(username) < 4:
            error = 'Username must be at least 4 characters long.'
        elif password != confirm_password:
            error = 'Passwords do not match.'
        elif username in users:
            error = 'Username already exists.'
        if not error:
            # Securely hash password before storing
            hashed_password = generate_password_hash(password)
            database[username] = hashed_password  # Update sample database (replace with actual storage)
            return render_template('registered.html', username=username)
    return render_template('register.html', error=error)


@app.route('/feed',methods=['GET','PUT'])
def feed():
    error = None
    
    return render_template('feed.html', error=error)

@app.route('/search',methods=['GET','POST'])
def search():
    error = None
    return render_template('search.html', error=error)

@app.route('/loginback',methods=['GET','POST'])
def loginback():
    error = None
    return render_template('index.html', error=error)

@app.route('/homeback',methods=['GET','POST'])
def homeback():
    error = None
    return render_template('home.html', error=error)

if __name__ == "__main__":
    app.run(debug= True)
