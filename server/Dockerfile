#Base Stage
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json .

RUN npm install --only=production

COPY . .

#Development Stage
FROM base AS development
RUN npm install --only=development
ENV NODE_ENV=development
CMD npm run dev

#Build Stage
FROM base AS build
RUN npm run build

#Production Stage
FROM node:20-alpine AS production
RUN npm install -g pm2

COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules .
COPY package*.json .
COPY knexfile.js .
COPY ecosystem.config.json .
#Change directory ownership
RUN chown -R node:node /app
USER node
ENV NODE_ENV=production
CMD npm start