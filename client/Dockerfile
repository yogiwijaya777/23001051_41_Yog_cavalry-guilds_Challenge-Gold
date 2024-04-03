FROM node:20-alpine as base
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .

FROM base as development
ENV NODE_ENV=development
CMD ["npm", "start"]

FROM base AS build
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL
RUN npm run build

FROM node:20-alpine as production
WORKDIR /app
#SET OWNER FIRST FOR FAST REBUILD
RUN chown -R node:node /app
COPY --from=build /app/build /app/build
COPY package*.json /app
RUN npm ci --only=production && npm cache clean --force
USER node
ENV NODE_ENV=production
CMD ["npx", "serve", "-s", "build"]

