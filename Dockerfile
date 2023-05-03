FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 3001
CMD [ "npm", "start" ]

# sudo docker build --tag node-docker .
# sudo docker run -p 3001:3001 node-docker
