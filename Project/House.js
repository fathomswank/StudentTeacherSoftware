const Members = require("./Members");

class House extends Members {
  static houseIdCounter = 0;

  houseInfo = {
    Name: "-",
    HouseId: 0,
    City: "-",
    CurrentStatus: false, // locked/ unlocked (true/false)
  };

  constructor(Name, cityName, houseMembers) {
    super();  
    if (Name.length <= 1) {
      console.log(`\nPlease enter a name with more than one letter.`);
      throw 'Enter atleast 2 letters.'
    } else if (cityName.length <= 1) {
      console.log(`\nPlease enter your city and include more than one letter.`);
      throw 'Enter atleast 2 letters.'
    } else if (houseMembers < 1) {
      console.log(`\nPlease enter atleast one member in the household.`);
      throw 'Enter atleast 1 member of household.'
    } else if(typeof Name !== 'string' || typeof cityName !== 'string' || typeof houseMembers !== 'number' ) {
      console.log('Please enter a valid name or valid number when signing up')
      throw 'Please enter valid characters.'
    } else if (Name === '' || cityName === '' || houseMembers === ''){
      console.log('Please enter the atleast one character during sign up.');
      throw 'Enter characters';
    } else {
      this.houseInfo.City = cityName;
      this.membersInfo.TotalMembers = houseMembers;
      this.houseInfo.Name = Name;
      this.houseInfo.HouseId = ++House.houseIdCounter;
      console.log(`\nSuccessful Registration! Your new house ID is :${this.houseInfo.HouseId}`);
    }
  }

  lock() {
    if (this.houseInfo.CurrentStatus === false) {
      console.log("House is already locked.");
    } else if (this.houseInfo.CurrentStatus === true) {
      this.houseInfo.CurrentStatus = false;
      console.log("House is now locked.");
    }
  }

  unlock() {
    if (this.houseInfo.CurrentStatus === true) {
      console.log("House is already unlocked.");
    } else if (this.houseInfo.CurrentStatus === false) {
      this.houseInfo.CurrentStatus = true;
      console.log("The house is now unlocked.");
    }
  }

  clean() {
    super.clean();
  }

  showTotalMembers() {
    if(this.membersInfo.TotalMembers < 1){
      console.log('You currectly dont have any members added. Please add household members to view.');
    } else {
      console.log(`Total Members: ${this.membersInfo.TotalMembers}`);
    }
  }

  showHouseDetails() {
    console.log(`House Details:\n`);
    console.log(`Name : ${this.houseInfo.Name}`);
    console.log(`City : ${this.houseInfo.City}`);
    console.log(`Current Status(locked/unlocked) : ${this.houseInfo.CurrentStatus}`);
    console.log(`Total House Members: ${this.membersInfo.TotalMembers}`);
    console.log(`House ID : ${this.houseInfo.HouseId}`);
  }
  addHouseMembers(numMemToAdd) {
    this.addMembers(numMemToAdd, 'member');
  }

  removeHouseMember(numMemToRemove) {
    this.removeMembers(numMemToRemove, "member");
  }

  showTotalHouseMembers() {
    console.log(`Total House Members: ${this.membersInfo.TotalMembers}`);
  }
}
module.exports = House;
