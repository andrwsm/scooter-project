const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp extends Scooter{
  // ScooterApp code here
  constructor(serial){
    super(serial);
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
 console.log(this.registeredUsers[username]);
} else {
  throw new Error('User is too young')
} 
}

loginUser(username, password){
  const user = this.registeredUsers[username]

  if (user){
    if (user.password === password){
      const user1 = new User(username, password)
      user1.login(password)
      // Took me a long time to work out how to call this function
    }else{
      throw new Error('Incorrect password or username')
    }
  } else {
    throw new Error('Incorrect username or password')
  }
}

logoutUser(username){
  const user = this.registeredUsers[username]
  if (user){
    const user1 = new User(username);
    user1.logout();
    console.log(`${username} logged out`)
  }
}

createScooter(station){
   if (!(station in this.stations)){
    throw new Error("Station doesn't exist")
   }
   var scooter = {
    id: this.serial,
    station: station
   }
   this.stations[station].push(scooter)
   console.log(`Scooter ${scooter.id} deployed at ${station}`)
   this.serial++
   return scooter
}
//Not sure if createScooter() is correct


dockScooter(scooter, station){
   if (!(station in this.stations)){
    throw new Error("Station doesn't exist")
   }
   
  // I couldn't work out how to check the serial number of the scooter against those already docked
  // Think it might be because I haven't actually assigned the number to the scooter but instead have just logged the number

   this.stations[station].push(scooter);
   console.log(`Scooter ${scooter} docked at ${station}`)
}

}



let scooterApp1 = new ScooterApp

scooterApp1.registerUser('john1', 'j123', 20)
scooterApp1.registerUser('Bill5', 'bh123', 32)

scooterApp1.loginUser('john1', 'j123')

scooterApp1.logoutUser('Bill5')
scooterApp1.createScooter('Manors')
scooterApp1.createScooter('Monument')
scooterApp1.createScooter('Monument')
scooterApp1.createScooter('Manors')


module.exports = ScooterApp
