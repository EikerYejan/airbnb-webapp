FROM node:14-alpine as builder

WORKDIR /app

COPY . .

RUN yarn --frozen-lockfile

RUN yarn build

ENV PORT=80

EXPOSE 80

CMD ["yarn", "run:api:ci"]
