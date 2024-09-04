FROM node:20.16.0-slim

COPY ./app/ /app/
RUN npm ci --prefix /app/
RUN npm run build --prefix /app/

ENTRYPOINT [ "npm", "start", "--prefix", "/app/" ]
