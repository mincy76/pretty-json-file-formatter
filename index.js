const fs = require('fs').promises;
const path = require('path');
const beautify = require('json-beautify');

/**
 * Format JSON data in a file and write back to the same file.
 * @param {string} filePath - The path to the JSON file.
 * @returns {Promise<void>} - A Promise that resolves when formatting is done.
 */
const formatJsonFile = async (filePath) => {
  try {
    const rawData = await fs.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(rawData);
    const formattedData = beautify(jsonData, null, 2, 100);
    await fs.writeFile(filePath, formattedData, 'utf8');
    console.log(`File has been formatted successfully: ${filePath}`);
  } catch (error) {
    console.error('Error occurred while formatting the file:', error);
  }
};

module.exports = formatJsonFile;
