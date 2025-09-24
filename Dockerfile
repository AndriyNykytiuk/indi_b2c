# Stage 1: Build
FROM node:22.14.0-alpine3.21 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Runtime
FROM node:22.14.0-alpine3.21
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
RUN npm install --omit=dev
EXPOSE 4173
CMD [ "npm", "run", "preview" ]
