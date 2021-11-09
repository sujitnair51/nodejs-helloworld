FROM registry.access.redhat.com/ubi8/nodejs-12

USER 0 ADD app-src /tmp/src 
RUN chown -R 1001:0 /tmp/src 

USER 1001

WORKDIR /tmp/src

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "index.js" ]