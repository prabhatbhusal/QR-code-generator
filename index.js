import inquirer from "inquirer";
import qr from 'qr-image';
import fs from 'fs'

inquirer
  .prompt([
    {"message":"type the url",
      "name":"url"
    }
  ])
  .then((answers) => {
    const urls=answers.url 
    var qr_png = qr.image(urls);
    qr_png.pipe(fs.createWriteStream("qr_img.png"));
    

    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

