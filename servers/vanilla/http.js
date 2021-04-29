import http from "http";

http.createServer((request,response) => {
    response.write("HELLO WORLD!");
    response.end();
})
.listen(8080);


