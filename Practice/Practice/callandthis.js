function setUsername(username){
    this.username = username
    console.log("called");
}

function createUser(username, email, password) {
    setUsername.call(this, username)
    setUsername(username)
    this.email = email
    this.password = password
}

const result = new createUser("user1", "user1@gmail.com", "abc");
console.log(result);
// So setUsername.call(this, username) means: “Call setUsername, but make sure it sets this.username on the same object that createUser is constructing.”