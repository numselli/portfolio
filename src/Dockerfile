# FROM node:20.5.0-alpine3.17
FROM node:22.15.1-alpine3.21


RUN mkdir /app
COPY out/ /app

ENV NODE_ENV production

EXPOSE 3000

CMD ["node", "/app/server/index.mjs"]
