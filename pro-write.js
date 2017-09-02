// readFileUsingPromises.js
var FS = require('fs'),
    Q = require('q');

Q.nfcall(FS.readFile, "sample.txt", "utf-8")
.then(function(data) {      
    console.log('File has been read:', data);
})
.fail(function(err) {
    console.error('Error received:', err);
})
.done();

var writeFile = function (data) {
    return new Promise(function (resolve, reject) {
        fs.appendFile('output.txt', data, 'utf8', function (err) {
            if (err) {
                resolve('Writing file error!');
            } else {
                reject('Writing file succeeded!');
            }
        });
    });
};
