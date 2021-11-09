FROM registry.access.redhat.com/ubi8/nodejs-12

# WORKDIR /tmp/src

USER 0 

COPY . /tmp/src

RUN chown -R 1001:0 /tmp/src 

USER 1001

# COPY package.json ./

RUN npm install

COPY . /tmp/src

EXPOSE 8080

CMD [ "node", "index.js" ]