# Dockerfile for Angular application with Nginx
# Multi-stage build: Build Angular app and serve with Nginx

# Build stage
FROM node:16-alpine AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code and build the application
COPY . .
RUN npm run build

# Production stage with Nginx
FROM nginx:alpine AS production

# Copy built application from build stage
COPY --from=build /app/dist/frontend /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]