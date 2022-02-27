FROM node:12.22.1 as builder

WORKDIR /app

COPY . .

RUN yarn --frozen-lockfile

RUN yarn build

ENV PORT=80

EXPOSE 80

CMD ["yarn", "run:api:ci"]
