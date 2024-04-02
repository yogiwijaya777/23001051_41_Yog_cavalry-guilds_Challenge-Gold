# Base Stage: Install Dependencies
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

# Development Stage: Build the app
FROM base AS development
ENV NODE_ENV=development
CMD npm start

# Production Stage: Build the app and copy to Nginx
FROM nginx:alpine as production
COPY --from=base /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
