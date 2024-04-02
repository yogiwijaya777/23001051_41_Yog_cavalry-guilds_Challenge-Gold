FROM node:20-alpine as base

WORKDIR /app

COPY package*.json .
RUN npm ci
COPY . .


FROM base as development

ENV NODE_ENV=development
CMD npm start


FROM node:20-alpine AS production

RUN chown -R node:node /app
USER node

ENV NODE_ENV=production

RUN npm run build
RUN npx serve -s build

