FROM oven/bun:1

WORKDIR /usr/src/app

COPY ./packages ./packages
COPY ./bun.lock ./bun.lock

COPY ./package.json ./package.json
COPY ./turbo.json ./turbo.json

Copy ./apps/ws ./apps/ws

RUN bun install
RUN bun run db:generate

EXPOSE 8080

CMD [ "bun","run","start:ws" ]