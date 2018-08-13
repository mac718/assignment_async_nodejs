var fs = require('file-system');

var fsp = {

  readFile: (file) => {
    return new Promise((resolve, reject) => {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) throw err;
        resolve(data);
      });
    })
  },

  writeFile: (file, content) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(file, content, 'utf8', (err) => {
        if (err) throw err;
        resolve(content);
      });
    })
  },

  appendFile: (file, content) => {
    return new Promise((resolve, reject) => {
      fs.appendFile(file, content, 'utf8', (err) => {
        if (err) throw err;
      });
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
      })
    })
  }
};

module.exports = fsp;