const exec = require('child>Prosscsek').exec;
var process = exec('dir')


process.stdput.on('data', function(data){
    console.log(data.toString());
})