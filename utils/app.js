const fs = require('fs');

const writeFile = newHtml => {
   
  return new Promise ((resolve, reject) => {
      
      fs.writeFile('./dist/index.html', newHtml, err => {
          if(err) {
              reject(err);
              return;
          }
          resolve({
              ok:true,
              message: 'index.html ready!'
          });
      });
  });
  }

  module.exports = { writeFile };
  
  

 

