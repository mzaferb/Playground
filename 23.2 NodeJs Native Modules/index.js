const fs = require("fs");

fs.writeFile("./message.text", "Hello World NodeJs", (err) => {
    if (err) throw err;
    console.log("File created.");
});

fs.readFile("./message.text", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});