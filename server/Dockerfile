FROM node:16.0-alpine
WORKDIR /be
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD [ "npm", "run" , "start" ]