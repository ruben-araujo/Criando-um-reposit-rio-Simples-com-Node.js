const { createServer } = require('node:http')

const host = 'localhost';
const port = 3000;

const app = createServer ((request, response) => {
    response.writeHead(200, { 'Content-type' : 'text/plain'});
    return response.end("Olá, NodeJS");
});

app.listen(port, host, () => {
    console.log(`Servidor NodeJS executando http://${host}:${port}`)
})