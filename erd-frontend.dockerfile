# Use Node.js to build the frontend application
FROM node:16 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Use NGINX to serve the build files
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx.conf to replace the default configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
