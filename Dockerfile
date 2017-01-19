FROM keymetrics/pm2-docker-alpine:latest

ADD . /app
WORKDIR /app
RUN npm install
CMD ["npm", "start"]
