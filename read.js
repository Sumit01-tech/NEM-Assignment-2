import fs from 'fs';

export function readFileContent(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return data;
    } catch (err) {
        return `Error reading file: ${err.message}`;
    }
}
