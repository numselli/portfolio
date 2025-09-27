# FROM node:20.5.0-alpine3.17
FROM node:22.17.1-alpine3.21
# FROM node:24.9.0-bookworm-slim


RUN mkdir /app
WORKDIR /app
COPY out/ /app

RUN apk add g++ make py3-pip

ENV NODE_ENV production

EXPOSE 3000

CMD ["node", "/app/server/index.mjs"]
