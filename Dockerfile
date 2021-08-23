FROM node:14.15.4-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

EXPOSE 3000

ENTRYPOINT [ "yarn", "start" ]
