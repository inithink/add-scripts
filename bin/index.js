#! /usr/bin/env node
const fs = require('fs')
const path = require("path");
let packageJSONPath = path.join(process.cwd(), 'package.json');
let json = JSON.parse(fs.readFileSync(packageJSONPath, 'utf-8'));
if (json.scripts) {
    if (json.scripts.start) {
        process.exit(0)
    }
}

if (!json.main) {
    throw new Error('no main property specified')
}

json.scripts = {
    ...json.scripts,
    start: 'node .',
}
fs.writeFileSync(packageJSONPath, JSON.stringify(json, null, 2))