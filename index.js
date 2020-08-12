const moment = require("moment");
const cooli = require("cool-images");
const filesystem = require("fs");

writeLog(moment().format('MMMM Do YYYY, h:mm:ss a') + "\n");
const images = cooli.many(500, 500, 10);
 images.forEach(imageurl => {
     writeLog(imageurl + "\n")
 });

 function writeLog(registro) {
    filesystem.appendFile('log.txt', registro, err => {
      if (err) {
        console.log(err);
      } else {
        console.log('success:');
      }
    })
  }
  