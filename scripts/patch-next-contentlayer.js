const fs = require('fs');
const path = require('path');

// Path to next-contentlayer package.json
const packageJsonPath = path.join(
  process.cwd(),
  'node_modules',
  'next-contentlayer',
  'package.json'
);

// Check if the file exists
if (fs.existsSync(packageJsonPath)) {
  console.log('Patching next-contentlayer package.json...');
  
  // Read the package.json file
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Update the peerDependencies to include Next.js 15
  if (packageJson.peerDependencies && packageJson.peerDependencies.next) {
    packageJson.peerDependencies.next = '^12 || ^13 || ^14 || ^15';
    
    // Write the updated package.json back to file
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('Successfully patched next-contentlayer to support Next.js 15!');
  } else {
    console.log('next-contentlayer package.json does not have the expected peerDependencies structure.');
  }
} else {
  console.log('next-contentlayer package.json not found. No patching needed.');
}