class Members {
  static memberType = "";
  membersInfo = {
    Name: "",
    City: "",
    CurrentStatus: false,
    TotalMembers: 0,
  };

  clean() {
    console.log("Area is clean now");
  }

  addMembers(x, memberType) {
    if (x < 1) {
      console.log(`Please input atleast 1 ${memberType}!`);
    } else if (typeof x !== "number") {
      console.log("Please make sure to input a NUMBER");
    } else {
      this.membersInfo.TotalMembers += x;
      console.log(`\nSuccessfully added ${x} ${memberType}(s)`);
    }
  }

  removeMembers(y, memberType) {
    if (y < 1) {
      console.log(`Please input atleast 1 ${memberType}!`);
    } else if (y > this.membersInfo.TotalMembers) {
      console.log(
        `There are less ${memberType}s than the number of ${memberType}s you want to remove!`
      );
    } else if (typeof y !== "number") {
      console.log("Please make sure to input a NUMBER");
    } else {
      this.membersInfo.TotalMembers -= y;
      console.log(`\nSuccessfully removed ${y} ${memberType}(s)`);
      console.log(`Total ${memberType}(s): ${this.membersInfo.TotalMembers}`);
    }
  }
}
module.exports = Members;
