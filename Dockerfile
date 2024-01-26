FROM node:current-alpine

COPY ./src ./Backend/src
COPY ./config ./Backend/config
COPY ./package.json ./Backend/package.json
COPY ./package-lock.json ./Backend/package-lock.json
COPY ./tsconfig.build.json ./Backend/tsconfig.build.json

WORKDIR ./Backend

RUN npm i && npm run build

EXPOSE 3000