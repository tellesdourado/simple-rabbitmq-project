FROM node:14-alpine

WORKDIR /home/project

COPY package*.json ./

RUN npm install

COPY . .

#isso vai manter a env do docker como principal
RUN rm .env

RUN command npx tsc

EXPOSE 3333

CMD [ "npm", "run", "build:start" ]
