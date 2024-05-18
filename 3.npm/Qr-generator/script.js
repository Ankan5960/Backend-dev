import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {"message":"Enter the url: ",
    "name":"url"}
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers.url);
    var qr_png=qr.image(answers.url);
    qr_png.pipe(fs.WriteStream('Qr-generator/qr.png'));

    fs.writeFile('Qr-generator/url.text',answers.url,(err)=>{
        if(err) throw err;
        console.log('file is saved');
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
     
    } else {
    
    }
  });