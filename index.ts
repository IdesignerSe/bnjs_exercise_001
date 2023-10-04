const server = Bun.serve({
    port: 4000,
    fetch(req) {
        return new Response('Hello Master Joda IDeS King BEE');
    },
});

console.log(`Listening on port ${server.port}`);