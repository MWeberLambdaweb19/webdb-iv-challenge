const server = require('./api/server.js'); // I am typing this out, not copying, for muscle memory

const port = 5000;
server.listen(port, () => console.log(`\nAPI running on port ${port}\n`));