function f() {
    let value = Math.random();
  
    function g() {
debugger;
    }
  
    return g;
  }
  
  let g = f();
  g();