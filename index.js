var promises = require('./lib/promises');

// promises.hello.then(function(result){
//   console.log(result);
// });

// promises.delay(1000)
//   .then(promises.countDown) //=> 1000
//   .then(promises.countDown) //=> 900
//   .then(promises.countDown) //=> 800
//   .then(promises.countDown) //=> 700
//   .then(promises.countDown) //=> 600
//   .then(promises.countDown) //=> 500
//   .then(promises.countDown) //=> 400
//   .then(promises.countDown) //=> 300
//   .then(promises.countDown) //=> 200
//   .then(promises.countDown) //=> 100
//   .then(promises.countDown); //=> Done!

// let arr = [1, 2, 3, 4];

// arr = arr.map((elem) => {
//   return promises.square(elem);
// });

// Promise.all(arr).then((result) => {
//   console.log(result);
// });

// promises.doBadThings(true).then((result) => {
//   console.log(result)
//   throw "D'oh!";
// }).catch((err) => {
//   console.error(err);
// });

promises.doBadThings(false).then((result) => {
  console.log(result)
}, (err) => {
  console.error(err);
});