import express from 'express';
import os from 'os';
import dns from 'dns';
import { readFileContent } from './read.js';

const app = express();
const PORT = 3000;

app.get('/test', (req, res) => {
    res.send("Test route is working!");
});

app.get('/readfile', (req, res) => {
    const content = readFileContent('./Data.txt');
    res.send(content);
});

app.get('/systemdetails', (req, res) => {
    const systemInfo = {
        platform: os.platform(),
        totalMemory: `${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`,
        freeMemory: `${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`,
        cpuModel: os.cpus()[0].model,
        cpuCores: os.cpus().length
    };
    res.json(systemInfo);
});

app.get('/getip', (req, res) => {
    dns.lookup('masaischool.com', { all: true }, (err, addresses) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({
            hostname: "masaischool.com",
            addresses: addresses.map(addr => ({
                family: `IPv${addr.family}`,
                address: addr.address
            }))
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
