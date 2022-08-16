FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN npm run build

ENV NODE_ENV production

CMD ["node", "dist/main.js"]
