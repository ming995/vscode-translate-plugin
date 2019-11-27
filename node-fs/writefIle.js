/**
 *  node 写文件
 */

const fs = require('fs');
const data  = [
    {
        name: "yanming.hou",
        organization: "HelloGithub",
        gender: "male",
        workExperience: [
            {
                company: "TongDun",
                position: "FE"
            },
            {
                company: "Terminal",
                position: "FE"
            }
        ]
    }
]

fs.writeFile('person.json', `${JSON.stringify(data)}`, (err) => {
    if (err) {
        throw err
    }
    console.log('文件写入成功!');
})

