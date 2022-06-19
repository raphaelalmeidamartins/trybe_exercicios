const { writeFileSync } = require('fs');

const writeFile = (fileName, fileContent) => {
  writeFileSync(fileName, fileContent);
  return 'ok';
};

module.exports = writeFile;
