FROM keymetrics/pm2-docker-alpine:latest

ADD . /code
WORKDIR /code
RUN npm install
CMD ["npm", "start"]
