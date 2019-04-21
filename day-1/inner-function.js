// constructor function returns a new object
function User(name) {

    // the object method is created as a nested function
    this.sayHi = function() {
      console.log(name);
    };
  }
  
  let user = new User("John");
  user.sayHi();