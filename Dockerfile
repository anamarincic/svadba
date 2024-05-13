FROM node:18-alpine as builder
WORKDIR /svatovi-str/
COPY public/ /svatovi-str/public
COPY src/ /svatovi-str/src
COPY package.json /svatovi-str/
COPY package-lock.json /svatovi-str/
RUN npm install
CMD ["npm", "start"]