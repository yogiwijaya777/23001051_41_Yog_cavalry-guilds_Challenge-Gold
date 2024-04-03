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
#SET OWNER FIRST FOR FAST REBUILD
RUN chown -R node:node /app
WORKDIR /app
COPY --from=build /app/dist /app/dist
COPY package*.json /app
RUN npm ci --only=production
COPY ecosystem.config.json /app
#Change directory ownership
USER node
ENV NODE_ENV=production
CMD npm start