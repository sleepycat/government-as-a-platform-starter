FROM node:13-alpine
LABEL maintainer="mike.williamson@cds-snc.ca"

ENV NODE_ENV production

WORKDIR /app
COPY . .
RUN npm ci

USER node
EXPOSE 3000
CMD ["npm",  "start"]
