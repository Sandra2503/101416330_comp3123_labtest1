const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(process.cwd(), 'Logs');
function setupLogsDirectory() {
    if (!fs.existsSync(logsDirectory)) {
        fs.mkdirSync(logsDirectory);
        console.log('Successfully createed the Logs directory.');
    } else {
        console.log('Duplicate Logs directory exists.');
    }

    process.chdir(logsDirectory);

    for (let flag = 1; flag < 10; flag++) {
        const fileName = `log${flag}.txt`;
        fs.writeFileSync(fileName, `File number: ${flag}`);
        console.log(fileName);
    }
}

setupLogsDirectory();
