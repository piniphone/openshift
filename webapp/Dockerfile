FROM node:16.15.1-alpine

ENV APP_ROOT /home/node/app
ENV NODE_OPTIONS="–max_old_space_size=2048"

RUN mkdir -p ${APP_ROOT}

ADD package.json /tmp/package.json
#ADD yarn.lock /tmp/yarn.lock
#RUN cd /tmp && yarn --frozen-lockfile

RUN cd /tmp && npm i

RUN mv /tmp/node_modules ${APP_ROOT}

WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

ARG API_URL
ARG API_URL_BROWSER
RUN API_URL=${API_URL} API_URL_BROWSER=${API_URL_BROWSER} npm run build

CMD ["npm", "run", "start"]
EXPOSE 3000
