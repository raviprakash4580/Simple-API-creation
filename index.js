const http = require('http');
const data = require('./source');

//const data {name: 'Ram Shanar', email:'ram@email.com', age: 30}; 

http.createServer((req, res)=>{
res.writeHead (200, {'Content-Type': 'application\json'});
res.write(JSON.stringify(data));
res.end();
}).listen(4000);
