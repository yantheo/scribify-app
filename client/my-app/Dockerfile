FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm i -g react-scripts@5.0.0

COPY . .

EXPOSE 3000

CMD ["npm", "start"]