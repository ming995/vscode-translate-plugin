const net = require("net"),

server = net.createServer(connection => {
    console.log("socket对象=====", connection);
})

server.listen(3000);