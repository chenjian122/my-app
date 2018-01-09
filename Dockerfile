FROM node:6.9.5

RUN git clone https://github.com/chenjian122/my-app.git /var/www \
    && cd /var/www \
    && npm install \
    && npm run build

EXPOSE 4200

WORKDIR /var/www
ENTRYPOINT ["npm", "run", "start"]
