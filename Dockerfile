# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /src

# install and cache app dependencies
COPY package.json /src/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

COPY . /src

# start app
CMD ["npm", "start"]