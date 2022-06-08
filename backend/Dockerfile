FROM node:16-alpine

WORKDIR /usr/src/app

COPY ./package*.json ./
RUN npm install
COPY ./ .

RUN npm run-script db:reset:localhost
EXPOSE 8080
CMD ["npm", "start"]