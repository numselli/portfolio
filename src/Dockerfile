FROM node:24.10.0-alpine3.22 as build-stage

WORKDIR /preApp
COPY . /preApp

RUN npm install
RUN npm run build



FROM node:24.10.0-alpine3.22 as production-stage

RUN mkdir /app
COPY --from=build-stage /preApp/.output /app/.output

EXPOSE 3000

CMD ["node", "/app/.output/server/index.mjs"]