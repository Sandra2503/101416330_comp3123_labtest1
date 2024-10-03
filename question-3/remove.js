const fs = require('fs');
const path = require('path');
const logsDirectory = path.join(process.cwd(), 'Logs');

function deleteLogsDirectory() {
    if (fs.existsSync(logsDirectory)) {
        const filesList = fs.readdirSync(logsDirectory);
        filesList?.forEach(item => {
            console.log(`delete files...${item}`);
            fs.unlinkSync(path?.join(logsDirectory, item));
        });
        fs.rmdirSync(logsDirectory);
        console.log('Logs directory removed.');
    } else {
        console.log('No such Logs directory exist!');
    }
}
deleteLogsDirectory();
