const server = Bun.serve({
    port: 300,
    fetch(req) {
        return new Response('Hello Master Joda IDeS');
    },
});

console.log(`Listening on port ${server.port}`);