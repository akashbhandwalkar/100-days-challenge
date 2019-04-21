function makeWorker() {
    var name = "Pete";
  
    return function() {
      console.log(name);
    };
  }
  
  var name = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work();