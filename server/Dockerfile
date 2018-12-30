FROM node:9.4.0-alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install -qy

COPY . .

EXPOSE 5001

CMD ["npm", "start"]