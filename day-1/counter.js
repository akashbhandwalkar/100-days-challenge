function makeCounter() {
    let count = 0;
  
    return function() {
      return count++; // has access to the outer counter
    };
  }
  
  let counter = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  console.log( counter() ); // 2