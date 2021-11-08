FROM registry.access.redhat.com/ubi8/nodejs-12

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "index.js" ]