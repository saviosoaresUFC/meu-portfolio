const fs = require('fs');
const path = require('path');

const getAllFiles = (dir, ext) => {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) { 
            if (!filePath.includes('node_modules') && !filePath.includes('.git')) {
                results = results.concat(getAllFiles(filePath, ext)); 
            }
        } else {
            if (!ext || ext.some(e => filePath.endsWith(e))) {
                results.push(filePath);
            }
        }
    });
    return results;
};

const srcFiles = getAllFiles('.', ['.html', '.css', '.js']);
const imgFiles = getAllFiles('./assets', ['.png', '.jpg', '.jpeg', '.svg', '.gif', '.webp']);
const unused = [];

imgFiles.forEach(img => {
    const name = path.basename(img);
    let used = false;
    for (const src of srcFiles) {
        if (fs.readFileSync(src, 'utf8').includes(name)) {
            used = true;
            break;
        }
    }
    if (!used) unused.push(img);
});

fs.writeFileSync('unused_images.txt', unused.join('\n'));
console.log('Done writing unused_images.txt');
