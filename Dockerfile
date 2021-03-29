FROM node:14-alpine

RUN apk add --update wget

WORKDIR /home/project

COPY package*.json ./

RUN npm install

COPY . .

#isso vai manter a env do docker como principal
RUN rm .env

RUN npx tsc

EXPOSE 3333

HEALTHCHECK  --interval=10s --timeout=3s \
  CMD wget --no-verbose --tries=10 --spider http://rabbitmq:15672 || exit 1

CMD [ "npm", "run", "build:start" ]
