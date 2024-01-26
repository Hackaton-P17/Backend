FROM node:current-alpine

COPY . ./Backend

WORKDIR ./Backend

RUN npm i

EXPOSE 3000