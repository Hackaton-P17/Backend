# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Start the server using the production build
CMD [ "node", "dist/src/main.js" ]
EXPOSE 3000