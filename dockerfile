FROM node

WORKDIR /flask-task

COPY package.json /flask-task

RUN npm install

COPY . . 

EXPOSE 80

CMD ["npm", "run", "dev"]
