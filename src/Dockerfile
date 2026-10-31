FROM node:26.12.1-alpine3.24 as build-stage

WORKDIR /preApp
COPY . /preApp

RUN npm install --force
RUN npm run build



FROM node:26.12.1-alpine3.24 as production-stage

RUN mkdir /app
COPY --from=build-stage /preApp/.output /app/.output

EXPOSE 3000

CMD ["node", "/app/.output/server/index.mjs"]