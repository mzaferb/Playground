import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type the URL you want to convert to QR Code.",
      name: "URL",
    },
  ])
  .then((answers) => {
      var qr_svg = qr.image(answers.URL);
      qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", answers.URL, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
      });
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });