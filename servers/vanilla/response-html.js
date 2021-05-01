import http from "http";

import fs from "fs";

const html = fs.readFileSync('./index.html');


http.createServer((request,response) => {

    response.writeHead(200,{
        'Content-Type': 'text/html'
    });

    response.write(html);
    response.end();
})
.listen(8080);


