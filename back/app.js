const express = require('express')
const app = express()

var cors = require('cors');
app.use(cors());

var fileupload = require("express-fileupload");
app.use(fileupload());

app.use(express.static('upload_img'));
app.use(express.static('upload_img_no_bg'));
app.use(express.static('upload_img_color'));



//const sent_to_api =  require('./send_to_api');

app.post('/upload_img', function (req, res) {

  
    let time=new Date().getTime();
    let fileName=time+"_"+req.files.UploadedFile.name;

    req.files.UploadedFile.mv(`${__dirname}/upload_img/${fileName}`, err => {

      if (err) {
        res.status(500).send(err);
      } 
      else {
       
        /*
          const inputPath = `${__dirname}/upload_img/${fileName}`;
          const fileNameDes=`${__dirname}/upload_img_no_bg/no_bg_${fileName}`;

          (async () => {
              await sent_to_api(inputPath , '' , fileNameDes );
              res.send(`${fileName}`);
          }) ();
          */
          
        res.send(fileName)
     
      }

    });

 
})

app.listen(5000)