console.log("Hello I am not inside the timeout!");

//* This will execute after specific time for single time
setTimeout(function () {
  //? this code will be executed after 5 seconds
  console.log("I am executed after the 5 second!");
}, 5000);

//! This will use for stop the execution of the TimeOut
clearTimeout(setTimeout);

//* This will execute every time after the 2 second for infinite times
setInterval(function (params) {
  console.log("I am inside the interval!");
}, 2000);

//! This will use for stop the execution of the Interval
clearInterval(setInterval);
