function getData(fileName, type) {
  return new Promise(function(resolve, reject){
    fs.readFile(fileName, type, (err, data) => {
        if (err) { reject(err); }
        resolve(data);
    })
  });
}
getData('sample.txt', 'sample').then((data) => {
  console.log(data);
});