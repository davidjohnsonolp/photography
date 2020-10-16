FROM node:12.16.3

RUN mkdir -p /usr/local/app
WORKDIR /usr/local/app

COPY package*.json ./

RUN npm install

RUN npx snowpack

COPY . .

CMD ["npm", "start"]