FROM node:20.5.0-alpine3.17

RUN mkdir /app
COPY .output/ /app

ENV NODE_ENV production

EXPOSE 3000

CMD ["node", "/app/server/index.mjs"]
