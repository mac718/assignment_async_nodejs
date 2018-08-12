var promises = {
  hello: new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("Hello Promises!");
    }, 1000)
  }),

  delay: (milliseconds) => {
    return new Promise((resolve, reject) => {
      setTimeout(function(){
        resolve(milliseconds);
      }, milliseconds)
    })
  },

  countDown: (result) => {
    if (result === 0) {
      console.log('Done!')
      return;
    }

    console.log(result);
    return promises.delay(result-100);
  },

  square: (num) => {
    return new Promise((resolve, reject) => {
      if (typeof(num) == 'number') {
        resolve(num * num);
      } else {
        resolve('Not a Number');
      };
    })
  },

  doBadThings: (forRealz) => {
    return new Promise((resolve, reject) => {
      if (forRealz) {
        reject('Nope!');
      } else {
        resolve('Yay!');
      };
    });
  }
}

module.exports = promises;