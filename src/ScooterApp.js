const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp{
  // ScooterApp code here
  constructor(stations, registeredUsers){
    this.stations = {
      Manors: [],
      Haymarket: [],
      Monument: [],
      Byker: [],
      Central: []
    };

    this.registeredUsers = {}
  }

registerUser(username, password, age){
  if(this.registeredUsers[username]){
    throw new Error('User is already registered')
  }

  if (age >= 18){
    this.registeredUsers[username] = {
      username,
      password,
      age
  };
  console.log(`${username} registered`);
 console.log(this.registeredUsers[username])
} else {
  throw new Error('User is too young')
} 
}

loginUser(username, password){
  const user = this.registeredUsers[username]

  if (user){
    if (user.password === password){
      User.user.login(password)
    }else{
      throw new Error('Incorrect password or username')
    }
  } else {
    throw new Error('Incorrect username or password')
  }
}

}



let scooterApp1 = new ScooterApp

scooterApp1.registerUser('john1', 'j123', 20)

scooterApp1.loginUser('john1', 'j123')




module.exports = ScooterApp
