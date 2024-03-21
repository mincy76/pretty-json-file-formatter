# pretty-json-file-formatter

A Node.js library for formatting JSON files in a pretty and human-readable way.

## Installation

You can install the library via npm:

```bash
npm install pretty-json-file-formatter
```

## Usage

```javascript
const formatJsonFile = require('pretty-json-file-formatter');

// Format a JSON file
formatJsonFile('/path/to/your/file.json')
  .then(() => {
    console.log('JSON file formatted successfully.');
  })
  .catch((err) => {
    console.error('An error occurred:', err);
  });
```

## API

### formatJsonFile(filePath)

Formats the JSON data in the specified file and writes the formatted data back to the same file.

- `filePath` (string): The path to the JSON file.

Returns a Promise that resolves when formatting is done.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
