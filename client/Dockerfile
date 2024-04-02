FROM node:20-alpine as base
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .

FROM base as development
ENV NODE_ENV=development
CMD ["npm", "start"]

FROM base as build
RUN npm run build

FROM node:20-alpine as production
COPY --from=build /app/build /app/build
COPY package*.json .
RUN npm install --only=production
RUN chown -R node:node /app
USER node
ENV NODE_ENV=production
CMD ["npx", "serve", "-s", "build"]

