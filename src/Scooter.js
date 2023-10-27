class Scooter{
  // scooter code here
static nextSerial = 1

  constructor(station){
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial;
    this.charge = 100;
    this.isBroken = true;
  }



  rent(user){
    this.setCharge(this.charge)
    if(this.charge > 20 && this.isBroken === false){
     this.station = null;
     this.user = user 
     console.log(`${user} has rented ${this.serial} scooter`);
    } else if (this.isBroken && this.charge < 20){
      throw new Error('Scooter needs to recharge and repair')
    } else if (this.isBroken){
      throw new Error('Scooter is broken and needs to be repaired')
    } else if(this.charge < 20){
      throw new Error('Scooter needs to recharge');
    }
  }

  dock(station){
    this.user = null;
    this.station = station
    console.log(`Scooter has been docked at ${station}`);
    console.log(`${this.user}`)
  }


  recharge() {
    const interval = 1000

    const rechargeInterval = setInterval(() => {
      if (this.charge < 100) {
        this.charge += 5;
        console.log(`Charge increased to ${this.charge}%`)
      } else {
        clearInterval(rechargeInterval); 
        console.log("Scooter fully charged.")
      }
    }, interval)
  }

requestRepair(){
  console.log('repairing')
  if (this.isBroken === true){
    setTimeout(function () {
      console.log("Fixed!");
    }, 5000);
  }
}
}


let scooter1 = new Scooter

// scooter1.charge = 15;
// scooter1.recharge()


module.exports = Scooter
