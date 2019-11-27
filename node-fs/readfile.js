/**
 *  读文件
 */

const fs = require('fs');

fs.readFile('person.json', (err, data) => {
    if(err) {
        throw err;
    }

    let json = JSON.parse(data);
    console.log("读取数据===", json);
    
})