# Base Stage: Install Dependencies
FROM node:20-alpine as development
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
ENV NODE_ENV=development
ENV REACT_APP_API_URL=http://localhost:5000/v1
CMD npm start

