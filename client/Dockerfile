FROM node:20-alpine as base
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .

FROM base as development
ENV NODE_ENV=development
CMD ["npm", "start"]

FROM base as production
RUN chown -R --no-dereference node:node /app
USER node
ENV NODE_ENV=production
CMD ["npm", "start"]

