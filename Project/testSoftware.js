const Restaurant = require("./Restaurant");
const House = require("./House");
const Members = require("./Members");



r1 = new Restaurant("R1", "detroit", 50, 20);
// r1.showRestaurantDetails();
// r1.open();
// r1.removeGuest(10);
// r1.addGuest(15);
// r1.showRestaurantDetails();
// r1.clean();
// r1.showCurrentGuestCount();
// r1.showRestaurantDetails();
r1.removeEmployee(3);
r1.addEmployee(8);
r1.showTotalEmployees();
r1.showRestaurantDetails();


//  try {
   

//     r1.showRestaurantDetails();
    
//  } catch (e) {
//     console.log("Nope.");
// }

/** 
r1.close();
r1.open();
r1.showRestaurantDetails();
r1.close();
r1.showRestaurantDetails();
r1.removeEmployee(1);
r1.showRestaurantDetails();
r1.guestSittingNow(10);
r1.showCurrentGuestCount();
r1.guestSittingNow(-1);
*/
const h2 = new House("Mark", "saaa", 1);

// h2.unlock()
// // h2.lock();
// h2.clean()
// h2.showHouseDetails();

h2.addHouseMembers(100);
h2.showTotalMembers();

// // h2.removeHouseMember(20);
// // h2.showTotalMembers();

 h2.showHouseDetails();

