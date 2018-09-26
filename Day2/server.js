var express = require('express');

var app = express();
app.listen(4000);
app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/node_modules'));

let dogData = [
      { name: "Labrador", age:4, link: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231410/Labrador-Retriever-On-White-01.jpg" },
      { name: "Bulldog", age:10, link:"https://i.ebayimg.com/00/s/MTA3Nlg4NzQ=/z/9aoAAOSwn9VaVRLD/$_1.JPG" },
      { name: "Beagle", age:7, link:"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001000/Beagle-On-White-01.jpg"  },
      { name: "Rottweiler",  age:8, link:"http://healthypets.royalcanin.com.au/assets/Uploads/_resampled/ScaleWidthWyI2MDAiXQ/rottweiler-getting-to-know2.jpg"  },
    ]
  ;
  
 
app.get("/dog",
function(request, response) {
      response.send(dogData);
    });