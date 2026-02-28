const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) {
            walkDir(dirPath, callback);
        } else {
            callback(dirPath);
        }
    });
}

walkDir('./src', (filePath) => {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf-8');
        // Replace exact `bg-[#0A1128]` with `bg-transparent` unless it's in layout.tsx body
        // Actually replacing it with '' is cleaner, but `bg-transparent` is fine and preserves spacing.
        // Let's replace `bg-[#0A1128]` but not `bg-[#0A1128]/80`
        const regex = /bg-\[#0A1128\](?!\/)/g;
        if (regex.test(content)) {
            // If it's CosmicBackground.tsx, keep it!
            if (!filePath.includes('CosmicBackground') && !filePath.includes('layout.tsx')) {
                content = content.replace(regex, 'bg-transparent');
                fs.writeFileSync(filePath, content, 'utf-8');
                console.log(`Updated ${filePath}`);
            }
        }
    }
});
