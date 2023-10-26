class User {
  // User code here
  constructor(username, password, age, loggedIn){
    this.username = username
    this.password = password
    this.age = age
    this.loggedIn = false
  }
  login(enteredPassword){
    if(enteredPassword === this.password){
      this.loggedIn = true
      console.log("user login successful")
    }else{
      throw new Error("Incorrect Password")
    }
  }

  logout() {
    this.loggedIn = false;
    console.log("Logged out successfully.");
  }
}

const u1 = new User("joe", "j123", 34)
u1.login("j123")
u1.logout()


module.exports = User
