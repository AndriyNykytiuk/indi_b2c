FROM node:22.14.0-alpine3.21
WORKDIR /app
COPY ./ .
RUN npm install && npm run build --verbose && npm cache clean --force
EXPOSE 4173
CMD [ "npm", "run", "preview" ]
