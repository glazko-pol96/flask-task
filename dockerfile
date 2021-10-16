FROM node

WORKDIR /node-app

COPY package.json /node-app

RUN npm install

COPY . . 

EXPOSE 80

CMD ["npm", "run", "dev"]