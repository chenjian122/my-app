FROM node:6.9.5

RUN git clone https://github.com/chenjian122/my-app.git /var/www \
    && cd /var/www \
    && npm install --global rimraf \
    && npm run clean \
    && npm install --global webpack webpack-dev-server typescript@2.1.5 \
    && npm install \
    && npm run build

EXPOSE 8080

WORKDIR /var/www
ENTRYPOINT ["npm", "run", "start"]
