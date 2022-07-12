FROM node:16.15.1-alpine
ENV APP_ROOT /home/pinapp
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}
RUN npm ci

CMD ["node", "index.js"]

