const { join } = require('path');
const projectPath = join(process.cwd(), '/src/server/tsconfig.json');

console.log(`ProjectPath:${projectPath}`);
require('ts-node').register({
  project: projectPath
});
