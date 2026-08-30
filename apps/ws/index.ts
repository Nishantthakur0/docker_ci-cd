import { prisma } from "db/client";

Bun.serve({
    port: 8080,
    fetch(req,server){
        if(server.upgrade(req)){
            return;
        }
        return new Response("Upgrade falied,", { status: 500 });
    },
    websocket: {
        message(ws, message) {
            prisma.user.create({
                data: {
                    username: Math.random().toString(),
                    password: Math.random().toString()
                }
            })
            ws.send(message);
        },
    }
});