FROM node:alpine

RUN apk add --update nodejs

WORKDIR /app

COPY . .

RUN yarn --frozen-lockfile

RUN yarn build:api

ENV PORT=80

EXPOSE 80

CMD ["yarn", "run:api:ci"]
