const fs = require("fs");

// read Files
fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else console.log(data.toString());
});

// write Files
fs.writeFile("./docs/blog2.txt", "Hello world!", () => {
  console.log("file was written");
});

// direcories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) console.log(err);

    console.log("folder was created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) console.log(err);

    console.log("folder was removed");
  });
}

// delete files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) console.log(err);

    console.log("file deleted");
  });
}
