FROM oven/bun:1

WORKDIR /usr/src/app

COPY ./packages ./packages
COPY ./bun.lock ./bun.lock

COPY ./package.json ./package.json
COPY ./turbo.json ./turbo.json

COPY ./apps/ws ./apps/ws

RUN bun install --frozen-lockfile

ARG DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres"
ENV DATABASE_URL=$DATABASE_URL
RUN cd packages/db && bunx prisma generate

EXPOSE 8080

CMD [ "bun","run","start:ws" ]