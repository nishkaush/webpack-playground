const fs = require("fs");
const archiver = require("archiver");

const output = fs.createWriteStream(__dirname + "/dist.zip");
const archive = archiver("zip", {
  zlib: { level: 9 } // Sets the compression level.
});

archive.pipe(output);

archive.directory("dist/", false);

archive.finalize();
