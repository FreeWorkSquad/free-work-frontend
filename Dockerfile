# Stage 1: Build the Angular application
FROM node:16-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the Angular application using a lightweight web server
FROM nginx:alpine
COPY --from=build /app/dist/free-work-frontend /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
