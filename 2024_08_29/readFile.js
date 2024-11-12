const fs = require('fs').promises;

// fs.readFile('./readme.txt', (err, data) => {
//     if(err) {
//         throw err;
//     }
//     console.log(data);
//     console.log(data.toString());


// })

// fs.writeFile('./test.txt', "Hello!")
//     .then(() => {
//         return fs.readFile('./test.txt');
//     })
//     .then((data) => {
//         console.log(data.toString());
//     });
//     .catch((err) => {
//         console.log(err)
//     })