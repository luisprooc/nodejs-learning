import http from "http";

import fs from "fs";

const html = fs.readFileSync('./index.html');


http.createServer((request,response) => {

    const { url } = request;

    response.writeHead(200,{
        'Content-Type': 'text/html'
    });

    if( url === '/') response.write(fs.readFileSync(html))

    else if (url === '/about') response.write('./about.html');

    else{
        response.writeHead(404,{
            'Content-Type': 'text/html'
        });

        response.write('PAGE NOT FOUND');
    }

    response.end();
})
.listen(8080);


