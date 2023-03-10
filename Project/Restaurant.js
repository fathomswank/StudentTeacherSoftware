const Members = require("./Members");



class Restaurant extends Members {
  static RestaurantIdCounter = 0;

  restaurantInfo = {
    rName: "",
    rCity: "",
    rCurrentStatus: false,
    rGuestsSittingNow: 0,
    rMaxGuestCapacity: 0,
    restaurantId: 0,
  };

  constructor(restaurantName, cityName, maxGuestCapacity, totalEmployees) {
    super();
    if (restaurantName.length <= 1) {
      console.log(' Requires more than one letter.');
      throw "Invalid name.";
    } else if (cityName.length <= 1) {
      console.log(' Requires more than one letter.');
      throw "Invalid city name.";
    } else if (maxGuestCapacity < 1) {
      console.log('Please add your guest capacity.');
      throw "Minimum 1 guest.";
    } else if (totalEmployees < 1) {
      console.log('Please add the total employees at the restaurant.');
      throw "Minimum 1";
    } else if(typeof restaurantName !== 'string' || typeof cityName !== 'string' || typeof maxGuestCapacity !== 'number' || typeof totalEmployees !== 'number') {
      console.log('Please enter a valid name or valid number when signing up.');
      throw 'Please enter a valid character.'
    } else if (restaurantName === '' || cityName === '' || maxGuestCapacity === '' || typeof totalEmployees !== 'number'){
      console.log('Please enter the atleast one character during sign up.');
      throw 'Enter characters';
    } else {
      this.restaurantInfo.rName = restaurantName;
      this.restaurantInfo.rCity = cityName;
      this.restaurantInfo.rMaxGuestCapacity = maxGuestCapacity;
      this.membersInfo.TotalMembers = totalEmployees;
      this.restaurantInfo.restaurantId = ++Restaurant.RestaurantIdCounter;
      console.log(`\nThank you for registering! ${this.restaurantInfo.rName} is now signed up.`);
      console.log(
        `This is your restaurant ID : ${this.restaurantInfo.restaurantId}\n`
      );
    }
  }

  open() {
    if (this.restaurantInfo.rCurrentStatus === true) {
      console.log("\nRestaurant is already open.");
    } else {
      this.restaurantInfo.rCurrentStatus = true;
      console.log("\nThe Restaurant is now open.");
    }
  }

  close() {
    if (this.restaurantInfo.rCurrentStatus === false) {
      console.log("\nRestaurant is already closed.");
    } else {
      this.restaurantInfo.rCurrentStatus = false;
      console.log("\nThe Restaurant is now closed.");
    }
  }

  clean() {
    console.log("Restaurant area is now clean.");
    super.clean();
  }

  guestSittingNow(guestSit) {
    if (guestSit < 1) {
      console.log('Please add atleast one guest!');
    } else if (guestSit > this.restaurantInfo.rMaxGuestCapacity) {
      console.log(`Maximum capacity met! Your capacity is ${this.restaurantInfo.rMaxGuestCapacity}, please add fewer guests. `);
    } else {
     this.restaurantInfo.rGuestsSittingNow = guestSit;
    }
    console.log(`You have ${this.restaurantInfo.rMaxGuestCapacity - this.restaurantInfo.rGuestsSittingNow} seats remaining for guests.`)
  }

  

  addGuest(guest){
     let remainingSeats = this.restaurantInfo.rMaxGuestCapacity - this.restaurantInfo.rGuestsSittingNow;

    if(guest < 1){
      console.log('Please add atleast one guest!.');
    } else if(remainingSeats < guest){
      console.log(`There aren't enough seats to fit added guests.`);
    } else if(typeof guest !== 'number'){
      console.log('Please enter the number of guests you want to add.');
    } else {
      this.restaurantInfo.rGuestsSittingNow += guest;
      console.log(`Guests have been succesfully added! Added Guests : ${guest}`);
    }
  }

  removeGuest(guest){
    let remainingSeats = this.restaurantInfo.rMaxGuestCapacity - this.restaurantInfo.rGuestsSittingNow;
      if(guest < 1){
      console.log('Please add atleast one guest!.')
    } else if(remainingSeats < guest){
      console.log(`Error. The amount of guests being removed exceeds the number of seats reserved.`);
    } else if(typeof guest !== 'number'){
      console.log('Please enter the number of guests you want to add.');
    } else {
      this.restaurantInfo.rGuestsSittingNow -= guest;
      console.log(`Guests have been succesfully removed! Removed Guests : ${guest}`);
    }
  }
  showCurrentGuestCount() {
    console.log(`\nCurrent Guest Count: ${this.restaurantInfo.rGuestsSittingNow}`);
  }
  addEmployee(numEmpToAdd) {
    this.addMembers(numEmpToAdd, 'employee');
  }

  removeEmployee(numEmpToRemove) {
    this.removeMembers(numEmpToRemove, 'employee');
  }

  showTotalEmployees() {
      console.log(`Total Employees: ${this.membersInfo.TotalMembers}`);
    }

  showRestaurantDetails() {
    console.log(`\nRestaurant Details\n`);
    console.log(`Name : ${this.restaurantInfo.rName}`);
    console.log(`City : ${this.restaurantInfo.rCity}`);
    console.log(`Guests sitting now : ${this.restaurantInfo.rGuestsSittingNow}`);
    console.log(`Max Guest : ${this.restaurantInfo.rMaxGuestCapacity}`);
    console.log(`Total Employees: ${this.membersInfo.TotalMembers}`);
    console.log(`Restaurant Id : ${this.restaurantInfo.restaurantId}`);
    console.log(`Current Status (open/closed) : ${this.restaurantInfo.rCurrentStatus}`);
  }
  }
module.exports = Restaurant;
