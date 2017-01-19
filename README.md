# Docker & PM2 Example

[![Build Status](https://travis-ci.org/danprince/docker-pm2-example.svg?branch=master)](https://travis-ci.org/danprince/docker-pm2-example)

Working example of using [Docker Compose](https://docs.docker.com/compose/) with a Node app, running under [PM2](http://pm2.keymetrics.io/) with watch enabled on a mounted volume.

1. Run `docker-compose up` to mount the volume and start the app
2. Visit `localhost:4000` to verify that it is working
3. Change `index.js` outside the container
4. Visit `localhost:4000` again to verify that it changed

## Tests

1. Run the app with `docker-compose up`
2. Run the tests with `npm test` (outside the container)

