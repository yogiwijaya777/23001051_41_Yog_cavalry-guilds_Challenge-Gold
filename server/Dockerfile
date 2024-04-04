#Base Stage
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json .

RUN npm ci 

COPY . .

#Development Stage
FROM base AS development

ENV NODE_ENV=development
CMD npm run dev

#Build Stage
FROM base AS build
RUN npm run build

#Production Stage
FROM node:20-alpine AS production
WORKDIR /app
#SET OWNER FIRST FOR FAST REBUILD
RUN chown -R node:node /app
COPY --from=build /app/dist /app/dist
COPY package*.json /app
COPY knexfile.js /app/dist
RUN npm ci --only=production
COPY ecosystem.config.json /app
#Change directory ownership
USER node
ENV NODE_ENV=production
CMD npm start