import { writeFile } from 'fs/promises';

// Define the content of the .npmrc file
const npmrcContent = `
@think-zambia-foundation:registry=https://npm.pkg.github.com
//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}
`;

try {
  await writeFile('.npmrc', npmrcContent, { encoding: 'utf8' });
  console.log('.npmrc file created successfully.');
} catch (error) {
  console.error('Failed to create .npmrc file:', error);
}
