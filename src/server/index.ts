import Server from './server';
const server = new Server();
const port: number = parseInt(process.env.PORT, 10) || 3000;
server.run(port);
